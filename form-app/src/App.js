import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import SummaryPage from './pages/SummaryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import MenuBar from "./pages/MenuBar";



function App() {
    return (
        <div className="app-background" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/back.jpg'})`
        }}>
        <Router>
            <MenuBar />
                <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/summary" element={<SummaryPage />} />
                </Routes>
        </Router>
        </div>
    );
}


export default App;
