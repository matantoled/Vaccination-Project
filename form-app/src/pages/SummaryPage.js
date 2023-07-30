import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ReactDataExport from 'react-data-export';

function SummaryPage() {
    const [citizens, setCitizens] = useState([]);

    useEffect(() => {
        fetchCitizens();
    }, []);

    const fetchCitizens = () => {
        axios.get('/citizens')
            .then((response) => {
                setCitizens(response.data);
            })
            .catch((error) => {
                console.error('Error fetching citizens:', error);
            });
    };

    return (
        <div>
            <h2>Summary Page</h2>
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
                    <th>Health Conditions</th>
                </tr>
                </thead>
                <tbody>
                {citizens.map((citizen) => (
                    <tr key={citizen.id}>
                        {/* Render citizen data in table rows */}
                        <td>{citizen.firstName}</td>
                        <td>{citizen.lastName}</td>
                        <td>{citizen.dateOfBirth}</td>
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

            {/* Button to export data to Excel */}
            {/*<ReactDataExport.ExcelFile element={<button className="btn btn-secondary">Export to Excel</button>}>*/}
            {/*    <ReactDataExport.ExcelSheet data={citizens} name="Citizens">*/}
            {/*        /!* Define Excel columns here *!/*/}
            {/*    </ReactDataExport.ExcelSheet>*/}
            {/*</ReactDataExport.ExcelFile>*/}
        </div>
    );
}

export default SummaryPage;
