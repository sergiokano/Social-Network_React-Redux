import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <p>{user.user.name}</p>
      {console.log(user)}
    </div>
  );
};

export default Profile;