import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: ''
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
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.birthdate) newErrors.birthdate = 'Birthdate is required';
        if (!formData.nDni) newErrors.nDni = 'DNI is required';

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
                const response = await axios.post('http://localhost:3000/api/register', formData);
                setMessage('Registration successful!');
                // Maneja la respuesta exitosa aquí (e.g., redirige al usuario)
            } catch (error) {
                console.error('There was an error submitting the form!', error);
                setMessage('Registration failed. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="birthdate">Birthdate:</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                />
                {errors.birthdate && <span className="error">{errors.birthdate}</span>}
            </div>
            <div>
                <label htmlFor="nDni">DNI:</label>
                <input
                    type="text"
                    id="nDni"
                    name="nDni"
                    value={formData.nDni}
                    onChange={handleChange}
                />
                {errors.nDni && <span className="error">{errors.nDni}</span>}
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Register;

