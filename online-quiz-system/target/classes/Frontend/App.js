import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import QuizAttempt from './components/QuizAttempt';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/quiz/:id" component={QuizAttempt} />
                <Route path="/" exact component={Login} />
            </Switch>
        </Router>
    );
};

export default App;