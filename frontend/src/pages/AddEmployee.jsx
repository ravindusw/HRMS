import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    nic: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    maritalStatus: "",
    gender: "",
    address: "",
    contactDetails: "",
    emergencyContact: { name: "", phone: "", relationship: "" },
    jobTitle: "",
    payGrade: "",
    employmentState: { employmentType: "", workSchedule: "" },
    supervisorId: "",
    department: "",
    hiredDate: "",
    terminationDate: "",
    dependents: [
      { name: "", relationship: "", dob: "", gender: "", phoneNumber: "" },
    ],
  });

  const [supervisors, setSupervisors] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch supervisors and departments from backend
    axios
      .get("/api/supervisors")
      .then((response) => setSupervisors(response.data));
    axios
      .get("/api/departments")
      .then((response) => setDepartments(response.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/employees", employeeData)
      .then((response) => alert("Employee Added Successfully!"))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <Container>
      <h2>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Row>
          <Col>
            <Form.Group controlId="nic">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                name="nic"
                value={employeeData.nic}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={employeeData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={employeeData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={employeeData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={employeeData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="maritalStatus">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control
                as="select"
                name="maritalStatus"
                value={employeeData.maritalStatus}
                onChange={handleChange}
                required
              >
                <option>Single</option>
                <option>Married</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={employeeData.gender}
                onChange={handleChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Address and Contact */}
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={employeeData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="contactDetails">
          <Form.Label>Contact Details (Phone Number)</Form.Label>
          <Form.Control
            type="text"
            name="contactDetails"
            value={employeeData.contactDetails}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Emergency Contact */}
        <h5>Emergency Contact</h5>
        <Row>
          <Col>
            <Form.Group controlId="emergencyContactName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="emergencyContactName"
                value={employeeData.emergencyContact.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="emergencyContactPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="emergencyContactPhone"
                value={employeeData.emergencyContact.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="emergencyContactRelationship">
              <Form.Label>Relationship</Form.Label>
              <Form.Control
                type="text"
                name="emergencyContactRelationship"
                value={employeeData.emergencyContact.relationship}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Job Title and Pay Grade */}
        <Row>
          <Col>
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                as="select"
                name="jobTitle"
                value={employeeData.jobTitle}
                onChange={handleChange}
                required
              >
                <option>Factory Manager</option>
                <option>Accountant</option>
                <option>Mechanical Engineer</option>
                <option>QA Engineer</option>
                <option>Fashion Designer</option>
                <option>Textile Designer</option>
                <option>Pattern Maker</option>
                <option>Garment Technologist</option>
                <option>Production Planner</option>
                <option>Sewing Machine Operator</option>
                <option>Quality Control Manager</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="payGrade">
              <Form.Label>Pay Grade</Form.Label>
              <Form.Control
                as="select"
                name="payGrade"
                value={employeeData.payGrade}
                onChange={handleChange}
                required
              >
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Employment Type and Schedule */}
        <Row>
          <Col>
            <Form.Group controlId="employmentType">
              <Form.Label>Employment Type</Form.Label>
              <Form.Control
                as="select"
                name="employmentType"
                value={employeeData.employmentState.employmentType}
                onChange={handleChange}
                required
              >
                <option>Intern</option>
                <option>Contract</option>
                <option>Permanent</option>
                <option>Freelance</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="workSchedule">
              <Form.Label>Work Schedule</Form.Label>
              <Form.Control
                as="select"
                name="workSchedule"
                value={employeeData.employmentState.workSchedule}
                onChange={handleChange}
                required
              >
                <option>Fulltime</option>
                <option>Parttime</option>
                <option>Flexible</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Supervisor and Department */}
        <Row>
          <Col>
            <Form.Group controlId="supervisorId">
              <Form.Label>Supervisor</Form.Label>
              <Form.Control
                as="select"
                name="supervisorId"
                value={employeeData.supervisorId}
                onChange={handleChange}
                required
              >
                {supervisors.map((supervisor) => (
                  <option key={supervisor.id} value={supervisor.id}>
                    {supervisor.id}:{supervisor.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                as="select"
                name="department"
                value={employeeData.department}
                onChange={handleChange}
                required
              >
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Dates */}
        <Row>
          <Col>
            <Form.Group controlId="hiredDate">
              <Form.Label>Hired Date</Form.Label>
              <Form.Control
                type="date"
                name="hiredDate"
                value={employeeData.hiredDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="terminationDate">
              <Form.Label>Termination Date</Form.Label>
              <Form.Control
                type="date"
                name="terminationDate"
                value={employeeData.terminationDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Dependents */}
        <h5>Dependents</h5>
        {employeeData.dependents.map((dependent, index) => (
          <div key={index}>
            <Row>
              <Col>
                <Form.Group controlId={`dependentName_${index}`}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name={`dependentName_${index}`}
                    value={dependent.name}
                    onChange={(e) => handleDependentChange(e, index)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={`dependentRelationship_${index}`}>
                  <Form.Label>Relationship</Form.Label>
                  <Form.Control
                    type="text"
                    name={`dependentRelationship_${index}`}
                    value={dependent.relationship}
                    onChange={(e) => handleDependentChange(e, index)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId={`dependentDob_${index}`}>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name={`dependentDob_${index}`}
                    value={dependent.dob}
                    onChange={(e) => handleDependentChange(e, index)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={`dependentGender_${index}`}>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    name={`dependentGender_${index}`}
                    value={dependent.gender}
                    onChange={(e) => handleDependentChange(e, index)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={`dependentPhone_${index}`}>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name={`dependentPhone_${index}`}
                    value={dependent.phoneNumber}
                    onChange={(e) => handleDependentChange(e, index)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        ))}

        <Button type="submit" variant="primary">
          Add Employee
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
