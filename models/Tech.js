const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String, required: true },
    specialty: { type: String, required: true },
    contact: { type: String, required: true },
    permission: { type: String, required: true },
    password: { type: String, required: true }
},
{
    collection: "Tech"
});

const Tech = mongoose.model("Tech", TechSchema);

module.exports = Tech;
