// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/turnos">Mis Turnos</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
        <li><Link to="/login">Ingresar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;