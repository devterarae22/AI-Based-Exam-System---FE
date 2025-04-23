import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Class.css';

function Class() {
    const navigate = useNavigate();

    const handleClassSelect = (className) => {
        localStorage.setItem('selectedClass', className); // Store selected class
        navigate('/ChooseSubject'); // Redirect to ChooseSubject page
    };

    return (
        <div className="class-page container d-flex  justify-content-center vh-150">
            <div className="text-center">
                <h3 className="fw-bold mb-4">Choose Class</h3>
                <div className="row gx-0 gy-2 justify-content-center"> {/* Reduced horizontal gap (gx-3) */}
                    <div className="col-6 d-flex justify-content-center">
                        <div className="class-card" onClick={() => handleClassSelect('9')}>
                            <button className="class-btn">9<sup>th</sup></button>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="class-card" onClick={() => handleClassSelect('10')}>
                            <button className="class-btn">10<sup>th</sup></button>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="class-card" onClick={() => handleClassSelect('11')}>
                            <button className="class-btn">11<sup>th</sup></button>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="class-card" onClick={() => handleClassSelect('12')}>
                            <button className="class-btn">12<sup>th</sup></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Class;
