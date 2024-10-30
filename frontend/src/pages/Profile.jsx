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

  const { custom_attributes } = profileData;

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
              <div className="custom-attribute">
                {custom_attributes.key1_name && custom_attributes.value1 && (
                  <div className="profile-field">
                    <strong>{custom_attributes.key1_name}:</strong>{" "}
                    {custom_attributes.value1}
                  </div>
                )}
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
              <div className="custom-attribute">
                {custom_attributes.key2_name && custom_attributes.value2 && (
                  <div className="profile-field">
                    <strong>{custom_attributes.key2_name}:</strong>{" "}
                    {custom_attributes.value2}
                  </div>
                )}
                {custom_attributes.key3_name && custom_attributes.value3 && (
                  <div className="profile-field">
                    <strong>{custom_attributes.key3_name}:</strong>{" "}
                    {custom_attributes.value3}
                  </div>
                )}
              </div>
            </Col>
          </Row>
          {/* Display contact numbers */}
          <Row className="profile-section">
            <Col md={12}>
              <h5>Contact Numbers</h5>
              <div className="profile-field">
                <span>Primary:</span>{" "}
                {profileData?.contact_numbers?.primary ? (
                  profileData.contact_numbers.primary
                ) : (
                  <em>Not available</em>
                )}
              </div>
              <div className="profile-field">
                <span>Secondary:</span>{" "}
                {profileData?.contact_numbers?.secondary ? (
                  profileData.contact_numbers.secondary
                ) : (
                  <em>Not available</em>
                )}
              </div>
            </Col>
          </Row>
          <Row className="profile-section">
            <Col md={6}>
              <h5>Emergency Contact</h5>
              <div className="profile-field">
                <span>Name:</span>{" "}
                {profileData?.emergency_contact?.name ? (
                  profileData.emergency_contact.name
                ) : (
                  <em>Not available</em>
                )}
              </div>
              <div className="profile-field">
                <span>Phone:</span>{" "}
                {profileData?.emergency_contact?.phone ? (
                  profileData.emergency_contact.phone
                ) : (
                  <em>Not available</em>
                )}
              </div>
              <div className="profile-field">
                <span>Relationship:</span>{" "}
                {profileData?.emergency_contact?.relationship ? (
                  profileData.emergency_contact.relationship
                ) : (
                  <em>Not available</em>
                )}
              </div>
            </Col>
            <Col md={6}>
              <h5>Dependent details</h5>
              <div className="profile-field">
                <span>Name:</span>{" "}
                {profileData?.dependent?.name ? (
                  profileData.dependent.name
                ) : (
                  <em>Not available</em>
                )}
              </div>
            </Col>
          </Row>

          {/* Simplified Supervisor section */}
          <Row className="profile-section">
            <Col md={6}>
              <h5>Supervisor</h5>
              <div className="profile-field">
                <span>Name:</span> {profileData?.supervisor || "Not available"}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
