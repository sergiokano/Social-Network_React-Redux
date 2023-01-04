import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts/getAll");
  return res.data;
};

const getById = async (_id) => {
  const res = await axios.get(API_URL + "/posts/getById/" + _id);
  return res.data;
};

const getPostByName = async (description)=>{
  const res = await axios.get(API_URL + "/posts/getByName/" + description)
  return res.data
}

const postsService = {
  getAll,
  getById,
  getPostByName
};

export default postsService;
