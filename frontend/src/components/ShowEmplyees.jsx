import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../pages/EIM.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// untill data get from backend



const ShowEmplyees=({initialEmployees})=>{
    const [employees, setEmployees] = useState(initialEmployees);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();




    const handleDelete = (id) => {
      const userConfirm = window.confirm('Are you sure you want to delete this employee?');
      if(userConfirm){
        
        setEmployees(employees.filter(employee => employee.id !== id));
        
        }
      
    };
  
    
  
  
  
    
    const handleViewButtonClick = (id) => {
      const id_to_view=id;
      navigate(`/Employee_Information_Management/HrView/${id_to_view}`);
    };

  
    const handleEdit = (id) => {
      
      const userConfirm = window.confirm('Are you sure you want to edit this employee?');
      if(userConfirm){
        
        
        
        //alert(`Editing details of ${employee.name}`);
        const id_to_edit=id;
        navigate(`/Employee_Information_Management/EditemployeeData/${id_to_edit}`);
        
        
        }
      
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
  
    return (
      <div className="container mt-4">
        <div className="mb-3">{employees.length} results</div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{employee.department}</td>
                <td>{employee.gender}</td>
                <td>{employee.email}</td>
                <td className="action-buttons">
                  <button className="btn btn-primary btn-sm mr-2" onClick={() => handleViewButtonClick(employee.id)}>View</button>
                  <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEdit(employee.id)}>Edit</button>
                  {/* <button className="btn btn-danger btn-sm" onClick={() => handleDelete(employee.id)}>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary btn-sm mr-2" onClick={ShowPrevious} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button className="btn btn-primary btn-sm mr-2" onClick={ShowNext} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    );
  };
  export default  ShowEmplyees;

