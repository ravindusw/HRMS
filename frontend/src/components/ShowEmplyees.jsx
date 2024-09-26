import React, { useState } from 'react';

import '../pages/EIM.css';


// untill data get from backend



const ShowEmplyees=({initialEmployees})=>{
    const [employees, setEmployees] = useState(initialEmployees);
    const [currentPage, setCurrentPage] = useState(1);
    const handleDelete = (id) => {
      const userConfirm = window.confirm('Are you sure you want to delete this employee?');
      if(userConfirm){
        
        setEmployees(employees.filter(employee => employee.id !== id));
        
        }
      
    };
  
    
  
  
  
    const handleView = (id) => {
      const employee = employees.find(emp => emp.id === id);
      alert(`Viewing details of ${employee.name}`);
    };
  
    const handleEdit = (id) => {
      const employee = employees.find(emp => emp.id === id);
      alert(`Editing details of ${employee.name}`);
    };
  
  
  
    const rowsPerPage = 10; // only 10 employees per page
  
    const totalPages = Math.ceil(employees.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentEmployees = employees.slice(startIndex, endIndex);
  
    const ShowPrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const ShowNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    return(
      <div>
        <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Job Title</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.job}</td>
              <td>{employee.email}</td>
              <td className="action-buttons">
                <button className="btn-view" onClick={() => handleView(employee.id)}>View</button>
                <button className="btn-edit" onClick={() => handleEdit(employee.id)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="nav">
        <button onClick={ShowPrevious} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={ShowNext} disabled={currentPage === totalPages}>Next</button>
      </div>
      </div>
    )
  
  }
  
  export default  ShowEmplyees;