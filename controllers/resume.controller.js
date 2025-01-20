const Resumes = require("../models/resume.model");

//! ---------------------------------------------------------------------
//!--------------------- Call all Resumes api start ---------------------
//! ---------------------------------------------------------------------

const callAllResumes = async (req, res) => {
    try {
        const resumes = await Resumes.find();
        res.status(200).json(resumes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//! ---------------------------------------------------------------------
//!--------------------- Call all Resumes api end -----------------------
//! ---------------------------------------------------------------------

//! ---------------------------------------------------------------------
//!--------------------- Call single Resume api start -------------------
//! ---------------------------------------------------------------------

const callSingleResume = async (req, res) => {
    try {
        const { id } = req.params;
        const resume = await Resumes.findById(id);
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//! --------------------------------------------------------------------
//!--------------------- Call single Resume api end --------------------
//! --------------------------------------------------------------------


//! --------------------------------------------------------------------
//!--------------------- Update Resume api start -----------------------
//! --------------------------------------------------------------------

// const updatedResume = (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedResume = Resumes.findByIdAndUpdate(id, () => { });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

//! --------------------------------------------------------------------
//!--------------------- Update Resume api end -------------------------
//! --------------------------------------------------------------------

module.exports = {
    callAllResumes,
    callSingleResume,
    // updatedResume
};