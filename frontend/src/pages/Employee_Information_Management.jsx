import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EIM.css";
import ShowEmployees from "../components/ShowEmplyees.jsx";

import axios from "axios";

// functions for filters

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
  const genders = ["All Genders", "male", "female", "others"];
  return (
    <select>
      {genders.map((gender) => (
        <option key={gender}>{gender}</option>
      ))}
    </select>
  );
};

const EmployeeInfoManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [filterEmplooyees, setFilterEmployees] = useState([]);
  const [departments, setdepartments] = useState(['All departments']);
  const [JobTitles, setJobTitles] = useState(['All Job Titles']);

  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/Hr/auth/employees")
      .then((response) => {
        setEmployees(response.data);
        setFilterEmployees(response.data); // Update filterEmployees when employees are fetched
        //console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
      });
  }, []);

  // get departments from backend
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/Hr/auth/departments"
        );
        setdepartments(departments.concat(response.data));
        //console.log(response.data);
      } catch (error) {
        console.error("There was an error fetching the departments!", error);
      }
    };

    fetchDepartments();
  }, []);

  // get JobTitles from backend
  useEffect(() => {
    const fetchJobTitles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/Hr/auth/JobTitles"
        );
        setJobTitles(JobTitles.concat(response.data));
        //console.log(response.data);
      } catch (error) {
        console.error("There was an error fetching the JobTitles!", error);
      }
    };

    fetchJobTitles();
  }, []);

  const changeFilter = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);

    event.preventDefault();
    if (inputValue === "") {
      setFilterEmployees(employees);
      //console.log("no filter")
    } else {
      const subfilterInLowerCase = inputValue.toLowerCase();

      setFilterEmployees(
        employees.filter((Emplooyee) =>
          Emplooyee.name.toLowerCase().includes(subfilterInLowerCase)
        )
      );
    }
  };

  const ShowSilteredEmployees = () => {
    return <ShowEmployees initialEmployees={filterEmplooyees} />;
  };
  const handleAddNewEmployeeButtonClick = () => {
    const userConfirm = window.confirm(
      "Are you sure you want to add new employee?"
    );
    if (userConfirm) {
      navigate("/Employee_Information_Management/AddEmployee");
    }
  };

  return (
    <div className="header-container">
      <header>
        <h1>Employee Information Management</h1>
        <div className="search-filters">
          <input
            id="emp_name"
            type="text"
            placeholder="Search..."
            onChange={changeFilter}
            value={filter}
          />

          {Filterdepartment(departments)}
          {FilterJobTitle(JobTitles)}
          <FilterGenders />
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
