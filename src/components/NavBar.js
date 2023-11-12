import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link to="/" className="nav-logo">Home</Link>
                <Link to="/about" className="nav-about">About</Link>
                <h1 className="nav-heading">Pokédex</h1>

            </div>
        </nav>
    );
};

export default NavBar;
