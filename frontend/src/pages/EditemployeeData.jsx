import { useParams } from 'react-router-dom';
const EditemployeeData=()=>{
    const {id_to_edit} = useParams();
    //console.log(id_to_edit)
    return(
        <div>
            <h1>Edit Employee {id_to_edit} Data</h1>
        </div>
    )

}
export default EditemployeeData

/*
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

import './EditemployeeData.css'; // Import the CSS file



function EditemployeeData() {
  const { id_to_transfer, id_to_edit } = useParams();
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState(null);
  const [contactNumbers, setContactNumbers] = useState(null);

  useEffect(() => {
    // Fetch employee data based on id_to_edit when the component mounts
    Axios.get(`http://localhost:3000/viewEmployee/${id_to_edit}`)
      .then(response => {
        // Set the fetched data to the state
        setEmployeeData(response.data.employee);

        // Set the contact numbers to the state
        const initialContactNumbers = response.data.contact.map(contact => contact.Contact_Number);
        setContactNumbers(initialContactNumbers || []);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, [id_to_edit]);

  const [employmentStatusOptions, setEmploymentStatusOptions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/addEmployee/employmentStatus")
      .then(response => {
        setEmploymentStatusOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [payGradeOptions, setPayGradeOptions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/addEmployee/payGrade")
      .then(response => {
        setPayGradeOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [departmentOptions, setDepartmentOptions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/addEmployee/department")
      .then(response => {
        setDepartmentOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [branchOptions, setBranchOptions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/addEmployee/branch")
      .then(response => {
        setBranchOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (employeeData === null || contactNumbers === null) {
    return <div>Loading...</div>;
  }

  const formattedDate = format(parseISO(employeeData.Birthday), 'yyyy-MM-dd');
  
  const initialEmployeeData = {
    employeeID: employeeData.Employee_ID,
    firstName: employeeData.First_Name,
    lastName: employeeData.Last_Name,
    gender: employeeData.Gender,
    maritalStatus: employeeData.Marital_Status,
    birthday: formattedDate,
    contact: contactNumbers,
    email: employeeData.Email || "",
    employmentStatus: employeeData.Employment_Status,
    jobTitle: employeeData.Job_Title,
    payGrade: employeeData.Pay_Grade,
    department: employeeData.Dept_Name,
    branch: employeeData.Branch_Name,

    dependentID: employeeData.Dependent_ID,
    dFirstName: employeeData.dFirst_Name,
    dLastName: employeeData.dLast_Name,
    dGender: employeeData.dGender,
    age: employeeData.Age,
    relation: employeeData.Relation
  }

  return (
    <div>
        <div className="container">
        <Form autoComplete="off" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <div>
                <h4 style={{ marginBottom: '30px', marginTop: '40px' }}>Employee Information</h4>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputEmployeeID" style={{marginTop: '15px'}}>Employee ID</label>
                    <Field type="text" className="form-control" id="inputEmployeeID" name="employeeID" placeholder="Employee ID" disabled={true} />
                    <ErrorMessage name="employeeID" component="div" className="error-message" />
                </div>
                <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName" style={{marginTop: '15px'}}>First Name</label>
                    <Field type="text" className="form-control" id="inputFirstName" name="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputLastName" style={{marginTop: '15px'}}>Last Name</label>
                    <Field type="text" className="form-control" id="inputLastName" name="lastName" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputGender" style={{marginTop: '15px'}}>Gender</label>
                    <Field as='select' className="form-control" id="inputGender" name="gender" >
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="error-message" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputMaritalStatus" style={{marginTop: '15px'}}>Marital Status</label>
                    <Field as='select' className="form-control" id="inputMaritalStatus" name="maritalStatus" >
                    <option>Choose...</option>
                    <option>Married</option>
                    <option>Unmarried</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                    </Field>
                    <ErrorMessage name="maritalStatus" component="div" className="error-message" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputBirthday" style={{marginTop: '15px'}}>Birthday</label>
                    <Field type="date" className="form-control" id="inputBirthday" name="birthday" placeholder="Birthday" />
                    <ErrorMessage name="birthday" component="div" className="error-message" />
                </div>
                </div>

                <div className="form-group col-md-5">
                <FieldArray name="contact">{
                    (fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { contact } = values;
                    return <div>
                        <label style={{marginTop: '15px'}}>Contact Numbers</label>
                        {contact.map((number, index) => (
                        <div key={index}>
                            
                          <div className="d-flex justify-content-between">
                            <Field type="text" className="form-control col-md-4" id={`inputContact[${index}]`} name={`contact[${index}]`} placeholder="Contact Number" value={contact[index] || ''} style={{marginTop: "5px", marginBottom: "0px"}} />
                            {
                              index > 0 &&
                              <div className="col">
                                <button type="button" className="btn btn-secondary" style={{marginLeft: "5px", marginTop: "5px"}} onClick={() => remove(index)}><BsFillTelephoneMinusFill /></button>
                              </div>
                            }
                            <div className="col">
                              <button type="button" className="btn btn-secondary" style={{marginLeft: "5px", marginTop: "5px"}} onClick={() => push('')}><BsTelephonePlusFill /></button>
                            </div>
                          </div>
                          <ErrorMessage name={`contact[${index}]`} component="div" className="error-message" />
                        </div>
                        ))}
                    </div>
                    }
                }</FieldArray>
                </div>

                <div className="form-group col-md-6">
                <label htmlFor="inputEmail" style={{marginTop: '15px'}}>Email</label>
                <Field type="email" className="form-control" id="inputEmail" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputEmploymentStatus" style={{marginTop: '15px'}}>Employment Status</label>
                    <Field as='select' className="form-control" id="inputEmploymentStatus" name="employmentStatus" >
                    <option>Choose...</option>
                    {employmentStatusOptions.map(option => (
                        <option key={option.Status_ID}>
                        {option.Status}
                        </option>
                    ))}
                    </Field>
                    <ErrorMessage name="employmentStatus" component="div" className="error-message" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputJobTitle" style={{marginTop: '15px'}}>Job Title</label>
                    <Field as='select' className="form-control" id="inputJobTitle" name="jobTitle" disabled={true} >
                    <option>Choose...</option>
                    <option>HR Manager</option>
                    <option>Accountant</option>
                    <option>Software Engineer</option>
                    <option>QA Engineer</option>
                    </Field>
                    <ErrorMessage name="jobTitle" component="div" className="error-message" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputPayGrade" style={{marginTop: '15px'}}>Pay Grade</label>
                    <Field as='select' className="form-control" id="inputPayGrade" name="payGrade" >
                    <option>Choose...</option>
                    {payGradeOptions.map(option => (
                        <option key={option.Pay_Grade_ID}>
                        {option.Pay_Grade}
                        </option>
                    ))}
                    </Field>
                    <ErrorMessage name="payGrade" component="div" className="error-message" />
                </div>
                </div>
                <div className="form-group col-md-5">
                <label htmlFor="inputDepartment" style={{marginTop: '15px'}}>Department</label>
                <Field as='select' className="form-control" id="inputDepartment" name="department" >
                    <option>Choose...</option>
                    {departmentOptions.map(option => (
                    <option key={option.Dept_ID}>
                        {option.Dept_Name}
                    </option>
                    ))}
                </Field>
                <ErrorMessage name="department" component="div" className="error-message" />
                </div>
                <div className="form-group col-md-5">
                <label htmlFor="inputBranch" style={{marginTop: '15px'}}>Branch</label>
                <Field as='select' className="form-control" id="inputBranch" name="branch" >
                    <option>Choose...</option>
                    {branchOptions.map(option => (
                    <option key={option.Branch_ID}>
                        {option.Branch_Name}
                    </option>
                    ))}
                </Field>
                <ErrorMessage name="branch" component="div" className="error-message" />
                </div>

                {employeeData.Dependent_ID != null ? (
                    <div>
                        <div>
                            <h4 style={{ marginBottom: '30px', marginTop: '50px' }}>Dependent Information</h4>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputDependentID" style={{marginTop: '15px'}}>Dependent ID</label>
                            <Field type="text" className="form-control" id="inputDependentID" name="dependentID" placeholder="Dependent ID" disabled={true} />
                            <ErrorMessage name="dependentID" component="div" className="error-message" />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputDependentFirstName" style={{ marginTop: '15px' }}>First Name</label>
                                <Field type="text" className="form-control" id="inputDependentFirstName" name="dFirstName" placeholder="Dependent's First Name" />
                                <ErrorMessage name="dFirstName" component="div" className="error-message" />
                            </div>
                            
                            <div className="form-group col-md-6">
                                <label htmlFor="inputDependentLastName" style={{ marginTop: '15px' }}>Last Name</label>
                                <Field type="text" className="form-control" id="inputDependentLastName" name="dLastName" placeholder="Dependent's Last Name" />
                                <ErrorMessage name="dLastName" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputDependentGender" style={{ marginTop: '15px' }}>Gender</label>
                            <Field as='select' id="inputDependentGender" name="dGender" className="form-control" >
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                <option>Prefer not to say</option>
                            </Field>
                            <ErrorMessage name="dGender" component="div" className="error-message" />
                        </div>
                        
                        <div className="form-group col-md-5">
                            <label htmlFor="inputDependentAge" style={{ marginTop: '15px' }}>Age</label>
                            <Field type="number" className="form-control" id="inputDependentAge" name="age" placeholder="Age" />
                            <ErrorMessage name="age" component="div" className="error-message" />
                        </div>
                        
                        <div className="form-group col-md-5">
                            <label htmlFor="inputRelation" style={{ marginTop: '15px' }}>Relation</label>
                            <Field type="text" className="form-control" id="inputRelation" name="relation" placeholder="Relation" />
                            <ErrorMessage name="relation" component="div" className="error-message" />
                        </div>
                    </div>
                ) : null }
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '50px', marginTop: '30px' }}>Submit</button>
            </Form>
        </div>
    </div>
  );
}

export default EditemployeeData; */