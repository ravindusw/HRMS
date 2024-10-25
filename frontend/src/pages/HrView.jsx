import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axiosInstance from '../utils/AxiosInstance';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import EmployeePic from "../assets/Employee.png";
import "./HrView.css";
const calculateAge = (dateOfBirth) => {
  const birthYear = new Date(dateOfBirth).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};



const HrView = () => {
  const { id_to_view } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axiosInstance.get(
          `/auth/Hr/employees/${id_to_view}`
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
    
    <Container className="profile-page">
    <Card className="profile-card shadow-sm">
      <Row className="profile-header">
        <Col md={4} className="profile-photo-container">
          <Image
            className="profile-photo"
            src={EmployeePic}
            roundedCircle
            width="160"
            height="160"
            alt="Employee"
          />
        </Col>
        <Col md={8} className="profile-name">
          <h1>
            {employee.name}
          </h1>
          <h5>{employee.id}</h5>
          <p className="job-title">{employee.job_title}</p>
        </Col>
      </Row>

      <Card.Body>
        <Row className="profile-details">
          <Col md={6}>
            
            <div className="profile-field">
              <span>NIC:</span> {employee.NIC}
            </div>
            <div className="profile-field">
              <span>User Name:</span> {employee.username}
            </div>
            
            <div className="profile-field">
              <span>Email:</span> {employee.email}
            </div>
            <div className="profile-field">
              <span>Pay Grade:</span> {employee.pay_grade}
            </div>
            
          </Col>
          <Col md={6}>
          <div className="profile-field">
              <span>Department:</span> {employee.department}
            </div>

            <div className="profile-field">
              <span>Branch:</span> {employee.branch}
            </div>
            
          
            
            <div className="profile-field">
              <span>Hired Date:</span> {employee.hired_date}
            </div>
            <div className="profile-field">
              <span>Employment Type:</span> {employee.employment_status}
            </div>
            <div className="profile-field">
              <span>Supervisor:</span> {employee.supervisor_name}
            </div>
          </Col>
          <Col md={6}>
            <div className="profile-field">
              <span>Birthday:</span> {employee.birthday}
            </div>
            <div className="profile-field">
              <span>Marital Status:</span> {employee.marital_state}
            </div>
            <div className="profile-field">
              <span>Gender:</span> {employee.gender}
            </div>
            <div className="profile-field">
              <span>Address:</span> {employee.address}
            </div>
            
            
          </Col>
        </Row>
        
        <Row className="profile-section">
        <Col md={6}>
          <h5>Phone Numbers</h5>
          {employee.phone_numbers && employee.phone_numbers.length > 0 ? (
            <div>
              <ul>
                {employee.phone_numbers.map((phone, index) => (
                  <li key={index}>{phone}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No phone numbers available</p>
          )}
        </Col>
        <Col md={6}>
          <h5>Emergency Contacts</h5>
          {employee.emergency_contacts && employee.emergency_contacts.length > 0 ? (
            <div>
              <ul>
                {employee.emergency_contacts.map((contact, index) => (
                  <li key={index}>
                    <div className="profile-field">
                      <span>Name:</span> {contact.name || "N/A"}
                    </div>
                    <div className="profile-field">
                      <span>Phone:</span> {contact.phone || "N/A"}
                    </div>
                    <div className="profile-field">
                      <span>Relationship:</span> {contact.relationship || "N/A"}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No emergency contacts available</p>
          )}
        </Col>
      </Row>
      <Row className="profile-section">
        <Col md={12}>
          <h5>Dependents</h5>
          {employee.dependents && employee.dependents.length > 0 ? (
            <div className="dependents-box">
              <ul>
                {employee.dependents.map((dependent, index) => (
                  <li key={index}>
                    <p>
                      <strong>Name:</strong> {dependent.name}
                    </p>
                    <p>
                      <strong>Relationship:</strong> {dependent.relationship}
                    </p>
                    <p>
                      <strong>Age:</strong> {calculateAge(dependent.date_of_birth)}
                    </p>
                    <p>
                      <strong>Gender:</strong> {dependent.gender}
                    </p>
                    {dependent.phone_number && (
                      <p>
                        <strong>Phone Number:</strong> {dependent.phone_number}
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
        </Col>
      </Row>
        

        {/* Simplified Supervisor section 
        <Row className="profile-section">
          <Col md={6}>
            <h5>Supervisor</h5>
            <div className="profile-field">
              <span>Name:</span> {profileData?.supervisor || "N/A"}
            </div>
          </Col>
        </Row> */}
      </Card.Body>
    </Card>
  </Container>

    
  );
};

export default HrView;












//import { useParams } from "react-router-dom";
//import React, { useState, useEffect } from "react";
//import axiosInstance from '../utils/AxiosInstance';
//import Card from "react-bootstrap/Card";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import Image from "react-bootstrap/Image";
//import EmployeePic from "../assets/Employee.png";
//import "./HrView.css";
//const calculateAge = (dateOfBirth) => {
//  const birthYear = new Date(dateOfBirth).getFullYear();
//  const currentYear = new Date().getFullYear();
//  return currentYear - birthYear;
//};
//
//const formatDate = (dateString) => {
//  const date = new Date(dateString);
//  return date.toLocaleDateString("en-CA"); // 'en-CA' format is "YYYY-MM-DD"
//};
//
//const HrView = () => {
//  const { id_to_view } = useParams();
//  const [employee, setEmployee] = useState(null);
//  const [error, setError] = useState(null);
//
//  useEffect(() => {
//    const fetchEmployee = async () => {
//      try {
//        const response = await axiosInstance.get(
//          `/auth/Hr/employees/${id_to_view}`
//        );
//        setEmployee(response.data);
//      } catch (error) {
//        console.error("There was an error fetching the employee!", error);
//        setError("There was an error fetching the employee!");
//      }
//    };
//
//    fetchEmployee();
//  }, [id_to_view]);
//
//  if (!employee) {
//    return <div>Loading...</div>;
//  }
//
//  return (
//    <div className="hr-view-container">
//      <header className="hr-view-header">
//        <h1>Employee Details</h1>
//      </header>
//
//      {error ? (
//        <p className="error-message">{error}</p>
//      ) : employee ? (
//        <div className="employee_Block">
//          {/* Employee Details Section */}
//
//          <section className="employee-details">
//            <h2>Employee Information</h2>
//            <p>
//              <strong>Employee ID:</strong> {employee.id}
//            </p>
//            <p>
//              <strong>Name:</strong> {employee.name}
//            </p>
//            <p>
//              <strong>NIC:</strong> {employee.NIC}
//            </p>
//            <p>
//              <strong>User name:</strong> {employee.username}
//            </p>
//            <p>
//              <strong>Birthday:</strong> {formatDate(employee.birthday)}
//            </p>
//
//            <p>
//              <strong>Gender:</strong> {employee.gender}
//            </p>
//            <p>
//              <strong>Job Title:</strong> {employee.job_title}
//            </p>
//            <p>
//              <strong>Pay Grade:</strong> {employee.pay_grade}
//            </p>
//            <p>
//              <strong>Department:</strong> {employee.department}
//            </p>
//            <p>
//              <strong>Branch:</strong> {employee.branch}
//            </p>
//
//            <p>
//              <strong>Hired Date:</strong> {formatDate(employee.hired_date)}
//            </p>
//            <p>
//              <strong>Employment Status:</strong> {employee.employment_status}
//            </p>
//            <p>
//              <strong>Marital State:</strong> {employee.marital_state}
//            </p>
//            <p>
//              <strong>Email:</strong> {employee.email}
//            </p>
//            <p>
//              <strong>Address:</strong> {employee.address}
//            </p>
//            {employee.phone_numbers && employee.phone_numbers.length > 0 && (
//              <div>
//                <p>
//                  <strong>Phone Numbers</strong>
//                </p>
//                <ul>
//                  {employee.phone_numbers.map((phone, index) => (
//                    <li key={index}>{phone}</li>
//                  ))}
//                </ul>
//              </div>
//            )}
//            {employee.emergency_contacts &&
//              employee.emergency_contacts.length > 0 && (
//                <div>
//                  <p>
//                    <strong>Emergency Contacts</strong>
//                  </p>
//                  <ul>
//                    {employee.emergency_contacts.map((contact, index) => (
//                      <li key={index}>
//                        {contact.name} ({contact.relationship}) {contact.phone}
//                      </li>
//                    ))}
//                  </ul>
//                </div>
//              )}
//          </section>
//
//          {/* Dependents Section */}
//          <section className="dependents-section">
//            <h2>Dependents</h2>
//            {employee.dependents && employee.dependents.length > 0 ? (
//              <div className="dependents-box">
//                <ul>
//                  {employee.dependents.map((dependent, index) => (
//                    <li key={index}>
//                      <p>
//                        <strong>Name:</strong> {dependent.name}
//                      </p>
//                      <p>
//                        <strong>relationship:</strong> {dependent.relationship}
//                      </p>
//                      <p>
//                        <strong>age:</strong>{" "}
//                        {calculateAge(dependent.date_of_birth)}
//                      </p>
//                      <p>
//                        <strong>gender:</strong> {dependent.gender}
//                      </p>
//                      {dependent.phone_number && (
//                        <p>
//                          <strong>phone Number:</strong>{" "}
//                          {dependent.phone_number}
//                        </p>
//                      )}
//                    </li>
//                  ))}
//                </ul>
//              </div>
//            ) : (
//              <p>
//                <em>No dependents</em>
//              </p>
//            )}
//          </section>
//        </div>
//      ) : (
//        <p className="error-message">Loading...</p>
//      )}
//    </div>
//  );
//};
//
//export default HrView;
