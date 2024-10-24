import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddEmployee.css";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    NIC: null,
    First_Name: null,
    Last_Name: null,
    Email: null,
    DOB: null,
    Gender: null,
    Address: null,
    Marital_Status: null,
    Department: null,
    Supervisor_ID: null,
    Job_Title: null,
    Pay_Grade: null,
    Employment_Type: null,
    Work_Schedule: null,
    Hired_Date: null,
    Termination_Date: null,
    Contact_Number: null,
    Emergency_Contact_Name: null,
    Emergency_Contact_Number: null,
    Emergency_Contact_Relationship: null,
    Dependant_Name: null,
    Dependant_Relationship: null,
    Dependant_DOB: null,
    Dependant_Gender: null,
    Dependent_Contact_Number: null,
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
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>NIC:</Form.Label>
              <Form.Control
                type="text"
                name="NIC"
                value={employeeData.NIC}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="Last_Name"
                value={employeeData.Last_Name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                value={employeeData.Email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control
                type="date"
                name="DOB"
                value={employeeData.DOB}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                name="Address"
                value={employeeData.Address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Marital Status:</Form.Label>
              <Form.Control
                as="select"
                name="Marital_Status"
                value={employeeData.Marital_Status}
                onChange={handleChange}
              >
                <option value="" disabled hidden></option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>department:</Form.Label>
              <Form.Control
                as="select"
                name="Department"
                value={employeeData.Department}
                onChange={handleChange}
              >
                <option value="" disabled hidden></option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Production">Production</option>
                <option value="Supply Chain">Supply Chain</option>
                <option value="Merchandising">Merchandising</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Warehouse">Warehouse</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Supervisor ID:</Form.Label>
              <Form.Control
                as="select"
                name="Supervisor_ID"
                value={employeeData.Supervisor_ID}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Supervisor
                </option>
                {supervisors.map((supervisor) => (
                  <option key={supervisor.id} value={supervisor.id}>
                    {supervisor.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Job Title:</Form.Label>
              <Form.Control
                as="select"
                name="Job_Title"
                value={employeeData.Job_Title}
                onChange={handleChange}
              >
                <option value="" disable hidden></option>
                <option value="Accountant">Accountant</option>
                <option value="CEO">CEO</option>
                <option value="Fashion Designer">Fashion Designer</option>
                <option value="HR Manager">HR Manager</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Marketing Manager">Marketing Manager</option>
                <option value="Packaging Assistant">Packaging Assistant</option>
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
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="First_Name"
                value={employeeData.First_Name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender:</Form.Label>
              <Form.Control
                as="select"
                name="Gender"
                value={employeeData.Gender}
                onChange={handleChange}
              >
                <option value="" hidden disabled></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Pay Grade:</Form.Label>
              <Form.Control
                as="select"
                name="Pay_Grade"
                value={employeeData.Pay_Grade}
                onChange={handleChange}
              >
                <option value="" hidden></option>
                <option value="Level-1">Level-1</option>
                <option value="Level-2">Level-2</option>
                <option value="Level-3">Level-3</option>
                <option value="Level-4">Level-4</option>
                <option value="Level-5">Level-5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Employment Type:</Form.Label>
              <Form.Control
                as="select"
                name="Employment_Type"
                value={employeeData.Employment_Type}
                onChange={handleChange}
              >
                <option value="" hidden></option>
                <option value="Intern">Intern</option>
                <option value="Contract">Contract</option>
                <option value="Permanent">Permanent</option>
                <option value="Freelance">Freelance</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Work Schedule:</Form.Label>
              <Form.Control
                as="select"
                name="Work_Schedule"
                value={employeeData.Work_Schedule}
                onChange={handleChange}
              >
                <option value="" hidden></option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Hired Date:</Form.Label>
              <Form.Control
                type="date"
                name="Hired_Date"
                value={employeeData.Hired_Date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Termination Date:</Form.Label>
              <Form.Control
                type="date"
                name="Termination_Date"
                value={employeeData.Termination_Date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contact Number:</Form.Label>
              <Form.Control
                type="text"
                name="Contact_Number"
                value={employeeData.Contact_Number}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Contact Number 2:</Form.Label>
              <Form.Control
                type="text"
                name="Contact_Number"
                value={employeeData.Contact_Number}
                onChange={handleChange}
              />
            </Form.Group> */}

            {/* Add additional fields for emergency contact, dependents, etc. */}
            <Form.Group>
              <Form.Label>Emergency Contact Name:</Form.Label>
              <Form.Control
                type="text"
                name="Emergency_Contact_Name"
                value={employeeData.Emergency_Contact_Name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Emergency Contact Number:</Form.Label>
              <Form.Control
                type="text"
                name="Emergency_Contact_Number"
                value={employeeData.Emergency_Contact_Number}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Emergency Contact Relationship:</Form.Label>
              <Form.Control
                type="text"
                name="Emergency_Contact_Relationship"
                value={employeeData.Emergency_Contact_Relationship}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Dependent Name:</Form.Label>
              <Form.Control
                type="text"
                name="Dependant_Name"
                value={employeeData.Dependant_Name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Dependent Relationship:</Form.Label>
              <Form.Control
                type="text"
                name="Dependant_Relationship"
                value={employeeData.Dependant_Relationship}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Dependent Date of Birth:</Form.Label>
              <Form.Control
                type="date"
                name="Dependant_DOB"
                value={employeeData.Dependant_DOB}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Dependent Gender:</Form.Label>
              <Form.Control
                as="select"
                name="Dependant_Gender"
                value={employeeData.Dependant_Gender}
                onChange={handleChange}
              >
                <option value="" hidden disabled></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
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
