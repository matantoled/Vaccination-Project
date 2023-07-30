import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            //healthConditions,
        };

        axios.post('/citizens', newCitizen)
            .then((response) => {
                // Handle success
                console.log('Citizen data saved:', response.data);
            })
            .catch((error) => {
                // Handle error
                console.error('Error saving citizen data:', error);
            });
    };

    return (
        <div>
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <DatePicker // Implement the DatePicker here
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                        dateFormat="dd/MM/yyyy"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>City</label>
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
                <div className="form-group">
                    <label>Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Land Line</label>
                    <input
                        type="text"
                        className="form-control"
                        value={landLine}
                        onChange={(e) => setLandLine(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cellular Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cellularPhone}
                        onChange={(e) => setCellularPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <label htmlFor="hasCovid" className="form-check-label">COVID-19 History</label>
                    <input
                        type="checkbox"
                        id="hasCovid"
                        name="hasCovid"
                        checked={hasCovid}
                        onChange={(e) => setHasCovid(e.target.checked)}
                    />
                </div><br></br>
                <div className="form-group">
                    <label>Previous Health Conditions</label>
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
                    <div className="form-group">
                        <label>Other</label>
                        <input
                            type="text"
                            className="form-control"
                            value={healthConditions.other}
                            onChange={(e) =>
                                setHealthConditions({
                                    ...healthConditions,
                                    other: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
