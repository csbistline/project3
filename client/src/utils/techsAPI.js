import axios from "axios";

export default {
    // Gets all techs
    getTechs: function() {
        console.log("getting techs from db");
        return axios.get("/api/techs");
    },
    // Gets the book with the given id
    getTech: function(id) {
        return axios.get("/api/tech/" + id);
    },
    // Deletes the book with the given id
    deleteTech: function(id) {
        return axios.delete("/api/techs/" + id);
    },
    // Saves a book to the database
    saveTech: function(techData) {
        return axios.post("/api/techs", techData);
    }
};
