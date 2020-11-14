// -----------------------------------
// DELETE FILE IF USING ACTIONS FOLDER
// -----------------------------------


import axios from "axios";

const API = {
    // Get patient currently logged in
    getUser: function () {
        return axios.get("/api/users/");
    },
    // Get patient info like procedures assigned to the patient
    getUserInfo: function (id) {
    return axios.get("/api/users/" + id);
    }
};

export default API;
