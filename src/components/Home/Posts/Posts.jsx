import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../features/posts/postsSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.posts);
   const getAllAndReset =async()=>{
     dispatch(getAll());
     dispatch(reset());
  }
  useEffect( () => {
    getAllAndReset()
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <><Post posts={posts}/></>;
};

export default Posts;
