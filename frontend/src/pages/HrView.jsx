import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./HrView.css";
//this is the initial data for the employees until we connect to the backend

const HrView = () => {
  const [Employees, setEmployees] = useState([]);
  const { id_to_view } = useParams();
  console.log(id_to_view);
  const employee = Employees.find((emp) => emp.id === id_to_view);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/getemployeesForHR")
      .then((response) => {
        setEmployees(response.data);

        //console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
      });
  }, []);

  return (
    <div className="hr-view-container">
      <header className="hr-view-header">
        <h1>Employee Details</h1>
      </header>

      {employee ? (
        <div>
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
              <strong>Job Title:</strong> {employee.job}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
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
                        <strong>Relation:</strong> {dependent.relation}
                      </p>
                      <p>
                        <strong>Age:</strong> {dependent.age}
                      </p>
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
        <p className="error-message">No employee found with ID {id_to_view}</p>
      )}
    </div>
  );
};
export default HrView;
