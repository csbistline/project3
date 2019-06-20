const mongoose = require("mongoose");
const db = require("../models");
const techSeed = require("../client/src/PartsSpec.json");

// This file empties the Techs collection and inserts the books below

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds239967.mlab.com:39967/heroku_c1l5p733`;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

db.Tech
    .remove({})
    .then(() => db.Tech.collection.insertMany(techSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
