import React, { useState } from "react";
import "./Form.css";
import Axios from 'axios';
import FormData from 'form-data';


export const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);

        const response = await Axios.post('http://localhost:3001/post',formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Data sent successfully:", response.data);
      setStatus(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };


  

  return (
    <div className="input-container">
      <form className="container" onSubmit={handleSubmit}>
        <h1> Presonal Information </h1>
        <br />

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        { status && <div> {status} </div> }

        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
