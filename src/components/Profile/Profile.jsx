import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <p>{user.name}</p>
      <p>POSTS: </p>
      {/* {user.postIds.map((post) => (
        // <p key={post._id}>{post.description}</p>
      ))} */}
    </div>
  );
};

export default Profile;