// Importing required libraries
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import RegistrationPage from "./RegistrationPage";
import SummaryPage from "./SummaryPage";


// MenuBar component
function MenuBar() {

    // Using react-router hooks for navigation and location
    const location = useLocation();
    const navigate = useNavigate();

    // Returning navigation bar JSX
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid d-flex justify-content-start">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link mx-3 ${location.pathname === '/' ? 'navbar-brand' : ''}`}>Registration Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/summary" className={`nav-link mx-3 ${location.pathname === '/summary' ? 'navbar-brand' : ''}`}>Summary Page</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default MenuBar;