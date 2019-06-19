var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var PartsRequestSchema = new Schema({
    status:{
        type: String, default: 'requested' 
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the PartsRequest with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    } 
},
{
    timestamps: true
});

// This creates our model from the above schema, using mongoose's model method
var PartsRequest = mongoose.model("PartsRequest", PartsRequestSchema);

// Export the Article model
module.exports = PartsRequest;