const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.send("Salam");
});

app.listen(3000);


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