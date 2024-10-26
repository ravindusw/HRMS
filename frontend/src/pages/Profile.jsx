import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import EmployeePic from "../assets/Employee.png";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axiosInstance.get(`/profile`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Container className="profile-page">
      <Card className="profile-card shadow-sm" border="info" text="dark">
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
              {profileData?.first_name} {profileData?.last_name}
            </h1>
            <p className="job-title">{profileData?.job_title}</p>
          </Col>
        </Row>

        <Card.Body>
          <Row className="profile-details">
            <Col md={6}>
              <div className="profile-field">
                <span>Email:</span> {profileData?.email}
              </div>
              <div className="profile-field">
                <span>NIC:</span> {profileData?.nic}
              </div>
              <div className="profile-field">
                <span>Department:</span> {profileData?.department}
              </div>
              <div className="profile-field">
                <span>Date of Birth:</span>{" "}
                {new Date(profileData?.date_of_birth).toLocaleDateString()}
              </div>
              <div className="profile-field">
                <span>Pay Grade:</span> {profileData?.pay_grade}
              </div>
            </Col>
            <Col md={6}>
              <div className="profile-field">
                <span>Marital Status:</span> {profileData?.marital_state}
              </div>
              <div className="profile-field">
                <span>Gender:</span> {profileData?.gender}
              </div>
              <div className="profile-field">
                <span>Address:</span> {profileData?.address}
              </div>
              <div className="profile-field">
                <span>Employment Type:</span> {profileData?.employment_type}
              </div>
              <div className="profile-field">
                <span>Work Schedule:</span> {profileData?.work_schedule}
              </div>
            </Col>
          </Row>

          {/* Display contact numbers */}
          <Row className="profile-section">
            <Col md={12}>
              <h5>Contact Numbers</h5>
              <div className="profile-field">
                <span>Primary:</span>{" "}
                {profileData?.contact_numbers?.primary || "N/A"}
              </div>
              <div className="profile-field">
                <span>Secondary:</span>{" "}
                {profileData?.contact_numbers?.secondary || "N/A"}
              </div>
            </Col>
          </Row>

          <Row className="profile-section">
            <Col md={6}>
              <h5>Emergency Contact</h5>
              <div className="profile-field">
                <span>Name:</span>{" "}
                {profileData?.emergency_contact?.name || "N/A"}
              </div>
              <div className="profile-field">
                <span>Phone:</span>{" "}
                {profileData?.emergency_contact?.phone || "N/A"}
              </div>
              <div className="profile-field">
                <span>Relationship:</span>{" "}
                {profileData?.emergency_contact?.relationship || "N/A"}
              </div>
            </Col>
            <Col md={6}>
              <h5>Dependent</h5>
              <div className="profile-field">
                <span>Name:</span> {profileData?.dependent?.name || "N/A"}
              </div>
            </Col>
          </Row>

          {/* Simplified Supervisor section */}
          <Row className="profile-section">
            <Col md={6}>
              <h5>Supervisor</h5>
              <div className="profile-field">
                <span>Name:</span> {profileData?.supervisor || "N/A"}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
