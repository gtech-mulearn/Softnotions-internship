// Import necessary components from Material UI and the CSS file
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import './App.css';

// Create a reusable FormBox component to avoid code repetition
const FormBox = ({ id, label, type, value, onChange }) => (
  // Box component from Material UI used as a container
  <Box
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <TextField id={id} label={label} variant="outlined" type={type} value={value} onChange={onChange} />
  </Box>
);

// Main App component
export default function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <div className="main_container">
      <div className="input_container">
        <form onSubmit={handleSubmit}>
          <div className="name_inputbox">
            <FormBox id="outlined-name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='age_inputbox'>
            <FormBox id="outlined-age" label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className='submit_btn'>
            <Button variant="contained" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
