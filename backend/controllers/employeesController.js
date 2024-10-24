import { db } from '../config/db.js';


export const getAllEmployees = (req, res) => {
    const query = 'CALL GetEmployeeList()';

    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching employee list:", err);
        return res.status(500).send("Server error");
      }
  
      res.status(200).json(results[0]);
    });
  };

    export const getEmployeeByIdForHr = (req, res) => {
        const employeeId = req.params.id;

        const employeeQuery = 'CALL GetEmployeeDataForView(?)';
        const dependentQuery = 'CALL GetDependentDetails(?)';
        const emergencyContactQuery = 'CALL GetEmergencyContacts(?)';
      
      
        db.query(employeeQuery, [employeeId], (err, employeeResults) => {
          if (err) {
            console.error("Error fetching employee data:", err);
            return res.status(500).send("Server error");
          }
      
          if (employeeResults[0].length === 0) {
            return res.status(404).send("Employee not found");
          }
      
          const employee = {
            id: employeeResults[0][0].id,
            name: employeeResults[0][0].name,
            NIC: employeeResults[0][0].NIC,
            username: employeeResults[0][0].username,
            birthday: employeeResults[0][0].birthday,
            gender: employeeResults[0][0].gender,
            job_title_id: employeeResults[0][0].job_title_id,
            job_title: employeeResults[0][0].job_title,
            pay_grade_id: employeeResults[0][0].pay_grade_id,
            pay_grade: employeeResults[0][0].pay_grade,
            dept_id: employeeResults[0][0].dept_id,
            department: employeeResults[0][0].department,
            branch: employeeResults[0][0].branch,
            hired_date: employeeResults[0][0].hired_date,
            employment_status: employeeResults[0][0].employment_status,
            marital_state: employeeResults[0][0].marital_state,
            email: employeeResults[0][0].email,
            address: employeeResults[0][0].address,
            supervisor_name: employeeResults[0][0].supervisor_name,
            phone_numbers: [],
            dependents: [],
            emergency_contacts: []
          };
      
          employeeResults[0].forEach(row => {
            if (row.phone_number) {
              employee.phone_numbers.push(row.phone_number);
            }
          });
      
          db.query(dependentQuery, [employeeId], (err, dependentResults) => {
            if (err) {
              console.error("Error fetching dependent data:", err);
              return res.status(500).send("Server error");
            }
            //console.log(dependentResults)
      
            dependentResults[0].forEach(row => {
              employee.dependents.push({
                name: row.dependent_name,
                date_of_birth: row.dependent_birthday,
                gender: row.dependent_gender,
                phone_number: row.dependent_phone_number,
                relationship: row.relationship
              });
            });
      
            db.query(emergencyContactQuery, [employeeId], (err, emergencyContactResults) => {
              if (err) {
                console.error("Error fetching emergency contact data:", err);
                return res.status(500).send("Server error");
              }
      
              if (Array.isArray(emergencyContactResults[0])) {
                emergencyContactResults[0].forEach(row => {
                  employee.emergency_contacts.push({
                    name: row.name,
                    contact_id: row.contact_id,
                    phone: row.phone,
                    relationship: row.relationship
                  });
                });
              }
      
              //console.log(employee);
              res.status(200).json(employee);
            });
          });
        });
      };

  