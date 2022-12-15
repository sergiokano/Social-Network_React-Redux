import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (userData) => {

const res = await axios.post(API_URL + "/users/create", userData);

return res.data;

};

const authService = {

register,

};

export default authService;