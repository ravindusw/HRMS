import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EIM.css";
import axiosInstance from "../utils/AxiosInstance.jsx";
import ShowEmployees from "../components/ShowEmplyees.jsx";



// functions for filters



const EmployeeInfoManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setdepartments] = useState([]);
  const [JobTitles, setJobTitles] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedJobTitle, setSelectedJobTitle] = useState('All Job Titles');
  const [selectedGender, setSelectedGender] = useState('All Genders');

  const [filter, setFilter] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    axiosInstance.get('/auth/Hr/employees')
      .then(response => {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });

    axiosInstance.get('/auth/Hr/departments')
      .then(response => {
        const departments = response.data.map(department => department.name);
        setdepartments(['All Departments', ...departments]);
      })
      .catch(error => {
        console.error('There was an error fetching the departments!', error);
      });

      axiosInstance.get('/auth/Hr/JobTitles')
      .then(response => {
        const titles = response.data.map(job => job.title);
        setJobTitles(['All Job Titles', ...titles]);
      })
      .catch(error => {
        console.error('There was an error fetching the JobTitles!', error);
      });
  }, []);

  useEffect(() => {
    filterEmployees();
  }, [selectedDepartment, selectedJobTitle, selectedGender]);

  const filterEmployees = () => {
    let filtered = employees;

    if (selectedDepartment !== 'All Departments') {
      filtered = filtered.filter(employee => employee.department === selectedDepartment);
    }

    if (selectedJobTitle !== 'All Job Titles') {
      console.log("sdrtykl")
      filtered = filtered.filter(employee => employee.job === selectedJobTitle);
    }

    if (selectedGender !== 'All Genders') {
      filtered = filtered.filter(employee => employee.gender === selectedGender);
    }

    setFilteredEmployees(filtered);
  };
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setSelectedJobTitle(e.target.value);
    console.log(e.target.value)
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleEmployeeClick = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };



  const changeFilter = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);

    event.preventDefault();
    const subfilterInLowerCase = inputValue.toLowerCase();

      setFilteredEmployees(
        employees.filter((Emplooyee) =>
          Emplooyee.name.toLowerCase().includes(subfilterInLowerCase)
        )
      );
  };

  const ShowSilteredEmployees = () => {
    return <ShowEmployees initialEmployees={filteredEmployees} />;
  };
  
  
  const Filterdepartment = (departments) => {
    return (
      <select>
        {departments.map((department) => (
          <option key={department}>{department}</option>
        ))}
      </select>
    );
  };
  const FilterJobTitle = (JobTitles) => {
    return (
      <select>
        {JobTitles.map((JobTitle) => (
          <option key={JobTitle}>{JobTitle}</option>
        ))}
      </select>
    );
  };
  
  const FilterGenders = () => {
    const genders = ["All Genders", "Male", "Female", "Others"];
    return (
      <select>
        {genders.map((gender) => (
          <option key={gender}>{gender}</option>
        ))}
      </select>
    );
  };

  return (
    <div className="header-container">
      <header>
        <h1>Employee Information Management</h1>
        <div className="search-filters">
          <input
            id="emp_name"
            type="text"
            placeholder="Search Name..."
            onChange={changeFilter}
            value={filter}
          />
          <select onChange={handleJobTitleChange} value={selectedJobTitle}>
            {JobTitles.map(jobTitle => (
              <option key={jobTitle} value={jobTitle}>{jobTitle}</option>
            ))}
          </select>

          <select onChange={handleDepartmentChange} value={selectedDepartment}>
            {departments.map(department => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
          
          <select onChange={handleGenderChange} value={selectedGender}>
            {['All Genders', 'Male', 'Female', 'Others'].map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </header>

      {/*<button id="add-employee" onClick={() => handleAddNewEmployeeButtonClick()}>Add Employee</button> */}
      <ShowSilteredEmployees />
    </div>
  );
};

// add filter for department

/// filter for sharch names

export default EmployeeInfoManagement;
