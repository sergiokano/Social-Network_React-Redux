import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {console.log(user)} 
      <p>{user.name}</p>
      <h1>Posts: </h1>
      {/* {user.postIds.map((post) => (
        // <p key={post._id}>{post.description}</p>
      ))} */}
    </div>
  );
};

export default Profile;
