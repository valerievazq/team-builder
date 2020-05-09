import React, { useState } from "react";

const Form = (props) => {
  const [data, setData] = useState({
    id: "",
    name: "",
    type: "",
  });

  const handleChange = (event) =>
    setData({ ...data, [event.target.name]: event.target.value });

  const clearForm = () => {
    setData({ id: '', name: "", email: "", role: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onSubmit(data);
    // clearForm();
  };

  return (

    <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Your Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        value={data.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>Your E-mail: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor='role'>Your Role: </label>
      <input
        id="role"
        name="name"
        type="text"
        placeholder="Enter your role"
        value={data.role}
        onChange={handleChange}
      />

      <button type="submit">Add New Member</button>
    </form>
  );
};

export default Form;
