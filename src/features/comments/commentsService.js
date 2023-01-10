import axios from "axios";

const API_URL = "http://localhost:8080";


const createComment = async (commentData) => {
    const description={
        description:commentData.description
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.post(API_URL + "/comments/create/"+commentData.postId , 
    description,
        {
          headers: {
            Authorization: user?.token,
          },
        });
      return res.data;
    };

const commentService = {
    createComment

  };
  
  export default commentService;