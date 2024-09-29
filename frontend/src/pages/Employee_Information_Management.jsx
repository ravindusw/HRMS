import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EIM.css';
import ShowEmployees from '../components/ShowEmplyees.jsx';

const initialEmployees = [
  { id: 'EMP0002', name: 'Jane Smith', gender: 'Female', job: 'Software Engineer', email: 'jane.smith@gmail.com', dependents: null },
  { id: 'EMP0003', name: 'Michael Johnson', gender: 'Male', job: 'Accountant', email: 'michael.johnson@gmail.com', dependents: [{ name: 'Emma Johnson', relation: 'Daughter', age: 5 }] },
  { id: 'EMP0004', name: 'Emily Davis', gender: 'Female', job: 'QA Engineer', email: 'emily.davis@gmail.com', dependents: null },
  { id: 'EMP0005', name: 'David Wilson', gender: 'Male', job: 'Data Scientist', email: 'david.wilson@gmail.com', dependents: [{ name: 'Noah Wilson', relation: 'Son', age: 7 }] },
  { id: 'EMP0006', name: 'Sophia Brown', gender: 'Female', job: 'UX Designer', email: 'sophia.brown@gmail.com', dependents: null },
  { id: 'EMP0007', name: 'James Taylor', gender: 'Male', job: 'Project Manager', email: 'james.taylor@gmail.com', dependents: [{ name: 'Lily Taylor', relation: 'Daughter', age: 3 }] },
  { id: 'EMP0008', name: 'Olivia Anderson', gender: 'Female', job: 'Marketing Specialist', email: 'olivia.anderson@gmail.com', dependents: null },
  { id: 'EMP0009', name: 'William Thomas', gender: 'Male', job: 'System Administrator', email: 'william.thomas@gmail.com', dependents: [{ name: 'Benjamin Thomas', relation: 'Son', age: 8 }, { name: 'Sophia Thomas', relation: 'Daughter', age: 6 }] },
  { id: 'EMP0010', name: 'Isabella Martinez', gender: 'Female', job: 'Graphic Designer', email: 'isabella.martinez@gmail.com', dependents: null },
  { id: 'EMP0011', name: 'Ethan Garcia', gender: 'Male', job: 'DevOps Engineer', email: 'ethan.garcia@gmail.com', dependents: [{ name: 'Olivia Garcia', relation: 'Daughter', age: 4 }] },
  { id: 'EMP0012', name: 'Ava Rodriguez', gender: 'Female', job: 'Content Writer', email: 'ava.rodriguez@gmail.com', dependents: null },
  { id: 'EMP0013', name: 'Daniel Lee', gender: 'Male', job: 'Web Developer', email: 'daniel.lee@gmail.com', dependents: [{ name: 'Lucas Lee', relation: 'Son', age: 10 }] },
  { id: 'EMP0014', name: 'Mia Perez', gender: 'Female', job: 'Business Analyst', email: 'mia.perez@gmail.com', dependents: null },
  { id: 'EMP0015', name: 'Lucas White', gender: 'Male', job: 'Network Engineer', email: 'lucas.white@gmail.com', dependents: [{ name: 'Ella White', relation: 'Daughter', age: 2 }] },
  { id: 'EMP0016', name: 'Charlotte Harris', gender: 'Female', job: 'SEO Specialist', email: 'charlotte.harris@gmail.com', dependents: null },
  { id: 'EMP0017', name: 'Henry Clark', gender: 'Male', job: 'Technical Writer', email: 'henry.clark@gmail.com', dependents: [{ name: 'Amelia Clark', relation: 'Daughter', age: 7 }, { name: 'Jack Clark', relation: 'Son', age: 5 }] },
  { id: 'EMP0018', name: 'Amelia Lewis', gender: 'Female', job: 'HR Manager', email: 'amelia.lewis@gmail.com', dependents: null },
  { id: 'EMP0019', name: 'Alexander Robinson', gender: 'Male', job: 'Sales Executive', email: 'alexander.robinson@gmail.com', dependents: [{ name: 'Isabella Robinson', relation: 'Daughter', age: 6 }] },
  { id: 'EMP0020', name: 'Evelyn Walker', gender: 'Female', job: 'Product Manager', email: 'evelyn.walker@gmail.com', dependents: null },
  { id: 'EMP0021', name: 'Jack Hall', gender: 'Male', job: 'Financial Analyst', email: 'jack.hall@gmail.com', dependents: [{ name: 'Sophia Hall', relation: 'Daughter', age: 12 }] },
  { id: 'EMP0022', name: 'Ella Young', gender: 'Female', job: 'Operations Coordinator', email: 'ella.young@gmail.com', dependents: null }
];



// functions for filters

const Filterdepartment=()=>{
    const departments=['All Departments','...']
    return(
        <select>
        {departments.map((department)=>(
            <option key={department}>{department}</option>
        ))}
        </select>
    )

}
const FilterJobTitle=()=>{
    const JobTitles=['All Job Titles','HR Manager','Accountant',' Software Engineer',' QA Engineer']
    return(
        <select>
        {JobTitles.map((JobTitle)=>(
            <option key={JobTitle}>{JobTitle}</option>
        ))}
        </select>
    )

}

const FilterGenders=()=>{
    const genders=['All Genders','male','female','others']
    return(
        <select>
        {genders.map((gender)=>(
            <option key={gender}>{gender}</option>
        ))}
        </select>
    )

}




  






const EmployeeInfoManagement = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [filterEmplooyees, setfilterEmplooyees] = useState(employees);

  
  const [filter, setFilter] = useState("")
  const navigate = useNavigate();

  

  

  

  const changeFilter = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue)

    event.preventDefault()
    if(inputValue === "" ){
      setfilterEmplooyees(employees)
      //console.log("no filter")
    }
    else{
      const subfilterInLowerCase = inputValue.toLowerCase()
    
      setfilterEmplooyees(employees.filter(Emplooyee => Emplooyee.name.toLowerCase().includes(subfilterInLowerCase)))
    }
    

    
  }


  const ShowSilteredEmployees=()=>{
    return(
      <ShowEmployees initialEmployees={filterEmplooyees}/>
  
    )
  
  }
  const handleAddNewEmployeeButtonClick=()=>{
    const userConfirm = window.confirm('Are you sure you want to add new employee?');
      if(userConfirm){
        
        
        
        navigate('/Employee_Information_Management/AddEmployee');
        
        
        }
  }
  




  return (
    <div>
      <header>
        <h1>Employee Information Management</h1>
        <div className="search-filters">
        
        <input id='emp_name' type="text" placeholder="Search..." onChange={changeFilter} value={filter}/>
        
        <Filterdepartment/>
        <FilterJobTitle/>
        <FilterGenders/>
        
        
      </div>
      </header>
      
      
      <button id="add-employee" onClick={() => handleAddNewEmployeeButtonClick()}>Add Employee</button>
      <ShowSilteredEmployees/>
      
      
    </div>
  );
};

// add filter for department




/// filter for sharch names 







export default EmployeeInfoManagement;