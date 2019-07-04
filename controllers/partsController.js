const db = require("../models");

// Defining methods for the partsController
module.exports = {
    findAll: function (req, res) {
        console.log(req.query);
        db.PartsRequest
            .find(req.query)
            .populate("note")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.PartsRequest
            .findById(req.params.id)
            .populate("note")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.PartsRequest
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log(req.body);
        db.PartsRequest
            .findOneAndUpdate({ _id: req.params.id }, {$set:req.body}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addNote: function (req, res) {
        console.log(req.body);
        console.log(req.params.id);
        db.Note.create(req.body)
            .then(dbNote => {
            return db.PartsRequest.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
            })
            .then(dbPartsRequest => res.json(dbPartsRequest))
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        db.PartsRequest
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
