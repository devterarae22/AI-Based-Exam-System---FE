import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResultScreen() {
    const [similarityScores, setSimilarityScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get('http://localhost:8000/get_similarity_scores');
                setSimilarityScores(response.data.similarityScores);
            } catch (error) {
                console.error("Error fetching similarity scores:", error);
                alert("Error loading results.");
            } finally {
                setLoading(false);
            }
        };

        fetchScores();
    }, []);

    const formatScore = (score) => {
        if (score < 0) {
            return "Totally wrong";
        } else {
            return `${(score * 100).toFixed(2)}%`;
        }
    };

    return (
        <div className="result-screen">
            {loading ? (
                <p>Loading your results...</p>
            ) : (
                <div>
                    <h2>Your Scores</h2>
                    {similarityScores.map((score, index) => (
                        <p key={index}>
                            <strong>Question {index + 1}:</strong> {formatScore(score)}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ResultScreen;
