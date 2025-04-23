import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chapters.css';

function Chapters() {
    const chapters = [
        "Chapter 1", "Chapter 2", "Chapter 3", 
        "Chapter 4", "Chapter 5", "Chapter 6", 
        "Chapter 7", "Chapter 8", "Chapter 9"
    ];

    const navigate = useNavigate();
    const [selectedChapters, setSelectedChapters] = useState([]);

    const toggleChapterSelection = (chapter) => {
        setSelectedChapters((prevSelected) => {
            if (prevSelected.includes(chapter)) {
                // If the chapter is already selected, remove it
                return prevSelected.filter((item) => item !== chapter);
            } else {
                // If the chapter is not selected, add it
                return [...prevSelected, chapter];
            }
        });
    };

    const handleContinue = () => {
        navigate('/testscreen', { state: { chapters: selectedChapters } });
    };

    return (
        <div className="chapters-page">
            <div className="left-section">
                <h1 className="heading">
                    Select exam <span className="highlight">chapters</span> for you.
                </h1>
                <div className="chapters-grid">
                    {chapters.map((chapter, index) => (
                        <button 
                            key={index} 
                            className={`chapter-btn ${selectedChapters.includes(chapter) ? 'selected' : ''}`}
                            onClick={() => toggleChapterSelection(chapter)}
                        >
                            {chapter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="right-section">
                <button className="choose-btn" onClick={handleContinue} disabled={selectedChapters.length === 0}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default Chapters;
