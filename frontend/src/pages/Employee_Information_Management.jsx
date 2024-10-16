import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EIM.css";
import ShowEmployees from "../components/ShowEmplyees.jsx";

import axios from "axios";

// functions for filters

const Filterdepartment = () => {
  const departments = ["All Departments", "..."];
  return (
    <select>
      {departments.map((department) => (
        <option key={department}>{department}</option>
      ))}
    </select>
  );
};
const FilterJobTitle = () => {
  const JobTitles = [
    "All Job Titles",
    "HR Manager",
    "Accountant",
    " Software Engineer",
    " QA Engineer",
  ];
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

  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/getemployeesForEIM")
      .then((response) => {
        setEmployees(response.data);
        setFilterEmployees(response.data); // Update filterEmployees when employees are fetched
        //console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
      });
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
    <div>
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

          <Filterdepartment />
          <FilterJobTitle />
          <FilterGenders />
        </div>
      </header>

      <button
        id="add-employee"
        onClick={() => handleAddNewEmployeeButtonClick()}
      >
        Add Employee
      </button>
      <ShowSilteredEmployees />
    </div>
  );
};

// add filter for department

/// filter for sharch names

export default EmployeeInfoManagement;
