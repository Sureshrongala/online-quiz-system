import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Dashboard = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const data = await api.getQuizzes();
                setQuizzes(data);
            } catch (err) {
                console.error('Failed to fetch quizzes', err);
            }
        };
        fetchQuizzes();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        <Link to={`/quiz/${quiz.id}`}>
                            {quiz.title} - {quiz.status}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;