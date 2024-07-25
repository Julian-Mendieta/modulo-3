import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!formData.username || !formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  const isFormValid = formData.username && formData.email && formData.password;

  return (
    <div className='register-form'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" disabled={!isFormValid}>Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;