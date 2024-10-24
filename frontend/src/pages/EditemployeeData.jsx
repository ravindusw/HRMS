import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditemployeeData.css'; // Import the CSS file
import axiosInstance from '../utils/AxiosInstance';
//import {handleDeleteDependent,handleDeleteEmergencyContact} from '../components/EditemployeeDataComponents';

const EditemployeeData = () => {
  const { id_to_edit } = useParams();
  const [EmergencyContacts, setEmergencyContacts] = useState([]);
  const [Dependents, setDependents] = useState([]);
  const [PhoneNumbers, setPhoneNumbers] = useState([]);
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
    emergency_contacts: [],
    employment_status: ''
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
        setEmergencyContacts(employeeResponse.data.emergency_contacts);
        setDependents(employeeResponse.data.dependents);
        setPhoneNumbers(employeeResponse.data.phone_numbers);

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

  const handlePhoneChange = (number, value) => {
    const newPhoneNumbers = [...employee.phone_numbers];
    
    const updatedPhoneNumbers = newPhoneNumbers.map(phone => phone === number ? value : phone);
    setEmployee(prevState => ({
      ...prevState,
      phone_numbers: updatedPhoneNumbers
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
      dependents: [...prevState.dependents, { name: '', relationship: '', age: '', phone_number: '' }]
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
    console.log(employee);

    try {
      // Update employee data
      await axiosInstance.put(`/auth/Hr/employees/${id_to_edit}`, employee);

      
      alert("Employee data updated successfully");
      console.log("Employee data updated successfully");
    } catch (error) {
      console.error("There was an error updating the employee data!", error);
      setError("There was an error updating the employee data!");
    }
  };




  const handleDeleteDependent = (name) => {
    const updatedDependents = Dependents.filter(dependent => dependent.name !== name);
    
    setDependents(updatedDependents)
    setEmployee(prevState => ({
      ...prevState,
      dependents: updatedDependents
    }));
  };

  const handleDeleteEmergencyContact = (name) => {
    
    const updatedEmergencyContacts = EmergencyContacts.filter(contact => contact.name !== name);
    setEmergencyContacts(updatedEmergencyContacts)
    setEmployee(prevState => ({
      ...prevState,
      emergency_contacts: updatedEmergencyContacts
    }));
  };

  const handleDeletePhoneNumber = (phone_number) => {
    
    const updatedPhoneNumbers = PhoneNumbers.filter(phone => phone !== phone_number);
    setPhoneNumbers(updatedPhoneNumbers)
    setEmployee(prevState => ({
      ...prevState,
      phone_numbers: updatedPhoneNumbers
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
          {PhoneNumbers.map((phone, index) => (
            <div key={index}>
              <input
                type="tel"
                value={phone}
                onChange={(e) => handlePhoneChange(phone, e.target.value)}
              />
              <button type="button" onClick={() => handleDeletePhoneNumber(phone)}>Delete Number</button>
            </div>
          ))}
          <button type="button" onClick={addPhoneNumber}>Add Phone Number</button>
        </label>
        <label>
          Dependents:
          {Dependents.map((dependent, index) => (
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
                onChange={(e) => handleDependentChange(index, 'relationship', e.target.value)}
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
              <button type="button" onClick={() => handleDeleteDependent(dependent.name)}>Delete Dependent</button>

              
              <br /><br />
            </div>
          ))}
          <button type="button" onClick={addDependent}>Add Dependent</button>
        </label>
        <label>
          Emergency Contacts:
          {EmergencyContacts.map((contact, index) => (
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
                placeholder="relationship"
                value={contact.relationship}
                onChange={(e) => handleEmergencyContactChange(index, 'relationship', e.target.value)}
              />
              <button type="button" onClick={() => handleDeleteEmergencyContact(contact.name)}>Delete This Contact</button>
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