// src/views/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store';
import "./Login.css"
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      dispatch(setUser(response.data.user));
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed. Please try again.');
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className='login-form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" disabled={!isFormValid}>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
