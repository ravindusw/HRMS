import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./HrView.css";
const calculateAge = (dateOfBirth) => {
  const birthYear = new Date(dateOfBirth).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-CA"); // 'en-CA' format is "YYYY-MM-DD"
};

const HrView = () => {
  const { id_to_view } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/Hr/auth/employees/${id_to_view}`
        );
        setEmployee(response.data);
      } catch (error) {
        console.error("There was an error fetching the employee!", error);
        setError("There was an error fetching the employee!");
      }
    };

    fetchEmployee();
  }, [id_to_view]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hr-view-container">
      <header className="hr-view-header">
        <h1>Employee Details</h1>
      </header>

      {error ? (
        <p className="error-message">{error}</p>
      ) : employee ? (
        <div className="employee_Block">
          {/* Employee Details Section */}

          <section className="employee-details">
            <h2>Employee Information</h2>
            <p>
              <strong>Employee ID:</strong> {employee.id}
            </p>
            <p>
              <strong>Name:</strong> {employee.name}
            </p>
            <p>
              <strong>NIC:</strong> {employee.NIC}
            </p>
            <p>
              <strong>User name:</strong> {employee.username}
            </p>
            <p>
              <strong>Birthday:</strong> {formatDate(employee.birthday)}
            </p>

            <p>
              <strong>Gender:</strong> {employee.gender}
            </p>
            <p>
              <strong>Job Title:</strong> {employee.job_title}
            </p>
            <p>
              <strong>Pay Grade:</strong> {employee.pay_grade}
            </p>
            <p>
              <strong>Department:</strong> {employee.department}
            </p>
            <p>
              <strong>Branch:</strong> {employee.branch}
            </p>

            <p>
              <strong>Hired Date:</strong> {formatDate(employee.hired_date)}
            </p>
            <p>
              <strong>Employment Status:</strong> {employee.employment_status}
            </p>
            <p>
              <strong>Marital State:</strong> {employee.marital_state}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Address:</strong> {employee.address}
            </p>
            {employee.phone_numbers && employee.phone_numbers.length > 0 && (
              <div>
                <p>
                  <strong>Phone Numbers</strong>
                </p>
                <ul>
                  {employee.phone_numbers.map((phone, index) => (
                    <li key={index}>{phone}</li>
                  ))}
                </ul>
              </div>
            )}
            {employee.emergency_contacts &&
              employee.emergency_contacts.length > 0 && (
                <div>
                  <p>
                    <strong>Emergency Contacts</strong>
                  </p>
                  <ul>
                    {employee.emergency_contacts.map((contact, index) => (
                      <li key={index}>
                        {contact.name} ({contact.relationship}) {contact.phone}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </section>

          {/* Dependents Section */}
          <section className="dependents-section">
            <h2>Dependents</h2>
            {employee.dependents && employee.dependents.length > 0 ? (
              <div className="dependents-box">
                <ul>
                  {employee.dependents.map((dependent, index) => (
                    <li key={index}>
                      <p>
                        <strong>Name:</strong> {dependent.name}
                      </p>
                      <p>
                        <strong>age:</strong>{" "}
                        {calculateAge(dependent.date_of_birth)}
                      </p>
                      <p>
                        <strong>gender:</strong> {dependent.gender}
                      </p>
                      {dependent.phone_number && (
                        <p>
                          <strong>phone Number:</strong>{" "}
                          {dependent.phone_number}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>
                <em>No dependents</em>
              </p>
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
