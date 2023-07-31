import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router-dom";

function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [landLine, setLandLine] = useState('');
    const [cellularPhone, setCellularPhone] = useState('');
    const [hasCovid, setHasCovid] = useState(false);
    const navigate = useNavigate();

    const [healthConditions, setHealthConditions] = useState({
        diabetes: false,
        cardioProblems: false,
        allergies: false,
        other: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        const newCitizen = {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth.toISOString(), // Convert date to ISO string for backend compatibility
            address,
            city,
            zipCode,
            landLine,
            cellularPhone,
            hasCovid,
        };

        axios.post('/citizens', newCitizen)
            .then((response) => {
                // Handle success
                console.log('Citizen data saved:', response.data);
                navigate('/summary');
            })
            .catch((error) => {
                // Handle error
                console.error('Error saving citizen data:', error);
            });
    };

    return (
        <div className="container mt-3">
            <h1>Vaccination Application</h1>
            <h2>Registration Page</h2><br></br>
            <form onSubmit={handleSubmit}>
                <div className="row">

                <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                </div>
                <div className="row form-group my-3">
                    <div className="col-md-12">
                    <label>Date of Birth</label><br></br>
                    <DatePicker // Implement the DatePicker here
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                        dateFormat="dd/MM/yyyy"
                        required
                    />
                </div>
                </div>
                <div className="form-group my-3">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label>City</label><br></br>
                    <select
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    >
                        <option value="">Select City</option>
                        <option value="Jerusalem">Jerusalem</option>
                        <option value="Tel Aviv">Tel Aviv</option>
                        <option value="Haifa">Haifa</option>
                        <option value="Eilat">Eilat</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="row">
                <div className="col-md-6 form-group my-3">
                    <label>Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <div className="col-md-6 form-group my-3">
                    <label>Land Line</label>
                    <input
                        type="text"
                        className="form-control"
                        value={landLine}
                        onChange={(e) => setLandLine(e.target.value)}
                        required
                    />
                </div>
                </div>
                <div className="form-group my-3">
                    <label>Cellular Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cellularPhone}
                        onChange={(e) => setCellularPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-3 mt-4">
                    <label className="form-check-label fw-bold" htmlFor="check1">Have you had COVID-19 in the past?&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type="checkbox"
                        id="hasCovid"
                        name="hasCovid"
                        checked={hasCovid}
                        onChange={(e) => setHasCovid(e.target.checked)}
                    />
                </div>

                <div className="form-group">
                    <label className="fw-bold">Previous Health Conditions</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="diabetes"
                            name="diabetes"
                            checked={healthConditions.diabetes}
                            onChange={(e) =>
                                setHealthConditions({
                                    ...healthConditions,
                                    diabetes: e.target.checked,
                                })
                            }
                        />
                        <label className="form-check-label" htmlFor="diabetes">
                            Diabetes
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="cardioProblems"
                            name="cardioProblems"
                            checked={healthConditions.cardioProblems}
                            onChange={(e) =>
                                setHealthConditions({
                                    ...healthConditions,
                                    cardioProblems: e.target.checked,
                                })
                            }
                        />
                        <label className="form-check-label" htmlFor="cardioProblems">
                            Cardio-Vascular Problems
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="allergies"
                            name="allergies"
                            checked={healthConditions.allergies}
                            onChange={(e) =>
                                setHealthConditions({
                                    ...healthConditions,
                                    allergies: e.target.checked,
                                })
                            }
                        />
                        <label className="form-check-label" htmlFor="allergies">
                            Allergies
                        </label>
                    </div>
                    <div className="row">
                    <div className="col-md-6 form-group">
                        <label>Other</label>
                        <textarea
                            className="form-control"
                            rows="2"
                            value={healthConditions.other}
                            onChange={(e) =>
                                setHealthConditions({
                                    ...healthConditions,
                                    other: e.target.value,
                                })
                            }
                        />
                    </div>
                    </div><br></br>
                </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form><br></br>
        </div>
    );
}

export default RegistrationPage;
