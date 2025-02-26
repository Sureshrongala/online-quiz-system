import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your backend URL

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/users/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token in localStorage
    }
    return response.data;
};

const getQuizzes = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/quizzes`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

const startQuiz = async (quizId) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/quizzes/${quizId}/start`, {}, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

const submitQuiz = async (quizId, responses) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/quizzes/${quizId}/submit`, responses, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export default {
    login,
    getQuizzes,
    startQuiz,
    submitQuiz,
};