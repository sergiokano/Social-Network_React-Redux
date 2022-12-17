import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { login } from "../../features/auth/authSlice";
import { notification } from "antd";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });
  const { user } = useSelector((state) => state.auth);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    notification.success({
      message: `${user.message}`,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} onChange={onChange} />

      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
