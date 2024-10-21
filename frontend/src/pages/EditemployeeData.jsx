import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditemployeeData.css'; // Import the CSS file

const EditemployeeData = () => {
  const { id_to_edit } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    job_title: '',
    department: '',
    phone_numbers: [],
    address: '',
    marital_state: '',
    pay_grade: '',
    dependents: [],
    emergency_contacts: []
  });

  const [jobTitles, setJobTitles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [payGrades, setPayGrades] = useState([]);
  const [editableFields, setEditableFields] = useState({
    address: false,
    marital_state: false,
    job_title: false,
    department: false,
    pay_grade: false
  });
  const [showEmergencyContact, setShowEmergencyContact] = useState(false);

  useEffect(() => {
    // Fetch employee data from the server
    

    // Fetch job titles, departments, and pay grades from the server
    fetch('http://localhost:8800/api/Hr/JobTitles')
      .then(response => response.json())
      .then(data => setJobTitles(data))
      .catch(error => console.error('Error fetching job titles:', error));

    fetch('http://localhost:8800/api/Hr/departments')
      .then(response => response.json())
      .then(data => setDepartments(data))
      .catch(error => console.error('Error fetching departments:', error));

    fetch('http://localhost:8800/api/Hr/pay_grades')
      .then(response => response.json())
      .then(data => setPayGrades(data))
      .catch(error => console.error('Error fetching pay grades:', error));
  }, [id_to_edit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhoneChange = (index, value) => {
    const newPhoneNumbers = [...employee.phone_numbers];
    newPhoneNumbers[index] = value;
    setEmployee(prevState => ({
      ...prevState,
      phone_numbers: newPhoneNumbers
    }));
  };

  const handleDependentChange = (index, field, value) => {
    const newDependents = [...employee.dependents];
    newDependents[index] = {
      ...newDependents[index],
      [field]: value
    };
    setEmployee(prevState => ({
      ...prevState,
      dependents: newDependents
    }));
  };

  const handleEmergencyContactChange = (index, field, value) => {
    const newEmergencyContacts = [...employee.emergency_contacts];
    newEmergencyContacts[index] = {
      ...newEmergencyContacts[index],
      [field]: value
    };
    setEmployee(prevState => ({
      ...prevState,
      emergency_contacts: newEmergencyContacts
    }));
  };

  const addPhoneNumber = () => {
    setEmployee(prevState => ({
      ...prevState,
      phone_numbers: [...prevState.phone_numbers, '']
    }));
  };

  const addDependent = () => {
    setEmployee(prevState => ({
      ...prevState,
      dependents: [...prevState.dependents, { name: '', relation: '', age: '', phone_number: '' }]
    }));
  };
  
  const addEmergencyContact = () => {
    setEmployee(prevState => ({
      ...prevState,
      emergency_contacts: [...prevState.emergency_contacts, { name: '', phone: '', relationship: '' }]
    }));
  };

  const toggleEditable = (field) => {
    setEditableFields(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Employee data to submit:', employee);
    alert('Employee data ready to submit!');
    //give success message here
    // Submit updated employee data to the server
    /*
    fetch(`/api/employees/${id_to_edit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Employee updated:', data);
        setSuccessMessage('Employee data updated successfully!');
        setEmployee(initialEmployeeState); // Clear the form
        setTimeout(() => setSuccessMessage(''), 3000); // Clear the success message after 3 seconds
      })
      .catch(error => console.error('Error updating employee:', error));
      */
  };


  return (
    <div className="edit-employee-container">
      <h1>Edit Employee {id_to_edit} Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          {editableFields.address ? (
            <input
              type="text"
              name="address"
              value={employee.address}
              onChange={handleChange}
            />
          ) : (
            <span>{employee.address}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('address')}>
            {editableFields.address ? 'Save Address' : 'Change Address'}
          </button>
        </label>
        <label>
          Marital State:
          {editableFields.marital_state ? (
            <select
              name="marital_state"
              value={employee.marital_state}
              onChange={handleChange}
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          ) : (
            <span>{employee.marital_state}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('marital_state')}>
            {editableFields.marital_state ? 'Save Marital State' : 'Change Marital State'}
          </button>
        </label>
        <label>
          Job Title:
          {editableFields.job_title ? (
            <select
              name="job_title"
              value={employee.job_title}
              onChange={handleChange}
            >
              {jobTitles.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </select>
          ) : (
            <span>{employee.job_title}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('job_title')}>
            {editableFields.job_title ? 'Save Job Title' : 'Change Job Title'}
          </button>
        </label>
        <label>
          Department:
          {editableFields.department ? (
            <select
              name="department"
              value={employee.department}
              onChange={handleChange}
            >
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
          ) : (
            <span>{employee.department}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('department')}>
            {editableFields.department ? 'Save Department' : 'Change Department'}
          </button>
        </label>
        <label>
          Pay Grade:
          {editableFields.pay_grade ? (
            <select
              name="pay_grade"
              value={employee.pay_grade}
              onChange={handleChange}
            >
              {payGrades.map((grade, index) => (
                <option key={index} value={grade}>{grade}</option>
              ))}
            </select>
          ) : (
            <span>{employee.pay_grade}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('pay_grade')}>
            {editableFields.pay_grade ? 'Save Pay Grade' : 'Change Pay Grade'}
          </button>
        </label>
        <label>
          Phone Numbers:
          {employee.phone_numbers.map((phone, index) => (
            <div key={index}>
              <input
                type="tel"
                value={phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={addPhoneNumber}>Add Phone Number</button>
        </label>
        <label>
          Dependents:
          {employee.dependents.map((dependent, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={dependent.name}
                onChange={(e) => handleDependentChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Relation"
                value={dependent.relation}
                onChange={(e) => handleDependentChange(index, 'relation', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={dependent.phone_number}
                onChange={(e) => handleDependentChange(index, 'phone_number', e.target.value)}
              />
              <input
                type="date"
                placeholder="Birthday"
                value={dependent.birthday}
                onChange={(e) => handleDependentChange(index, 'birthday', e.target.value)}
              />
              
              <br /><br />
            </div>
          ))}
          <button type="button" onClick={addDependent}>Add Dependent</button>
        </label>
        <label>
          Emergency Contacts:
          {employee.emergency_contacts.map((contact, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => handleEmergencyContactChange(index, 'name', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) => handleEmergencyContactChange(index, 'phone', e.target.value)}
              />
              <input
                type="text"
                placeholder="Relationship"
                value={contact.relationship}
                onChange={(e) => handleEmergencyContactChange(index, 'relationship', e.target.value)}
              />
              <br /><br />
            </div>
          ))}
          <button type="button" onClick={addEmergencyContact}>Add Emergency Contact</button>
        </label>
        
        
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditemployeeData;