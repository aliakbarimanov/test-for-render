const express = require("express");
const router = express.Router();

const {
    callAllResumes,
    callSingleResume,
} = require("../controllers/resume.controller");

router.get("/", callAllResumes);
router.get("/:id", callSingleResume);

module.exports = router;