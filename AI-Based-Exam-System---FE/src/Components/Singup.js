import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import pic1 from '../assets/1.JPG';
import pic2 from '../assets/2.JPG';
import pic3 from '../assets/3.JPG';
import pic4 from '../assets/4.JPG';


function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/signup', { firstName, lastName, email, password });
            if (response.data.success) {
                setSuccessMessage("You have successfully signed up! Redirecting to login page...");
                setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Signup failed, please try again.');
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-primary text-white">
            <div className="row w-100">
                {/* Left-side image grid, hidden on smaller screens */}
               {/* Left-side image grid */}
               <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex gap-4">
                            <img src={pic1} alt="Student" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                            <img src={pic2} alt="Student" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="d-flex gap-4">
                            <img src={pic3} alt="Student" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                            <img src={pic4} alt="Student" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                        </div>
                    </div>
                </div>
                {/* Right-side form */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center px-4">
                    <h2 className="mb-3">Create your account</h2>
                    {successMessage && <div className="alert alert-success w-100 text-center">{successMessage}</div>}
                    <form onSubmit={handleSignup} className="w-100" style={{ maxWidth: '400px' }}>
                        <div className="form-group mb-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-warning w-100 fw-bold mb-2">
                            Sign Up
                        </button>
                        {/* Link to Login page if user already has an account */}
                        <div className="text-center">
                            <span>Already have an account? </span>
                            <Link to="/login" className="text-warning fw-bold">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
