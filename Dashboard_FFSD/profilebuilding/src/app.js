const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const FuzzySet = require("fuzzyset");
const app = express();
const port = process.env.PORT || 5174;

require("./db/conn");

app.set("view engine", "ejs");

const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const freelance = require("./FreelanceDB");
const professional = require("./ProfessionalDB");
const software = require("./SoftwareDB");
const parttime = require("./PartTimeDB");
const seminars = require("./SeminarsDB");
const others = require("./OthersDB");
const { UserDetails, LatestUser } = require("./userDetails");
const { ClientDetails, LatestClient } = require("./clientDetails");
const jobVacancyDetails = require("./jobPost");

app.get("/department", (req, res) => {
  res.render("Department");
});

const FreelanceDB = require("./FreelanceDB");
const ProfessionalDB = require("./ProfessionalDB");
const SoftwareDB = require("./SoftwareDB");
const PartTimeDB = require("./PartTimeDB");
const SeminarsDB = require("./SeminarsDB");
const OthersDB = require("./OthersDB");
const Contact = require("./ContactSchema");

/*----------------P.S.SRAMESH--------------------------------- */
const getData = async () => {
  try {
    const freelanceData = await FreelanceDB.find().lean();
    console.log(freelanceData);
    const professionalData = await ProfessionalDB.find().lean();
    const softwareData = await SoftwareDB.find().lean();
    const partTimeData = await PartTimeDB.find().lean();
    const seminarsData = await SeminarsDB.find().lean();
    const othersData = await OthersDB.find().lean();

    return {
      freelance: freelanceData,
      professional: professionalData,
      software: softwareData,
      parttime: partTimeData,
      seminars: seminarsData,
      others: othersData,
    };
  } catch (error) {
    console.error("Error retrieving data:", error);
    return {};
  }
};
/*----------------P.S.SRAMESH--------------------------------- */
// Search function using FuzzySet for location, jobTitle, and details
const searchKeyword = (keyword, items) => {
  const fuzzy = FuzzySet();

  items.forEach((doc) => {
    // Add description, location, and job title for fuzzy matching
    fuzzy.add(doc.description);
    fuzzy.add(doc.location);
    fuzzy.add(doc.jobTitle);
  });

  const matches = fuzzy.get(keyword);
  console.log(matches);

  if (!matches || !matches.length) return [];

  const uniqueMatches = Array.from(new Set(matches.map((match) => match[1])));
  console.log(uniqueMatches);
  return uniqueMatches.map((match) => {
    return items.find(
      (doc) =>
        doc.workmode === match ||
        doc.location === match ||
        doc.jobTitle === match
    );
  });
};

// Define routes
app.get("/search", async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword parameter is required" });
  }

  const allData = await getData();
  console.log(allData);
  const results = {};

  Object.keys(allData).forEach((category) => {
    results[category] = searchKeyword(keyword, allData[category]);
    console.log(results[category]);
  });

  res.json(results);
});

app.get("/", (req, res) => {
  res.render("client_seeker_choice");
});

app.get("/Software_IT2", (req, res) => {
  const department = req.query.department;
  const array = req.query.department;
  console.log("Department:", department);
  var Job1 = "./FreelanceDB";
  if (department == "Freelance") {
    Job1 = "./FreelanceDB";
  }

  if (department == "Others") {
    Job1 = "./OthersDB";
  }

  if (department == "Software") {
    Job1 = "./SoftwareDB";
  }

  if (department == "PartTime") {
    Job1 = "./PartTimeDB";
  }

  if (department == "Professional") {
    Job1 = "./ProfessionalDB";
  }

  var Job = require(Job1);

  Job.find({})
    .then((docs) => {
      var data = docs.map((doc) => {
        const { _id, ...rest } = doc.toObject();
        return { ...rest, id: _id.toString() };
      });
      console.log("Retrieved data:", data);
      console.log(data.length);
      res.render("Software_IT2", { jobData: data, port: port });
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
});

/*----------------TEJA--------------------------------- */
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/client_seeker_choice", (req, res) => {
  res.render("client_seeker_choice");
});

app.get("/profile_det", (req, res) => {
  res.render("profile_det");
});

app.get("/profile_det_client", (req, res) => {
  res.render("profile_det_client");
});

app.post("/send_user_details", async (req, res) => {
  try {
    await LatestUser.deleteMany({});

    const latestUser = new LatestUser(req.body);
    const userDetails = new UserDetails(req.body);

    await latestUser.save();

    userDetails
      .save()
      .then(() => {
        res.redirect("/seeker_home");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving user details");
      });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding user details");
  }
});
/*----------------TEJA--------------------------------- */
/*----------------P.S.SRAMESH--------------------------------- */
app.get("/category/:category/:id", async (req, res) => {
  const { category, id } = req.params;
  console.log(category);
  let Model;

  switch (category) {
    case "Freelance":
      Model = FreelanceDB;
      break;
    case "Professional":
      Model = ProfessionalDB;
      break;
    case "Software":
      Model = SoftwareDB;
      break;
    case "Parttime":
      Model = PartTimeDB;
      break;
    case "Seminars":
      Model = SeminarsDB;
      break;
    case "Others":
      Model = OthersDB;
      break;
    default:
      return res.status(400).json({ error: "Invalid category" });
  }

  try {
    const vacancy = await Model.findById(id);

    if (!vacancy) {
      return res.status(404).json({ error: "vacancy not found" });
    }

    res.render("PostDetails", { vacancy });
  } catch (error) {
    console.error("Error retrieving vacancy:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
/*----------------P.S.SRAMESH--------------------------------- */

/*----------------TEJA--------------------------------- */
app.get("/seeker_home", async (req, res) => {
  try {
    const latestUserDetails = await LatestUser.findOne({}).exec();

    if (!latestUserDetails) {
      return res.status(404).send("User details not found");
    }

    res.render("seeker_home", { userDetails: latestUserDetails, port: port });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user details");
  }
});

app.post("/send_client_details", async (req, res) => {
  try {
    await LatestClient.deleteMany({});

    const latestClient = new LatestClient(req.body);
    const clientDetails = new ClientDetails(req.body);

    await latestClient.save();

    clientDetails
      .save()
      .then(() => {
        res.redirect("/client_home");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error saving client details");
      });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding client details");
  }
});

app.get("/seeker_profile_page", async (req, res) => {
  try {
    const userDetails = await LatestUser.findOne({}).exec();

    if (!userDetails) {
      return res.status(404).send("User details not found");
    }

    res.render("seeker_profile_page", { userDetails });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user details");
  }
});

app.get("/client_home", async (req, res) => {
  try {
    const latestClientDetails = await LatestClient.findOne({}).exec();

    if (!latestClientDetails) {
      return res.status(404).send("Client details not found");
    }

    res.render("client_home", {
      clientDetails: latestClientDetails,
      port: port,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching client details");
  }
});

app.get("/client_profile_page", async (req, res) => {
  try {
    const userDetails = await LatestClient.findOne({}).exec();

    if (!userDetails) {
      return res.status(404).send("User details not found");
    }

    res.render("seeker_profile_page", { userDetails });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user details");
  }
});

app.get("/job_post", async (req, res) => {
  res.render("job_post");
});

app.post("/job_post", async (req, res) => {
  const {
    jobTitle,
    category,
    description,
    skills_required,
    workmode,
    location,
    company,
    deadline,
    salary,
  } = req.body;

  try {
    switch (category) {
      case "Freelance":
        await freelance.create({
          jobTitle,
          category,
          description,
          skills_required,
          workmode,
          location,
          company,
          deadline,
          salary,
        });
        break;
      case "Professional":
        await professional.create({
          jobTitle,
          category,
          description,
          skills_required,
          workmode,
          location,
          company,
          deadline,
          salary,
        });
        break;
      case "Software":
        await software.create({
          jobTitle,
          category,
          description,
          skills_required,
          workmode,
          location,
          company,
          deadline,
          salary,
        });
        break;
      case "Part time":
        await parttime.create({
          jobTitle,
          category,
          description,
          skills_required,
          workmode,
          location,
          company,
          deadline,
          salary,
        });
        break;
      case "Seminars":
        await seminars.create({
          jobTitle,
          category,
          description,
          skills_required,
          workmode,
          location,
          company,
          deadline,
          salary,
        });
        break;
      case "Others":
        await others.create({
          jobTitle,
          category,
          description,
          skills_required,
          workmode,
          location,
          company,
          deadline,
          salary,
        });
        break;
      default:
        throw new Error("Invalid category");
    }

    console.log(`Vacancy posted successfully for category: ${category}`);
    res.redirect(`/vacancy_confirmation`);
  } catch (error) {
    console.error("Error posting job vacancy:", error);
    res.status(500).send("Error posting job vacancy");
  }
});

app.get("/Freelance", async (req, res) => {
  try {
    const vacancies = await freelance.find().lean();
    res.render("Freelance", { vacancies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vacancies");
  }
});

app.get("/Professional", async (req, res) => {
  try {
    const vacancies = await professional.find().lean();
    res.render("Professional", { vacancies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vacancies");
  }
});

app.get("/software", async (req, res) => {
  try {
    const vacancies = await software.find().lean();
    res.render("software", { vacancies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vacancies");
  }
});

app.get("/part_time", async (req, res) => {
  try {
    const vacancies = await parttime.find().lean();
    res.render("part_time", { vacancies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vacancies");
  }
});

app.get("/seminars", async (req, res) => {
  try {
    const vacancies = await seminars.find().lean();
    res.render("seminars", { vacancies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vacancies");
  }
});

app.get("/others", async (req, res) => {
  try {
    const vacancies = await others.find().lean();
    res.render("others", { vacancies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vacancies");
  }
});

app.get("/vacancy_confirmation", (req, res) => {
  res.render("vacancy_confirmation");
});
/*----------------TEJA--------------------------------- */
/*----------------MAMATHA--------------------------------- */
app.get("/contactus", async (req, res) => {
  res.render("contactus");
});

app.post("/submit", async (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });

  newContact
    .save()
    .then((contact) => {
      console.log("Contact saved:", contact);
      res.send("Form submitted successfully!");
    })
    .catch((err) => {
      console.error("Error saving contact:", err);
      res
        .status(500)
        .json({ error: "An error occurred while saving the contact." });
    });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
