import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { login } from "../../features/auth/authSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/posts/postsSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });
  const { user , isSuccess} = useSelector((state) => state.auth);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    notification.success({
      message: `${user.message}`,
    });
  };
  useEffect(() => {
    if (isSuccess) {
        dispatch(reset());
        navigate("/");
    }
    // eslint-disable-next-line
}, [isSuccess]);

  return (
    <div class="container mt-3">

      <form onSubmit={onSubmit}>
      <h1>Login</h1>
        <div class="mb-3 mt-3">
          <label for="email">Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="pwd">Password:</label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
