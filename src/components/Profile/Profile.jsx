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
      {userInfo?.postIds &&
        <Post posts={userInfo.postIds}/>
      }
      </>
  );
};

export default Profile;
