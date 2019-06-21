import axios from "axios";

export default {
    // Gets all techs
    getTechs: function() {
        return axios.get("/api/techs");
    },
    // Gets the tech with the given id
    getTech: function(id) {
        return axios.get("/api/tech/" + id);
    },
    // Deletes the tech with the given id
    deleteTech: function(id) {
        return axios.delete("/api/techs/" + id);
    },
    // Saves a tech to the database
    saveTech: function(techData) {
        return axios.post("/api/techs", techData);
    }
};
