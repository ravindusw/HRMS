import React, { useState,useEffect } from 'react';
import './EIM.css';
import ShowEmployees from '../components/ShowEmplyees.jsx';

const initialEmployees = [
  { id: 'EMP0002', name: 'Jane Smith', gender: 'Female', job: 'Software Engineer', email: 'jane.smith@gmail.com' },
  { id: 'EMP0003', name: 'Michael Johnson', gender: 'Male', job: 'Accountant', email: 'michael.johnson@gmail.com' },
  { id: 'EMP0004', name: 'Emily Davis', gender: 'Female', job: 'QA Engineer', email: 'emily.davis@gmail.com' },
  { id: 'EMP0005', name: 'David Wilson', gender: 'Male', job: 'Data Scientist', email: 'david.wilson@gmail.com' },
  { id: 'EMP0006', name: 'Sophia Brown', gender: 'Female', job: 'UX Designer', email: 'sophia.brown@gmail.com' },
  { id: 'EMP0007', name: 'James Taylor', gender: 'Male', job: 'Project Manager', email: 'james.taylor@gmail.com' },
  { id: 'EMP0008', name: 'Olivia Anderson', gender: 'Female', job: 'Marketing Specialist', email: 'olivia.anderson@gmail.com' },
  { id: 'EMP0009', name: 'William Thomas', gender: 'Male', job: 'System Administrator', email: 'william.thomas@gmail.com' },
  { id: 'EMP0010', name: 'Isabella Martinez', gender: 'Female', job: 'Graphic Designer', email: 'isabella.martinez@gmail.com' },
  { id: 'EMP0011', name: 'Ethan Garcia', gender: 'Male', job: 'DevOps Engineer', email: 'ethan.garcia@gmail.com' },
  { id: 'EMP0012', name: 'Ava Rodriguez', gender: 'Female', job: 'Content Writer', email: 'ava.rodriguez@gmail.com' },
  { id: 'EMP0013', name: 'Daniel Lee', gender: 'Male', job: 'Web Developer', email: 'daniel.lee@gmail.com' },
  { id: 'EMP0014', name: 'Mia Perez', gender: 'Female', job: 'Business Analyst', email: 'mia.perez@gmail.com' },
  { id: 'EMP0015', name: 'Lucas White', gender: 'Male', job: 'Network Engineer', email: 'lucas.white@gmail.com' },
  { id: 'EMP0016', name: 'Charlotte Harris', gender: 'Female', job: 'SEO Specialist', email: 'charlotte.harris@gmail.com' },
  { id: 'EMP0017', name: 'Henry Clark', gender: 'Male', job: 'Technical Writer', email: 'henry.clark@gmail.com' },
  { id: 'EMP0018', name: 'Amelia Lewis', gender: 'Female', job: 'HR Manager', email: 'amelia.lewis@gmail.com' },
  { id: 'EMP0019', name: 'Alexander Robinson', gender: 'Male', job: 'Sales Executive', email: 'alexander.robinson@gmail.com' },
  { id: 'EMP0020', name: 'Evelyn Walker', gender: 'Female', job: 'Product Manager', email: 'evelyn.walker@gmail.com' },
  { id: 'EMP0021', name: 'Jack Hall', gender: 'Male', job: 'Financial Analyst', email: 'jack.hall@gmail.com' },
  { id: 'EMP0022', name: 'Ella Young', gender: 'Female', job: 'Operations Coordinator', email: 'ella.young@gmail.com' }
]


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

  
  const [filter, setFilter] = useState("")
  

  

  

  

  const changeFilter = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue)

    event.preventDefault()
    if(inputValue === ""){
      setfilterCountry(initialEmployees)
      console.log("no filter")
    }
    else{
      const subfilterInLowerCase = inputValue.toLowerCase()
    
    setfilterCountry(countries.filter(country => country.name.common.toLowerCase().includes(subfilterInLowerCase)))
    }
    

    
  }


  const ShowSilteredEmployees=()=>{
    return(
      <ShowEmployees initialEmployees={employees}/>
  
    )
  
  }
  




  return (
    <div>
      <header>
        <h1>Employee Information Management</h1>
        <div className="search-filters">
        
        <input id='emp_name' type="text" placeholder="Search..." onChange={changeFilter}/>
        
        <Filterdepartment/>
        <FilterJobTitle/>
        <FilterGenders/>
        
        
      </div>
      </header>
      
      
      <button id="add-employee">Add Employee</button>
      <ShowSilteredEmployees/>
      
      
    </div>
  );
};

// add filter for department




/// filter for sharch names 







export default EmployeeInfoManagement;