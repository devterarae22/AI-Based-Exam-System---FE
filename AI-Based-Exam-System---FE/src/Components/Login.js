import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pic1 from '../assets/1.JPG';
import pic2 from '../assets/2.JPG';
import pic3 from '../assets/3.JPG';
import pic4 from '../assets/4.JPG';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.data.success) {
                localStorage.setItem('isLoggedIn', 'true');
                setSuccessMessage("Login successful! Redirecting to your home page...");
                setTimeout(() => navigate('/Home'), 2000);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Login failed, please check your credentials.');
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-primary text-white">
            <div className="row w-100">
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
                {/* Right-side login form */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center px-4">
                    <h2 className="mb-3">Different learning <span className="text-warning">formats</span> for you.</h2>
                    {successMessage && <div className="alert alert-success w-100 text-center">{successMessage}</div>}
                    <form onSubmit={handleLogin} className="w-100" style={{ maxWidth: '400px' }}>
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
                        <button type="submit" className="btn btn-warning w-100 fw-bold">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
