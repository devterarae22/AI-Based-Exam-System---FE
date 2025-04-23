import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status on component mount and listen for changes in localStorage
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedInStatus === 'true');

        // Event listener for changes to login status in localStorage
        const handleStorageChange = () => {
            const status = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(status === 'true');
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // Handle login button click
    const handleLoginClick = () => {
        navigate('/signup');
    };

    // Handle sign out
    const handleSignOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container">
                {/* Logo */}
                <Link to="/" className="navbar-brand fw-bold">Exam Empower</Link>

                {/* Toggle button for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Classes" className="nav-link">Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>

                {/* Sign Up / Sign Out button for all screen sizes */}
                <div className="d-flex d-lg-flex ms-auto">
                    {isLoggedIn ? (
                        // Show Sign Out button if logged in
                        <button onClick={handleSignOut} className="nav-link btn btn-link fw-bold">Sign Out</button>
                    ) : (
                        // Show Signup button if not logged in
                        <button onClick={handleLoginClick} className="btn btn-warning fw-bold">Signup</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
