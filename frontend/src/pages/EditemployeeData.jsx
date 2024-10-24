import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditemployeeData.css'; // Import the CSS file
import axiosInstance from '../utils/AxiosInstance';
//import {handleDeleteDependent,handleDeleteEmergencyContact} from '../components/EditemployeeDataComponents';

const EditemployeeData = () => {
  const { id_to_edit } = useParams();
  const [deletedEmergencyContacts, setDeletedEmergencyContacts] = useState([]);
  const [deletedDependents, setDeletedDependents] = useState([]);
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
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch employee data from the server
        const employeeResponse = await axiosInstance.get(`/auth/Hr/employees/${id_to_edit}`);
        setEmployee(employeeResponse.data);

        // Fetch job titles, departments, and pay grades from the server
        const jobTitlesResponse = await axiosInstance.get('/auth/Hr/JobTitles');
        setJobTitles(jobTitlesResponse.data);

        const departmentsResponse = await axiosInstance.get('/auth/Hr/departments');
        setDepartments(departmentsResponse.data);

        const payGradesResponse = await axiosInstance.get('/auth/Hr/pay_grades');
        setPayGrades(payGradesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [id_to_edit]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
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
    const updatedDependents = [...employee.dependents];
    updatedDependents[index][field] = value;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      dependents: updatedDependents,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm('Are you sure you want to make these changes?');
    if (!isConfirmed) {
      return;
    }
    try {
      // Update employee data
      //await axiosInstance.put(`/auth/Hr/employees/${id_to_edit}`, employee);

      // Delete dependents
      for (const dependent of deletedDependents) {
        await axiosInstance.delete('/auth/Hr/dependents', { data: { employee_id: id_to_edit, name: dependent.name } });
      }

      // Delete emergency contacts
      
      for (const contact of deletedEmergencyContacts) {
        await axiosInstance.delete('/auth/Hr/emergency_contacts', { data: { employee_id: id_to_edit, contact_id: contact.contact_id } });
      }
      /*
      // Delete phone numbers
      for (const phone_number of deletedPhoneNumbers) {
        await axiosInstance.delete('/auth/Hr/phone_numbers', { data: { employee_id: id_to_edit, phone_number } });
      }
        */

      console.log("Employee data updated successfully");
    } catch (error) {
      console.error("There was an error updating the employee data!", error);
      setError("There was an error updating the employee data!");
    }
  };




  const handleDeleteDependent = (index) => {
    const dependent = employee.dependents[index];
    setDeletedDependents((prevDeleted) => [...prevDeleted, dependent]);
    const updatedDependents = employee.dependents.filter((_, i) => i !== index);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      dependents: updatedDependents,
    }));
  };

  const handleDeleteEmergencyContact = (index) => {
    const contact = employee.emergency_contacts[index];
    setDeletedEmergencyContacts((prevDeleted) => [...prevDeleted, contact]);
    const updatedEmergencyContacts = employee.emergency_contacts.filter((_, i) => i !== index);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      emergency_contacts: updatedEmergencyContacts,
    }));
  };

  const handleDeletePhoneNumber = (phone_number) => {
    setDeletedPhoneNumbers((prevDeleted) => [...prevDeleted, phone_number]);
    const updatedPhoneNumbers = employee.phone_numbers.filter(number => number !== phone_number);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      phone_numbers: updatedPhoneNumbers,
    }));
  };

  
  


  return (
    <div className="edit-employee-container">
      <h1>Edit {employee.name}' Data</h1>
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
              value={employee.job_title || ''}
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
                value={dependent.relationship}
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
                value={formatDate(dependent.birthday)}
                onChange={(e) => handleDependentChange(index, 'birthday', e.target.value)}
              />
              <button type="button" onClick={() => handleDeleteDependent(index, employee, setEmployee, setDeletedDependents)}>Delete Dependent</button>

              
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
              <button type="button" onClick={() => handleDeleteEmergencyContact(index, employee, setEmployee, setDeletedEmergencyContacts)}>Delete This Contact</button>
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