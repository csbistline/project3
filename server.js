require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./server/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
const routes = require("./routes");
app.use(routes);

//Passport Addon
app.use(passport.initialize());
app.use(passport.session());







// Connect to the Mongo DB

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/partsTeam");
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds239967.mlab.com:39967/heroku_c1l5p733`;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// testing db connection
/*mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]

    });
    mongoose.connection.db.collection("Tech").find({}).toArray(function (err, info) {
        console.log("info: ", err);
        console.log("info: ", info);
    });
});*/

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
