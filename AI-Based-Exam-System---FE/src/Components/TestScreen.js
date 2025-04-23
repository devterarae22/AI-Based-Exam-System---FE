import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TestScreen.css';

function TestScreen() {
    const location = useLocation();
    const navigate = useNavigate();

    const formatFromState = location.state?.format || localStorage.getItem('selectedFormat') || 'Chapters';
    const classFromState = location.state?.class || localStorage.getItem('selectedClass') || 'Unknown Class';
    const subjectFromState = location.state?.subject || localStorage.getItem('selectedSubject') || 'Unknown Subject';
    const chaptersFromState = location.state?.chapters || [];

    const [format] = useState(formatFromState);
    const [selectedClass] = useState(classFromState);
    const [subject] = useState(subjectFromState);
    const [chapters] = useState(chaptersFromState);
    const initialQuestionCount = format === 'Full Book' ? 50 : 10;
    const [questionCount, setQuestionCount] = useState(initialQuestionCount);

    // Expanded dummy data with at least 20 questions
    const dummyQuestions = [
        { question: "What is Newton's First Law?", answer: "An object will remain at rest or in uniform motion unless acted upon by a force." },
        { question: "Define acceleration.", answer: "Acceleration is the rate of change of velocity of an object with respect to time." },
        { question: "What is the speed of light?", answer: "The speed of light is approximately 299,792,458 meters per second." },
        { question: "What is Ohm's Law?", answer: "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points." },
        { question: "Define force.", answer: "Force is any interaction that, when unopposed, will change the motion of an object." },
        { question: "What is energy?", answer: "Energy is the ability to do work." },
        { question: "What is photosynthesis?", answer: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize food from carbon dioxide and water." },
        { question: "Define gravity.", answer: "Gravity is the force by which a planet or other body draws objects toward its center." },
        { question: "What is kinetic energy?", answer: "Kinetic energy is the energy an object possesses due to its motion." },
        { question: "Define potential energy.", answer: "Potential energy is the energy held by an object because of its position relative to other objects." },
        { question: "What is the atomic number?", answer: "The atomic number is the number of protons in the nucleus of an atom." },
        { question: "Define isotope.", answer: "Isotopes are variants of a particular chemical element that have different neutron numbers but the same proton number." },
        { question: "What is the boiling point of water?", answer: "The boiling point of water is 100°C or 212°F at sea level." },
        { question: "Define momentum.", answer: "Momentum is the quantity of motion of a moving body, measured as a product of its mass and velocity." },
        { question: "What is inertia?", answer: "Inertia is the resistance of any physical object to any change in its velocity." },
        { question: "Define velocity.", answer: "Velocity is the speed of something in a given direction." },
        { question: "What is a molecule?", answer: "A molecule is a group of atoms bonded together, representing the smallest fundamental unit of a chemical compound." },
        { question: "Define density.", answer: "Density is the mass per unit volume of a substance." },
        { question: "What is chlorophyll?", answer: "Chlorophyll is a green pigment in plants that absorbs light to provide energy for photosynthesis." },
        { question: "Define ecosystem.", answer: "An ecosystem is a biological community of interacting organisms and their physical environment." }
    ];

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(Array(initialQuestionCount).fill("")); 
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Function to get a random subset of questions
        const getRandomQuestions = (count) => {
            const shuffled = [...dummyQuestions].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        };

        setQuestions(getRandomQuestions(questionCount));
        setAnswers(Array(questionCount).fill(""));
    }, [questionCount]);

    const handleAnswerChange = (index, value, textareaRef) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
        handleAutoResize(textareaRef);
    };

    const handleAutoResize = (textarea) => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    };

    const handleQuestionCountChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuestionCount(value);
        }
    };

    const handleSubmit = async () => {
        const submissionData = questions
            .map((item, index) => ({
                question: item.question,
                correctAnswer: item.answer,
                studentAnswer: answers[index] || ""
            }))
            .filter(item => item.studentAnswer.trim() !== "");
        
        if (submissionData.length === 0) {
            alert("Please answer at least one question before submitting.");
            return;
        }
    
        console.log("Submitting the following data as JSON:", { answers: submissionData });
    
        try {
            // Send the entire submissionData array as JSON in a single request with the `answers` key
            await axios.post('http://127.0.0.1:8000/submit_answers', { answers: submissionData }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            alert("Answers submitted successfully!");

            // Redirect to ResultScreen
            navigate('/ResultScreen');
    
        } catch (error) {
            console.error("Error submitting answers:", error);
            alert("There was an error submitting your answers.");
        }
    };
    
    
    return (
        <div className="test-screen">
            <div className="top-section">
                <div className="test-info">
                    <p><strong>Class:</strong> {selectedClass || "Class not selected"}</p>
                    <p><strong>Subject:</strong> {subject || "Subject not selected"}</p>
                    {format === 'Full Book' ? (
                        <p><strong>Format:</strong> Full Book</p>
                    ) : (
                        <p><strong>Chapters:</strong> {chapters.join(', ')}</p>
                    )}
                </div>
                <div className="question-count-selector">
                    <label htmlFor="question-count">Number of Questions:</label>
                    <input
                        id="question-count"
                        type="number"
                        value={questionCount}
                        onChange={handleQuestionCountChange}
                        className="question-count-input"
                        min="1"
                    />
                    <select
                        className="question-count-dropdown"
                        value={questionCount}
                        onChange={(e) => handleQuestionCountChange(e)}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        {format === 'Full Book' && <option value={50}>50 (Full Book)</option>}
                    </select>
                </div>
            </div>
            <div className="questions">
                {questions.map((item, index) => (
                    <div key={index} className="question">
                        <p>Question {index + 1}: {item.question}</p>
                        <textarea
                            value={answers[index] || ""}
                            onChange={(e) => handleAnswerChange(index, e.target.value, e.target)}
                            className="answer-input"
                            placeholder="Type your answer here"
                            rows={1}
                            style={{ overflow: 'hidden' }}
                        />
                    </div>
                ))}
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Submit Answers</button>
            
            <div className="results">
                {results.map((result, index) => (
                    <p key={index}>
                        <strong>Question {index + 1} Similarity Score:</strong> {result.similarityScore}%
                    </p>
                ))}
            </div>
        </div>
    );
}

export default TestScreen;
