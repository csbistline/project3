const db = require("../models");

// Defining methods for the techsController
module.exports = {

    findByLogin: function (req, res) {
        console.log(req.query);
        

        db.Tech
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
