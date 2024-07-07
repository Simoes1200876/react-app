import React from "react";
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="/home" className="navbar-link">Home</a>
                <a href="/favorites" className="navbar-link" onClick={() => alert('Navigate to Favorites page')}>Favorites</a>
            </div>
            <div className="navbar-profile">
                <button className="profile-button" onClick={() => window.location.href = '/login'}>
                    <span role="img" aria-label="profile">👤</span> {/* Replace with an actual icon */}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
