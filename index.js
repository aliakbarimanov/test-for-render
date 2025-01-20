const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.send("Salam");
});

app.listen(3000);