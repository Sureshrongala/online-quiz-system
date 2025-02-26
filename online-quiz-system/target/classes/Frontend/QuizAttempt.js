import React, { useState, useEffect } from 'react';
import api from '../services/api';

const QuizAttempt = ({ match }) => {
    const [quiz, setQuiz] = useState(null);
    const [responses, setResponses] = useState({});
    const quizId = match.params.id;

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const data = await api.startQuiz(quizId);
                setQuiz(data);
            } catch (err) {
                console.error('Failed to fetch quiz', err);
            }
        };
        fetchQuiz();
    }, [quizId]);

    const handleSubmit = async () => {
        try {
            await api.submitQuiz(quizId, responses);
            alert('Quiz submitted successfully!');
        } catch (err) {
            console.error('Failed to submit quiz', err);
        }
    };

    if (!quiz) return <div>Loading...</div>;

    return (
        <div>
            <h2>{quiz.title}</h2>
            {quiz.questions.map((question, index) => (
                <div key={question.id}>
                    <p>{question.text}</p>
                    {question.options.map((option) => (
                        <label key={option.id}>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option.id}
                                onChange={(e) =>
                                    setResponses({ ...responses, [question.id]: e.target.value })
                                }
                            />
                            {option.text}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
    );
};

export default QuizAttempt;