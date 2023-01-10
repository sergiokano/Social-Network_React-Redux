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

const createPost = async (postData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user",user.token)
  const res = await axios.post(API_URL + "/posts/create", postData, {
      headers: {
          Authorization: user?.token
          
        }
      });
  return res.data
}



const addLike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const res = await axios.put(
      API_URL + "/posts/addLike/" + _id,
      {},
      {
          headers: { authorization: user.token },
      }
  );

  return res.data;
};

const removeLike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const res = await axios.put(
      API_URL + "/posts/removeLike/" + _id,
      {},
      {
          headers: { authorization: user.token },
      }
  );

  return res.data;
};



const updatePost = async (data) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.put(API_URL + "/posts/update/" + data._id, data, {
    headers: {
      authorization: user.token,
    },
  } );
return res.data;
};

const deletePost = async (_id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.delete(API_URL + "/posts/delete/" + _id, {
    headers: {
      authorization: user.token,
    },
  } );
return res.data;
};

const getUserInfo = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await axios.get(API_URL + "/users/conectedUser",
   {
    headers: {
      authorization: user.token,
    },
  } );
return res.data;
};



const postsService = {
  getAll,
  getById,
  getPostByName,
  createPost,
  updatePost,
  addLike,
  removeLike,
  deletePost,
  getUserInfo
};

export default postsService;
