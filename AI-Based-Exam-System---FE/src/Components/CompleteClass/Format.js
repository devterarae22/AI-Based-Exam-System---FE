import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Format.css';

function Format() {
    const navigate = useNavigate();
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    useEffect(() => {
        const subject = localStorage.getItem('selectedSubject');
        const selectedClass = localStorage.getItem('selectedClass'); // Assuming class is also stored
        setSelectedSubject(subject);
        setSelectedClass(selectedClass);
    }, []);

    const handleFormatSelect = (format) => {
        localStorage.setItem('selectedFormat', format);

        if (format === 'Chapters') {
            navigate('/chapters');
        } else if (format === 'Full Book') {
            // Navigate to TestScreen with the Full Book format, class, and subject
            navigate('/testscreen', { state: { format: 'Full Book', class: selectedClass, subject: selectedSubject } });
        }
    };

    return (
        <div className="format-page">
            <div className="left-section">
                <h1 className="heading">
                    Different <span className="highlight">exam formats</span> for you.
                </h1>
                <div className="formats">
                    <button className="format-btn" onClick={() => handleFormatSelect('Chapters')}>Chapters</button>
                    <button className="format-btn" onClick={() => handleFormatSelect('Full Book')}>Full Book</button>
                </div>
            </div>
            <div className="right-section">
                <button className="choose-btn">Choose Format</button>
            </div>
        </div>
    );
}

export default Format;
