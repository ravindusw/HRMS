import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditemployeeData.css'; // Import the CSS file
import axiosInstance from '../utils/AxiosInstance';
//import {handleDeleteDependent,handleDeleteEmergencyContact} from '../components/EditemployeeDataComponents';

const EditemployeeData = () => {
  const { id_to_edit } = useParams();
  
  const [employee, setEmployee] = useState(null);

  

  const [jobTitles, setJobTitles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [payGrades, setPayGrades] = useState([]);
  const [employmentStatus, setEmploymentStats] = useState([]);
  const [editableFields, setEditableFields] = useState({
    address: false,
    marital_state: false,
    job_title: false,
    department: false,
    pay_grade: false,
    birthday: false,
    NIC: false,
    first_name: false,
    last_name: false
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch employee data from the server
        const employeeResponse = await axiosInstance.get(`/auth/Hr/employees/${id_to_edit}`);
        setEmployee(employeeResponse.data);
        //console.log(employeeResponse.data)
        

        // Fetch job titles, departments, and pay grades from the server
        const jobTitlesResponse = await axiosInstance.get('/auth/Hr/JobTitles');
        setJobTitles(jobTitlesResponse.data);

        const departmentsResponse = await axiosInstance.get('/auth/Hr/departments');
        setDepartments(departmentsResponse.data);

        const payGradesResponse = await axiosInstance.get('/auth/Hr/pay_grades');
        setPayGrades(payGradesResponse.data);
        //console.log(payGradesResponse.data);
        const employmentStatsResponse = await axiosInstance.get('/auth/Hr/employmentStats');
        setEmploymentStats(employmentStatsResponse.data);
        //console.log(employmentStatsResponse.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [id_to_edit]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };



  if (!employee) {
    return <div>Loading...</div>;
  }




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
    newEmergencyContacts[index][field]= value
    
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
      dependents: [...prevState.dependents, { name: '', relationship: '', date_of_birth: '',gender: '', phone_number: '' }]
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
    //console.log(employee);

    const employeeChanges = {
      first_name: employee.first_name,
      last_name: employee.last_name,
      NIC: employee.NIC,
      birthday: employee.birthday,
      dept_id: employee.dept_id,
      job_title_id: employee.job_title_id,
      pay_grade_id: employee.pay_grade_id,
      employment_state_id: employee.employment_state_id,
      address: employee.address,
      marital_state: employee.marital_state,
      phone_numbers: employee.phone_numbers,
      dependents: employee.dependents,
      emergency_contacts: employee.emergency_contacts

      
    };
    //console.log(employeeChanges);
    
    try {
      // Update employee data
      
      await axiosInstance.put(`/auth/Hr/employees/${id_to_edit}`, employeeChanges);

      
      alert("Employee data updated successfully");
      console.log("Employee data updated successfully");
    } catch (error) {
      console.error("There was an error updating the employee data!", error);
      setError("There was an error updating the employee data!");
    }
      
  };




  const handleDeleteDependent = (name) => {
    const updatedDependents = employee.dependents.filter(dependent => dependent.name !== name);
    
    
    setEmployee(prevState => ({
      ...prevState,
      dependents: updatedDependents
    }));
  };

  const handleDeleteEmergencyContact = (name) => {
    
    const updatedEmergencyContacts = employee.emergency_contacts.filter(contact => contact.name !== name);
    
    setEmployee(prevState => ({
      ...prevState,
      emergency_contacts: updatedEmergencyContacts
    }));
  };

  const handleDeletePhoneNumber = (phone_number) => {
    
    const updatedPhoneNumbers = employee.phone_numbers.filter(phone => phone !== phone_number);
    
    setEmployee(prevState => ({
      ...prevState,
      phone_numbers: updatedPhoneNumbers
    }));
  };
  const handleDepartmentChange = (e) => {
    const selectedDept = departments.find(dept => dept.dept_id === e.target.value);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      dept_id: selectedDept.dept_id
    }));
  };

  const handleJobTitleChange = (e) => {
    const selectedJobTitle = jobTitles.find(job => job.job_title_id === e.target.value);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      job_title_id: selectedJobTitle.job_title_id
    }));
  };



  const handlePayGradeChange = (e) => {
    const selectedPayGrade = payGrades.find(grade => grade.pay_grade_id === e.target.value);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      pay_grade_id: selectedPayGrade.pay_grade_id
    }));
  };

  const handleEmploymentStatusChange= (e) => {
    const selectedEmploymentStatus = employmentStatus.find(status => status.employment_state_id === e.target.value);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      employment_state_id: selectedEmploymentStatus.employment_state_id
    }));
  }

  const handleBirthdayChange = (e) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      birthday: e.target.value
    }));
  }

  const handleNICChange = (e) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      NIC: e.target.value
    }));
  }
  const handleFirstNameChange = (e) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      first_name: e.target.value
    }));
  }

  const handleLastNameChange = (e) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      last_name: e.target.value
    }));
  }

  
  


  return (
    <div className="edit-employee-container">
      <h1>Edit {employee.name}'s Data</h1>
      <form onSubmit={handleSubmit}>


      <label>
          First Name:
          {editableFields.first_name ? (
            <input
              type="text"
              name="first_name"
              value={employee.first_name}
              onChange={handleFirstNameChange}
            />
          ) : (
            <span>{employee.first_name}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('first_name')}>
            {editableFields.first_name ? 'Save First Name' : 'Change First Name'}
          </button>
        </label>

        <label>
          Last Name:
          {editableFields.last_name ? (
            <input
              type="text"
              name="last_name"
              value={employee.last_name}
              onChange={handleLastNameChange}
            />
          ) : (
            <span>{employee.last_name}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('last_name')}>
            {editableFields.last_name ? 'Save Last Name' : 'Change Last Name'}
          </button>
        </label>

      <label>
          NIC:
          {editableFields.NIC ? (
            <input
              type="text"
              name="NIC"
              value={employee.NIC}
              onChange={handleNICChange}
            />
          ) : (
            <span>{employee.NIC}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('NIC')}>
            {editableFields.NIC ? 'Save NIC' : 'Change NIC'}
          </button>
        </label>
      <label>
          Birthday:
          {editableFields.birthday ? (
            <input
              type="date"
              name="birthday"
              value={employee.birthday}
              onChange={handleBirthdayChange}
            />
          ) : (
            <span>{employee.birthday}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('birthday')}>
            {editableFields.birthday ? 'Save Birthday' : 'Change Birthday'}
          </button>
        </label>
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
              value={employee.job_title_id}
              onChange={handleJobTitleChange}
            >
              {jobTitles.map((jobTitle) => (
                <option key={jobTitle.job_title_id} value={jobTitle.job_title_id}>{jobTitle.title}</option>
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
              value={employee.department_id}
              onChange={handleDepartmentChange}
            >
              {departments.map((department) => (
                <option key={department.dept_id} value={department.dept_id}>{department.name}</option>
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
              value={employee.pay_grade_id}
              onChange={handlePayGradeChange}
            >
              {payGrades.map((payGrade) => (
                <option key={payGrade.pay_grade_id} value={payGrade.pay_grade_id}>{payGrade.name}</option>
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
        Employment Status:
          {editableFields.employment_status ? (
            <select
              name="employment_status"
              value={employee.employment_state_id}
              onChange={handleEmploymentStatusChange}
            >
              {employmentStatus.map((status) => (
                <option key={status.employment_state_id} value={status.employment_state_id}>{status.employment_status}</option>
              ))}
            </select>
          ) : (
            <span>{employee.employment_status}</span>
          )}
          <button type="button" className="change-button" onClick={() => toggleEditable('employment_status')}>
            {editableFields.employment_status ? 'Save employment Status' : 'Change employment Status'}
          </button>
        </label>



        <label>
          Phone Numbers:
          {employee.phone_numbers.map((phone, index) => (
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
                placeholder="Gender"
                value={dependent.gender}
                onChange={(e) => handleDependentChange(index, 'gender', e.target.value)}
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
                value={dependent.date_of_birth}
                onChange={(e) => handleDependentChange(index, 'date_of_birth', e.target.value)}
              />
              <button type="button" onClick={() => handleDeleteDependent(dependent.name)}>Delete Dependent</button>

              
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