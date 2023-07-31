import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

function SummaryPage() {
    const [citizens, setCitizens] = useState([]);
    const [searchCity, setSearchCity] = useState("");
    const [searchFromDate, setSearchFromDate] = useState("");
    const [searchToDate, setSearchToDate] = useState("");

    useEffect(() => {
        fetchCitizens();
    }, [searchCity, searchFromDate, searchToDate]);

    const fetchCitizens = async () => {
        let url = "/citizens?";
        if (searchCity) url += `city=${searchCity}&`;
        if (searchFromDate) {
            let fromDate = new Date(searchFromDate);
            url += `fromDate=${fromDate.toISOString()}&`;
        }
        if (searchToDate) {
            let toDate = new Date(searchToDate);
            url += `toDate=${toDate.toISOString()}`;
        }

        const result = await axios.get(url);
        setCitizens(result.data);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(citizens);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Citizens");
        XLSX.writeFile(wb, "citizens.xlsx");
    };

    return (
        <div className="container mt-3">
            <h1>Vaccination Application</h1>
            <h2>Summary Page</h2><br></br>
            <div className="row">
                <div className="col-md-4 mb-3 form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by city"
                        value={searchCity}
                        onChange={e => setSearchCity(e.target.value)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label>From date&nbsp;</label>
                    <input
                        type="date"
                        placeholder="Search from date"
                        value={searchFromDate}
                        onChange={e => setSearchFromDate(e.target.value)}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label>To date&nbsp;</label>
                    <input
                        type="date"
                        placeholder="Search to date"
                        value={searchToDate}
                        onChange={e => setSearchToDate(e.target.value)}
                    />
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Land Line</th>
                    <th>Cellular Phone</th>
                    <th>Has COVID-19</th>
                </tr>
                </thead>
                <tbody>
                {citizens.map((citizen) => (
                    <tr key={citizen.id}>
                        <td>{citizen.firstName}</td>
                        <td>{citizen.lastName}</td>
                        <td>{new Date(citizen.dateOfBirth).toISOString().split("T")[0]}</td>
                        <td>{citizen.address}</td>
                        <td>{citizen.city}</td>
                        <td>{citizen.zipCode}</td>
                        <td>{citizen.landLine}</td>
                        <td>{citizen.cellularPhone}</td>
                        <td>{citizen.hasCovid ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="btn btn-success" onClick={exportToExcel}>Export table to Excel</button>
        </div>
    );
}

export default SummaryPage;
