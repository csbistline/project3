var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var PartsRequestSchema = new Schema({




    
});

// This creates our model from the above schema, using mongoose's model method
var PartsRequest = mongoose.model("PartsRequest", PartsRequestSchema);

// Export the Article model
module.exports = PartsRequest;