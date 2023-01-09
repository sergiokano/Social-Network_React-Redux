import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { notification } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    month: "",
    date: "",
    year: "",
  });

  const { name, email, password, password2, gender, month, date, year } =
    formData;
  const dispatch = useDispatch();
  const { isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Registered",
        description: "User registered successful",
      });
    }
  }, [isSuccess]);

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
    } else if (
      !password.match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9]).{8,}$/)
    ) {
      notification.error({
        message: "Password Error",
        description:
          "Please enter a password that contains: at least 8 characters long, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.",
      });
    } else {
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

      <span>
        {/* <label htmlFor="gender">Gender:</label> */}
        <select
          name="gender"
          value={gender}
          onChange={onChange}
          required
          placeholder="gender"
        >
          <option value="">Select a gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>
      </span>

      <span>
        {/* <label htmlFor="month">Month:</label> */}
        <select name="month" value={month} onChange={onChange} required>
          <option value="">Select a month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </span>

      <input
        type="number "
        name="date"
        value={date}
        placeholder="date"
        onChange={onChange}
      />
      <input
        type="string "
        name="year"
        value={year}
        placeholder="year"
        onChange={onChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
