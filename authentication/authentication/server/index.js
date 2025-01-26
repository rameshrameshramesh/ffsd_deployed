const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//2. route
app.use('/api/auth',authRouter);
//mongo db connection

mongoose
   .connect('mongodb://127.0.0.1:27017/authentication')
   .then(() => console.log('connected to MongoDB!'))
   .catch((error) => console.error('Failed to connect to MongoDB:',error));
// error handler
// error handler
app.use((err, req, res, next) => { // Correct the order of parameters
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json ({
        status: err.status,
        message: err.message,
    });
});

//server
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`App running on ${PORT}`);
});

