import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        user: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.user) newErrors.user = 'User is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            try {
                const response = await axios.post('http://localhost:3000/api/login', formData);
                setMessage('Login successful!');
                // Maneja la respuesta exitosa aquí (e.g., redirige al usuario)
            } catch (error) {
                console.error('There was an error submitting the form!', error);
                setMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="user">User:</label>
                <input
                    type="text"
                    id="user"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                />
                {errors.user && <span className="error">{errors.user}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Login;
