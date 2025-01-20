const mongoose = require("mongoose");

const ResumesSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Adınızı daxil etmədiniz."],
        },
        usersurname: {
            type: String,
            required: [true, "Soyadınızı daxil etmədiniz."],
        },
        phone: {
            type: String,
            required: [true, "Telefon nömrənizi daxil etmədiniz."],
        },
        email: {
            type: String,
            required: false,
            default: "-",
        },
        birthday: {
            type: String,
            required: [true, "Doğum tarixinizi daxil etmədiniz."],
        },
        category: {
            type: String,
            required: [true, "Kateqoriyanı seçmədiniz."],
        },
        subcategory: {
            type: String,
            required: [true, "Altkateqoriyanı seçmədiniz."],
        },
        experience: {
            type: String,
            required: false,
            default: "-",
        },
        availablehours: {
            type: String,
            required: false,
            default: "-",
        },
        about: {
            type: String,
            required: false,
            default: "-",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Resumes", ResumesSchema);