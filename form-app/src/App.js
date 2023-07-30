import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import SummaryPage from './pages/SummaryPage';




function App() {
    return (
        <Router>
            <div>
                <h1>Vaccination Application</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Registration Page</Link>
                        </li>
                        <li>
                            <Link to="/summary">Summary Page</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/summary" element={<SummaryPage />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;
