import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../features/posts/postsSlice";
import Post from "../Home/Posts/Post/Post";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("USEFECT");   
    dispatch(getUserInfo());
  }, [])

  
  
  console.log("USER INFO", userInfo);
  return (
    <>
    <h1>Profile</h1>
    <p>Name: {userInfo.name}</p>
    <p>Email: {userInfo.email}</p>
    <p>Born Date: {userInfo.date}/{userInfo.month}/{userInfo.year}</p>
    <p>Gender: {userInfo.gender}</p>

      {userInfo?.postIds &&
        <Post posts={userInfo.postIds}/>
      }
      </>
  );
};

export default Profile;
