import axios from "axios";

export default {
    // Gets all parts requests
    getPartsRequests: function (status) {
        return axios.get("/api/parts?status=" + status);
    },
    getPartsRequestsByTech: function (tech) {
        return axios.get("/api/parts?assignee=" + tech);
    },
    getPartsRequestsByTechAndStatus: function (tech, status) {
        return axios.get("/api/parts?assignee=" + tech + "&status=" + status);
    },
    // Gets the parts request with the given id
    getPartsRequest: function (id) {
        return axios.get("/api/parts/" + id);
    },
    updatePartsRequestAssigned: function (id, assignee, assigneeName) {
        return axios.put("/api/parts/" + id, { assignee: assignee, assigneeName: assigneeName, status: "assigned" });
    },
    updatePartsRequestCompleted: function (id) {
        return axios.put("/api/parts/" + id, { status: "completed" });
    },
    updatePartsRequestNote: function (id, note) {
        return axios.put("/api/parts/note/" + id, { body: note });
    },
    // Deletes the parts request with the given id
    deletePartsRequest: function (id) {
        return axios.delete("/api/parts/" + id);
    },
    // Saves a parts request to the database
    savePartsRequest: function (partsData) {
        return axios.post("/api/parts", partsData);
    }
};
