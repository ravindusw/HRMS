import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './HrView.css';

const HrView = () => {
  const { id_to_view } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/Hr/employees/${id_to_view}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("There was an error fetching the employee!", error);
        setError("There was an error fetching the employee!");
      }
    };

    fetchEmployee();
  }, [id_to_view]);

  return (
    <div className="hr-view-container">
      <header className="hr-view-header">
        <h1>Employee Details</h1>
      </header>

      {error ? (
        <p className="error-message">{error}</p>
      ) : employee ? (
        <div className='employee_Block'>
          {/* Employee Details Section */}
          
          <section className="employee-details">
            <h2>Employee Information</h2>
            <p><strong>Employee ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Job Title:</strong> {employee.job}</p>
            <p><strong>Email:</strong> {employee.email}</p>
          </section>

          {/* Dependents Section */}
          <section className="dependents-section">
            <h2>Dependents</h2>
            {employee.dependents && employee.dependents.length > 0 ? (
              <div className="dependents-box">
                <ul>
                  {employee.dependents.map((dependent, index) => (
                    <li key={index}>
                      <p><strong>Name:</strong> {dependent.name}</p>
                      <p><strong>Relation:</strong> {dependent.relation}</p>
                      <p><strong>Age:</strong> {dependent.age}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p><em>No dependents</em></p>
            )}
          </section>
        </div>
      ) : (
        <p className="error-message">Loading...</p>
      )}
    </div>
  );
};

export default HrView;