/*const queryString2 = window.location.search;
  const urlParams3 = new URLSearchParams(queryString2);
  var variable1 = urlParams3.get('department');
  console.log(variable1);*/
/*var jobData ={
  "Networking": [
    {
      "jobTitle": "Network Engineer",
      "company": "TechNet Solutions",
      "location": "Bangalore, Karnataka",
      "details": "Experienced | Full-time",
      "description": "As a network engineer...",
      "salary": 8,  // 8 lakhs per annum
      "rating": 4
    },
    {
      "jobTitle": "Network Administrator",
      "company": "Netlink Technologies",
      "location": "Pune, Maharashtra",
      "details": "Experienced | Part-time",
      "description": "As a network administrator...",
      "salary": 6,  // 6 lakhs per annum
      "rating": 4.5
    }
  ],
  "Electrical": [
    {
      "jobTitle": "Electrical Engineer",
      "company": "PowerTech Solutions",
      "location": "Hyderabad, Telangana",
      "details": "Experienced | Full-time",
      "description": "As an electrical engineer...",
      "salary": 10,  // 10 lakhs per annum
      "rating": 4.2
    },
    {
      "jobTitle": "Electrical Technician",
      "company": "ElecPro Services",
      "location": "Chandigarh",
      "details": "Fresher | Internship",
      "description": "As an electrical technician...",
      "salary": 4,  // 4 lakhs per annum
      "rating": 3.8
    }
  ],
  "Mechanical": [
    {
      "jobTitle": "Mechanical Engineer",
      "company": "Mechatronix Industries",
      "location": "Mumbai, Maharashtra",
      "details": "Experienced | Full-time",
      "description": "As a mechanical engineer...",
      "salary": 12,  // 12 lakhs per annum
      "rating": 4.7
    },
    {
      "jobTitle": "Mechanical Designer",
      "company": "Machinex Designs",
      "location": "Ahmedabad, Gujarat",
      "details": "Experienced | Contract",
      "description": "As a mechanical designer...",
      "salary": 8,  // 8 lakhs per annum
      "rating": 4.4
    }
  ],
  "Civil Working": [
    {
      "jobTitle": "Civil Engineer",
      "company": "BuildWell Constructions",
      "location": "Delhi",
      "details": "Experienced | Full-time",
      "description": "As a civil engineer...",
      "salary": 14,  // 14 lakhs per annum
      "rating": 4.9
    },
    {
      "jobTitle": "Civil Technician",
      "company": "CivilWorks Ltd.",
      "location": "Kolkata, West Bengal",
      "details": "Fresher | Internship",
      "description": "As a civil technician...",
      "salary": 5,  // 5 lakhs per annum
      "rating": 4.3
    }
  ],
  "Machine Designer": [
    {
      "jobTitle": "Machine Designer",
      "company": "DesignMech Innovations",
      "location": "Coimbatore, Tamil Nadu",
      "details": "Experienced | Full-time",
      "description": "As a machine designer...",
      "salary": 11,  // 11 lakhs per annum
      "rating": 4.6
    },
    {
      "jobTitle": "Senior Machine Designer",
      "company": "MachTech Solutions",
      "location": "Gurgaon, Haryana",
      "details": "Experienced | Full-time",
      "description": "As a senior machine designer...",
      "salary": 15,  // 15 lakhs per annum
      "rating": 4.8
    }
  ],
  "Chemist": [
    {
      "jobTitle": "Analytical Chemist",
      "company": "ChemLab Research",
      "location": "Pune, Maharashtra",
      "details": "Experienced | Full-time",
      "description": "As an analytical chemist...",
      "salary": 9,  // 9 lakhs per annum
      "rating": 4.4
    },
    {
      "jobTitle": "Organic Chemist",
      "company": "OrganoTech Solutions",
      "location": "Chennai, Tamil Nadu",
      "details": "Fresher | Internship",
      "description": "As an organic chemist...",
      "salary": 6,  // 6 lakhs per annum
      "rating": 4
    }
  ],
  "Electronics": [
    {
      "jobTitle": "Electronics Engineer",
      "company": "ElectraTech Innovations",
      "location": "Bangalore, Karnataka",
      "details": "Experienced | Full-time",
      "description": "As an electronics engineer...",
      "salary": 11,  // 11 lakhs per annum
      "rating": 4.5
    },
    {
      "jobTitle": "Electronics Technician",
      "company": "ElectroWorks Pvt. Ltd.",
      "location": "Hyderabad, Telangana",
      "details": "Fresher | Internship",
      "description": "As an electronics technician...",
      "salary": 5,  // 5 lakhs per annum
      "rating": 4.2
    }
  ],
  "Government": [
    {
      "jobTitle": "Government Relations Officer",
      "company": "GovConnect Services",
      "location": "New Delhi",
      "details": "Experienced | Full-time",
      "description": "As a government relations officer...",
      "salary": 13,  // 13 lakhs per annum
      "rating": 4.6
    },
    {
      "jobTitle": "Government Analyst",
      "company": "GovData Analytics",
      "location": "Mumbai, Maharashtra",
      "details": "Experienced | Contract",
      "description": "As a government analyst...",
      "salary": 10,  // 10 lakhs per annum
      "rating": 4.3
    }
  ]
}
*/

// Function to create a job card

console.log(jobs);

function createJobCard(
  jobTitle,
  company,
  location,
  salary,
  details,
  description,
  ID,
  
) {
  // Create elements
  var cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.id = "job-list"; // Adding ID to each card, though it should be unique, in this case, it's overwritten

  var titleElement = document.createElement("h2");
  titleElement.textContent = jobTitle;

  var hrElement = document.createElement("hr");

  var jobDetailsElement = document.createElement("div");
  jobDetailsElement.classList.add("job_des");

  var companyElement = document.createElement("h5");
  companyElement.textContent = "Company: " + company;

  var locationElement = document.createElement("h5");
  locationElement.classList.add("location");
  locationElement.textContent = "Location: " + location;

  var detailsElement = document.createElement("h5");
  detailsElement.textContent = "Job Details: " + details;

  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;

  //var ratingElement = document.createElement("h5");
  //ratingElement.classList.add("rating");
  //ratingElement.textContent = "Rating: " + rating;

  var ratingImage = document.createElement("img");
  ratingImage.src = "../images/rating_icon.png";
  ratingImage.alt = "rating";

  // Append elements
  jobDetailsElement.appendChild(companyElement);
  jobDetailsElement.appendChild(locationElement);
  jobDetailsElement.appendChild(detailsElement);
  //jobDetailsElement.appendChild(ratingElement);
  //jobDetailsElement.appendChild(ratingImage);
  jobDetailsElement.appendChild(descriptionElement);

  cardContainer.appendChild(titleElement);
  cardContainer.appendChild(hrElement);
  cardContainer.appendChild(jobDetailsElement);

  // Create buttons
  var applyButton = document.createElement("button");
  applyButton.textContent = "Apply";

  applyButton.onclick = function () {
    apply(ID);
  };

  var saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.onclick = save;

  var messageButton = document.createElement("button");
  messageButton.textContent = "Message";
  messageButton.onclick = sendMessage;

  var reviewButton = document.createElement("button");
  reviewButton.textContent = "Rate and review";
  reviewButton.onclick = showCombinedPrompt;
  // Append buttons
  jobDetailsElement.appendChild(applyButton);
  jobDetailsElement.appendChild(document.createTextNode(" ")); // Adding space between buttons
  jobDetailsElement.appendChild(saveButton);
  jobDetailsElement.appendChild(document.createTextNode(" ")); // Adding space between buttons
  jobDetailsElement.appendChild(messageButton);
  jobDetailsElement.appendChild(document.createTextNode(" ")); // Adding space between buttons
  jobDetailsElement.appendChild(reviewButton);
  // Append card to container
  document.getElementById("job-listings").appendChild(cardContainer);
}
function getJobsByDepartment(variable1) {
  // Function to change department and update domains

  // Update the domains array based on the selected department
  if (variable1 in departmentDomains) {
    domains = jobData[variable1];
    console.log("Updated domains:", domains);
    return domains;
  } else {
    console.log("Department not found:", department);
  }
}
// Assuming you already have the jobs array defined

// Function to append job cards into a rectangular container
function appendJobCardsToContainer(containerId) {
  // Get the container element
  var container = document.getElementById(containerId);
  // Loop through the jobs array
  jobs.forEach((job) => {
    // Create a job card for each job object
    var jobCard = createJobCard(
      job.jobTitle,
      job.company,
      job.location,
      job.salary,
      job.workmode,
      job.description,
      job.id,
      
    );
    // Append the job card to the container
    //  container.appendChild(jobCard);
  });
}
appendJobCardsToContainer("job-listings");
function paginate(containerId, itemsPerPage) {
  var container = document.getElementById(containerId);
  var jobCards = container.getElementsByClassName("card-container");
  var totalPages = Math.ceil(jobCards.length / itemsPerPage);

  // Create pagination buttons
  var paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination");

  for (var i = 0; i < totalPages; i++) {
    var button = document.createElement("button");
    button.textContent = i + 1;
    button.addEventListener("click", function () {
      showPage(this.textContent, jobCards, itemsPerPage);
    });
    paginationContainer.appendChild(button);
  }

  container.appendChild(paginationContainer);

  // Show the first page initially
  showPage(1, jobCards, itemsPerPage);
}

function showPage(pageNumber, jobCards, itemsPerPage) {
  var startIndex = (pageNumber - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  // Hide all job cards
  for (var i = 0; i < jobCards.length; i++) {
    jobCards[i].style.display = "none";
  }

  // Show job cards for the current page
  for (var i = startIndex; i < Math.min(endIndex, jobCards.length); i++) {
    jobCards[i].style.display = "block";
  }
}

// Usage example
paginate("job-listings", 2); // Assuming "job-listings" is the ID of the container and you want 5 items per page

function longestCommonSubstring(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  let lcs = [];
  for (let i = 0; i <= n; i++) {
    lcs[i] = [];
    for (let j = 0; j <= m; j++) {
      lcs[i][j] = 0;
    }
  }

  let result = "";
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (str1[i] === str2[j]) {
        lcs[i + 1][j + 1] = lcs[i][j] + 1;
        if (lcs[i + 1][j + 1] > max) {
          max = lcs[i + 1][j + 1];
          result = str1.substring(i - max + 1, i + 1);
        }
      }
    }
  }

  return result;
}

let str1 = "GeeksForgeeks";
let str2 = "Geekscode";

let result = longestCommonSubstring(str1, str2);

console.log("Longest Common Substring:", result);

// Function to handle click on "Sort By" option
function handleSortBySelection(title) {
  console.log("Sort By clicked for:", title);
  // Implement sorting logic for the selected dropdown menu here
}

// Function to toggle dropdown visibility
function toggleDropdown(dropdownDiv) {
  const dropdownContent = dropdownDiv.querySelector(".dropdown1-content");
  if (
    dropdownContent.style.height === "auto" ||
    dropdownContent.style.height === ""
  ) {
    dropdownContent.style.height = "0px";
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.height = "auto";
    dropdownContent.style.display = "block";
  }
}

// Function to populate dropdown options with checkboxes
function populateDropdownWithCheckboxes(dropdownId, options) {
  const dropdownContent = document.getElementById(dropdownId);

  options.forEach((option) => {
    const optionElement = document.createElement("label");
    optionElement.innerHTML = `<input type="checkbox" value="${option}">${option}`;
    dropdownContent.appendChild(optionElement);
  });
}

function refineJobs(Array1, Array2) {
  // Iterate over each job
  refinedJobArray = Array2.filter((job) => {
    // Filter by top recruiters
    //console.log(job);
    v1 = Array1.Companies.includes(job.company);

    // Filter by salary
    //const [minSalary, maxSalary] = Array1.Salary[0].split('-').map(s => parseInt(s.replace(/\D/g, ''), 10));
    // Assuming salary is in the format '$XXXXX-XXXXX'
    const jobSalary = job.salary;
    console.log(jobSalary)
    v2 = Array1.Salary.some((option) => {
      const rangeValues = option
        .split("-")
        .map((value) => parseInt(value.replace(/\$/g, "").trim()));
      console.log(`Checking salary range for option: ${option}`);
      console.log(`Parsed range values: ${rangeValues}`);
      var [min, max] = rangeValues;
      
      console.log(`Min salary: ${min}, Max salary: ${max}`);

      const isInRange = (jobSalary >= min) && (job.salary <= max);
      console.log(`Is in range? ${isInRange}`);
      return isInRange;
    });

    


    // Filter by location
    v3 = Array1.Location.includes(job.location);

    let v4;
    // Filter by work mode
    for (x of Array1.WorkMode) {
      v4 = x.includes(job.workmode);
    }

    v5 = false;
    // Filter by domain
    for (x of Array1.Domains) {
      a = longestCommonSubstring(x, job.jobTitle);
      if (a.length > 0.8 * x.length) {
        v5 = true;
        break;
      }
    }

    if (Array1.Companies.length == 0) {
      v1 = true;
    }
    if (Array1.Salary.length == 0) {
      v2 = true;
    }
    if (Array1.Location.length == 0) {
      v3 = true;
    }
    if (Array1.WorkMode.length == 0) {
      v4 = true;
    }
    if (Array1.Domains.length == 0) {
      v5 = true;
    }
    
    console.log(v1, v2, v3, v4, v5, v1 && v2 && v3 && v5 && v4);
    return v1 && v2 && v3 && v5 && v4 ;
  });
  return refinedJobArray;
}

emptyArray = {
  Companies: [],
  Salary: [],
  Location: [],
  WorkMode: [],
  Domains: [],
  
};

// Function to handle selection of checkboxes and update the button text
function handleCheckboxSelection(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  const checkboxes = dropdownContent.querySelectorAll('input[type="checkbox"]');
  const dropdownButton =
    dropdownContent.parentElement.querySelector(".dropbtn");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedOptions = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      dropdownButton.textContent =
        selectedOptions.length > 0 ? selectedOptions.join(", ") : dropdownId;
      emptyArray[dropdownId] = selectedOptions;
      console.log(emptyArray);
      console.log(Array.isArray(jobs));
      var refinedJobs = refineJobs(emptyArray, jobs);
      console.log(refinedJobs);
      const element = document.getElementById("job-listings");

      // Delete all content within the element
      element.innerHTML = "    ";
      refinedJobs.forEach((job) => {
        // Create a job card for each job object
        var jobCard = createJobCard(
          job.jobTitle,
          job.company,
          job.location,
          job.salary,
          job.workmode,
          job.description,
          job.id
        );

        // Append the job card to the container
        //  container.appendChild(jobCard);
      });
      paginate("job-listings", 2);
    });
  });
}

// Create dropdown menus on page load
window.onload = function () {
  createDropdownMenus();
};

function calculateMatchScore(jobDepartment, selectedOptions) {
  const totalOptions = selectedOptions.length;
  let matchingOptions = 0;

  // Count how many selected options match the job's department
  selectedOptions.forEach((option) => {
    if (jobDepartment.includes(option)) {
      matchingOptions++;
    }
  });

  // Calculate the match score
  return matchingOptions / totalOptions;
}

// Function to handle selection of checkboxes and update the button text
/* function handleCheckboxSelection(dropdownId) {
        const dropdownContent = document.getElementById(dropdownId);
        const checkboxes = dropdownContent.querySelectorAll('input[type="checkbox"]');
        const dropdownButton = dropdownContent.parentElement.querySelector('.dropbtn');
        
        checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', () => {
            const selectedOptions = Array.from(checkboxes)
              .filter(checkbox => checkbox.checked)
              .map(checkbox => checkbox.value);
            dropdownButton.textContent = selectedOptions.length > 0 ? selectedOptions.join(', ') : dropdownId;
          });
        });
      }
    
      // Create dropdown menus on page load
      window.onload = function() {
        createDropdownMenus();
      };

      function handleCheckboxSelection(dropdownId) {
        const dropdownContent = document.getElementById(dropdownId);
        const checkboxes = dropdownContent.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                // Get the selected checkboxes
                const selectedOptions = Array.from(checkboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value);
                
                // Filter the original array based on selected checkboxes
                const filteredJobs = jobs.filter(job => {
                    // Calculate the match score for each job
                    const matchScore = calculateMatchScore(job.jobTitle, selectedOptions);
                    // Return true if match score is at least 75%
                    return matchScore >= 0.75;
                });
                
                // Clear the post container
                const postContainer = document.getElementById('post-container');
                postContainer.innerHTML = '';
    
                // Create new elements based on the filtered array
                filteredJobs.forEach(job => {
                    const jobCard = createJobCard(
                        job.jobTitle,
                        job.company,
                        job.location,
                        job.details,
                        job.description,
                        job.rating
                    );
                    postContainer.appendChild(jobCard);
                });
            });
        });
    }
    
    function calculateMatchScore(jobDepartment, selectedOptions) {
        const totalOptions = selectedOptions.length;
        let matchingOptions = 0;
        
        // Count how many selected options match the job's department
        selectedOptions.forEach(option => {
            if (jobDepartment.includes(option)) {
                matchingOptions++;
            }
        });
        
        // Calculate the match score
        return matchingOptions / totalOptions;
    }
     
/* 

  // Sample job details
  var jobs = [
    {
      jobTitle: "FRONTEND DEVELOPER",
      company: "Talentgigs",
      location: "Teynampet, Chennai, Tamil Nadu",
      details: "Fresher | Full-time | Internship",
      description: "As a frontend developer...",
      rating: 5
    },
    {
      jobTitle: "WEB DEVELOPER",
      company: "geeks for geeks",
      location: "Hyderabad, Telangana",
      details: "Fresher | Full-time | Internship",
      description: "As a Web developer...",
      rating: 5
    },
    {
      jobTitle: "ANDROID DEVELOPER",
      company: "EDUSYNCH",
      location: "Hyderabad, Telangana",
      details: "Fresher | Internship",
      description: "As an Android developer...",
      rating: 5
    }
  ];*/

/* function getJobsByDepartment(department) {
    // Convert the department name to title case to match the keys in jobData
    const departmentKey = department.charAt(0).toUpperCase() + department.slice(1).toLowerCase();
  
    // Check if the department exists in jobData
    if (jobData.hasOwnProperty(departmentKey)) {
      return jobData[departmentKey];
    } else {
      return []; // Return an empty array if the department is not found
    }
  }
  */

/*  
// Example usage:
const department = "Electrical";
 jobs = getJobsByDepartment(variable1);
console.log(jobs);
*/ function buildUrlWithQueryParams(department, id) {
  const queryParams = new URLSearchParams({
    department: department,
    id: id,
  });
  baseURL = "http://localhost:" + port + "/category";
  return `${baseURL}/${department}/${id}`;
}

// Sample button functions (replace with your actual functionality)
function apply(ID) {
  var variable = urlParams.get("department");
  console.log(ID);
  url = buildUrlWithQueryParams(variable, ID);
  window.location.href = url;
}

function save() {
  //alert("save clicked")
  window.location.href = "http://localhost:8080/department";
}

function sendMessage() {
  alert("message clicked");
  window.location.href = "http://localhost:8080/department";
}

function showCombinedPrompt() {
  // Prompt the user for both string and integer
  var userInput = prompt(
    "Please enter an rating 0 to 10 \n followed by a space and then a short review\n (e.g., '4 good'):"
  );

  // If the user cancels the prompt or enters an empty string, exit
  if (userInput === null || userInput.trim() === "") {
    return;
  }

  // Split the user input into integer and string parts
  var inputs = userInput.trim().split(" ");

  // Extract the integer and string parts
  var inputInteger = parseInt(inputs[0]);
  var inputString = inputs.slice(1).join(" "); // Join the remaining parts into a string

  // If the first part is not a number, show an error message
  if (isNaN(inputInteger)) {
    alert("Invalid input for integer. Please enter a valid integer.");
    return;
  }

  // Construct the alert message
  var alertMessage = "rating : " + inputInteger + "\n";
  alertMessage += "review : " + inputString;

  // Display the alert message
  alert(alertMessage);
}
