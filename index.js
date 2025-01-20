// const express = require("express");
// const app = express();

// app.get("/", (req, res, next) => {
//     res.send("Salam");
// });

// app.listen(3000);


// const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect("mongodb+srv://aliakbarimanov:salam123@fastjob.a7bgf.mongodb.net/?retryWrites=true&w=majority&appName=fastjob")
//             .then(() => console.log("DB connected!"))
//             .catch(() => console.log("Connection failed!"));
//     } catch (error) {
//         console.log(error);
//     }
// }

// connectDB();




//!-----------------------------------------------------------------------

const express = require("express");

// require('dotenv').config();

const mongoose = require("mongoose");
const app = express();

app.use(express.json());


//! Routes
const resumeRoutes = require("./routes/resume.route");


//! CORS START
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
//!CORS END


app.listen(3000, () => {
    console.log("App is running on PORT:3000");
});

app.get("/", (req, res, next)=>{
    res.send("Render is working.");
});


//! Resumes API's
app.use("/api/resumes", resumeRoutes);



const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://aliakbarimanov:salam123@fastjob.a7bgf.mongodb.net/?retryWrites=true&w=majority&appName=fastjob")
            .then(() => console.log("DB connected!"))
            .catch(() => console.log("Connection failed!"));
    } catch (error) {
        console.log(error);
    }
}

connectDB();