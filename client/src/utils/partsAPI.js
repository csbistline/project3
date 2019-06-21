import axios from "axios";

export default {
    // Gets all parts requests
    getPartsRequests: function() {
        return axios.get("/api/parts");
    },
    // Gets the parts request with the given id
    getPartsRequest: function(id) {
        return axios.get("/api/parts/" + id);
    },
    // Deletes the parts request with the given id
    deletePartsRequest: function(id) {
        return axios.delete("/api/parts/" + id);
    },
    // Saves a parts request to the database
    savePartsRequest: function(partsData) {
        return axios.post("/api/parts", partsData);
    }
};
