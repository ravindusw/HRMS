import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddEmployee.css";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    NIC: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    DOB: "",
    Gender: "",
    Address: "",
    Marital_Status: "",
    Department: "",
    Supervisor_ID: "",
    Job_Title: "",
    Pay_Grade: "",
    Employment_Type: "",
    Work_Schedule: "",
    Hired_Date: "",
    Termination_Date: "",
    Contact_Number1: "",
    Contact_Number2: "",
    Emergency_Contact_Name: "",
    Emergency_Contact_Number: "",
    Emergency_Contact_Relationship: "",
    Dependant_Name: "",
    Dependant_Relationship: "",
    Dependant_DOB: "",
    Dependant_Gender: "",
    Dependent_Contact_Number: "",
  });

  const [supervisors, setSupervisors] = useState([]);
  const [message, setMessage] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/auth/getSupervisors")
      .then((response) => {
        setSupervisors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching supervisors:", error);
      });
  }, []);

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
    console.log(employeeData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/auth/addEmployee",
        employeeData
      );
      console.log("Employee added successfully:", response.data);
      setMessage(response.data.message);
      setButtonColor("success");
    } catch (error) {
      console.error("There was an error adding the employee!", error);
      setMessage("Failed to add Employee");
      setButtonColor("danger");
    } finally {
      setTimeout(() => {
        setMessage("Submit");
        setButtonColor("");
      }, 2000);
    }
  };

  return (
    <Container className="addEmployee-container">
      <Form className="employee-form" onSubmit={handleSubmit}>
        <h1 className="employee-form-title">Add New Employee</h1>
        <Card className="mb-3" border="secondary" bg="light">
          <Card.Header>Personal Information</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="First_Name"
                    value={employeeData.First_Name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Last_Name"
                    value={employeeData.Last_Name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control
                    type="date"
                    name="DOB"
                    value={employeeData.DOB}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gender:</Form.Label>
                  <InputGroup>
                    <Form.Select name="Gender" onChange={handleChange} required>
                      <option value="" hidden></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Address"
                    value={employeeData.Address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Marital Status:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Marital_Status"
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden></option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>NIC:</Form.Label>
                  <Form.Control
                    type="text"
                    name="NIC"
                    value={employeeData.NIC}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="Email"
                    value={employeeData.Email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number 1:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Contact_Number1"
                    value={employeeData.Contact_Number1}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number 2:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Contact_Number2"
                    value={employeeData.Contact_Number2}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-3" border="secondary" bg="light">
          <Card.Header>Job Information</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Department"
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden>
                        Select Department
                      </option>
                      <option value="IT">IT</option>
                      <option value="HR">HR</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Finance">Finance</option>
                      <option value="Production">Production</option>
                      <option value="Supply Chain">Supply Chain</option>
                      <option value="Merchandising">Merchandising</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Warehouse">Warehouse</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Supervisor :</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Supervisor_ID"
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden>
                        Select Supervisor
                      </option>
                      {supervisors.map((supervisor) => (
                        <option key={supervisor.id} value={supervisor.id}>
                          {supervisor.name}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Job_Title"
                      onChange={handleChange}
                      required
                    >
                      <option value="" disable hidden></option>
                      <option value="Accountant">Accountant</option>
                      <option value="CEO">CEO</option>
                      <option value="Fashion Designer">Fashion Designer</option>
                      <option value="HR Manager">HR Manager</option>
                      <option value="IT Manager">IT Manager</option>
                      <option value="Marketing Manager">
                        Marketing Manager
                      </option>
                      <option value="Packaging Assistant">
                        Packaging Assistant
                      </option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Quality Control Inspector">
                        Quality Control Inspector
                      </option>
                      <option value="Retail Assistant">Retail Assistant</option>
                      <option value="Sales Manager">Sales Manager</option>
                      <option value="Sewing Machine Operator">
                        Sewing Machine Operator
                      </option>
                      <option value="Supply Chain Manager">
                        Supply Chain Manager
                      </option>
                      <option value="Warehouse Worker">Warehouse Worker</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pay Grade:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Pay_Grade"
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden></option>
                      <option value="Level-1">Level-1</option>
                      <option value="Level-2">Level-2</option>
                      <option value="Level-3">Level-3</option>
                      <option value="Level-4">Level-4</option>
                      <option value="Level-5">Level-5</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Employment Type:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Employment_Type"
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden></option>
                      <option value="Intern">Intern</option>
                      <option value="Contract">Contract</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Freelance">Freelance</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Work Schedule:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Work_Schedule"
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden></option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hired Date:</Form.Label>
                  <Form.Control
                    type="date"
                    name="Hired_Date"
                    value={employeeData.Hired_Date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Termination Date:</Form.Label>
                  <Form.Control
                    type="date"
                    name="Termination_Date"
                    value={employeeData.Termination_Date}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-3" border="secondary" bg="light">
          <Card.Header>Emergency Contact Information</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Emergency Contact Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Emergency_Contact_Name"
                    value={employeeData.Emergency_Contact_Name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Emergency Contact Number:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Emergency_Contact_Number"
                    value={employeeData.Emergency_Contact_Number}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Emergency Contact Relationship:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Emergency_Contact_Relationship"
                    value={employeeData.Emergency_Contact_Relationship}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-3" border="secondary" bg="light">
          <Card.Header>Dependent Information</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Dependent Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Dependant_Name"
                    value={employeeData.Dependant_Name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dependent Relationship:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Dependant_Relationship"
                    value={employeeData.Dependant_Relationship}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Dependent Date of Birth:</Form.Label>
                  <Form.Control
                    type="date"
                    name="Dependant_DOB"
                    value={employeeData.Dependant_DOB}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dependent Gender:</Form.Label>
                  <InputGroup>
                    <Form.Select
                      name="Dependant_Gender"
                      onChange={handleChange}
                    >
                      <option value="" hidden></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dependent Contact Number:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Dependent_Contact_Number"
                    value={employeeData.Dependent_Contact_Number}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Button
          variant={buttonColor ? buttonColor : "primary"}
          type="submit"
          className="submit-btn"
        >
          {message}
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
