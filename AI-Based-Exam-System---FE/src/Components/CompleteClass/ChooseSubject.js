import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseSubject.css';

function ChooseSubject() {
    const navigate = useNavigate();
    const [selectedClass, setSelectedClass] = useState('');

    useEffect(() => {
        const className = localStorage.getItem('selectedClass');
        setSelectedClass(className);
    }, []);

    const handleSubjectSelect = (subject) => {
        localStorage.setItem('selectedSubject', subject); // Store selected subject
        navigate('/format'); // Navigate to Format.js
    };

    return (
        <div className="choose-subject">
            <div className="left-section">
                <h1 className="heading">
                    Different <span className="highlight">subjects</span> for you.
                </h1>
                <div className="subjects">
                    <button className="subject-btn" onClick={() => handleSubjectSelect('English')}>English</button>
                    <button className="subject-btn" onClick={() => handleSubjectSelect('Biology')}>Biology</button>
                    <button className="subject-btn" onClick={() => handleSubjectSelect('Physics')}>Physics</button>
                </div>
            </div>
            <div className="right-section">
                <button className="choose-btn">Choose Subject</button>
            </div>
        </div>
    );
}

export default ChooseSubject;
