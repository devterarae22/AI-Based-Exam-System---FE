import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import pic1 from '../assets/1.JPG';
import pic2 from '../assets/2.JPG';
import pic3 from '../assets/3.JPG';
import pic4 from '../assets/4.JPG';


function LandingPage() {
    return (
        <div className="landing-page">
            {/* Top Section */}
            <section className="container my-5 d-flex align-items-center">
                <div className="row w-100">
                    {/* Left Side - Heading and Button */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 className="display-4 fw-bold mb-4">
                            Learn.<br />
                            Grow.<br />
                            Succeed.
                        </h1>
                        <p className="lead mb-4">
                            The Pursuit of Knowledge, Illuminated<br />
                            <em>"Where Curiosity Meets Innovation"</em>
                        </p>
                        <Link to="/get-started" className="btn btn-warning btn-lg fw-bold">
                            Get Started
                        </Link>
                    </div>

                    {/* Right Side - Images */}
                     
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
                </div>
            </section>

            {/* Middle Section - "Different Learning Formats" */}
            <section className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h2 className="display-5 mb-4">Different learning <span className="text-warning">formats</span> for you.</h2>
                    <Link to="/Classes" className="btn btn-warning btn-lg fw-bold">
                        Choose Class <i className="bi bi-arrow-right-circle ms-2"></i>
                    </Link>
                </div>
            </section>

            {/* Bottom Section - Class Selection */}
            <section className="container my-5 text-center">
                <h3 className="fw-bold mb-4">Choose Class</h3>
                <div className="row justify-content-center">
                    <div className="col-6 col-md-3">
                        <button className="btn btn-primary btn-lg rounded-pill w-100 mb-3">9<sup>th</sup></button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-primary btn-lg rounded-pill w-100 mb-3">10<sup>th</sup></button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-primary btn-lg rounded-pill w-100 mb-3">11<sup>th</sup></button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-primary btn-lg rounded-pill w-100 mb-3">12<sup>th</sup></button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
