import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <p>{user.user.name}</p>
    </div>
  );
};

export default Profile;
