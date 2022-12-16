import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { notification } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",

    email: "",

    password: "",
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      notification.success({
        message: "Registered",
        description: "User registered successful",
      });
      dispatch(register(formData));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name"
        onChange={onChange}
      />

      <input
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={onChange}
      />

      <input
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={onChange}
      />
      <input
        type="password"
        name="password2"
        value={password2}
        placeholder="repeat the password"
        onChange={onChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
