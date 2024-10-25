
import { db } from '../config/db.js';

export const updateEmployeeData = (req, res) => {
  const employeeId = req.params.id;
  const {first_name,last_name,NIC, birthday,dept_id, job_title_id, pay_grade_id,employment_state_id, address, marital_state,phone_numbers,dependents,emergency_contacts } = req.body;
  console.log( req.body);
  
  
  const query1 = `
    UPDATE employee
    SET first_name = ? ,last_name = ?,NIC = ?,date_of_birth = ?, dept_id = ?, job_title_id = ?, pay_grade_id = ?,employment_state_id=?, address = ?, marital_state = ?
    WHERE employee_id = ?
  `;

  const values = [first_name,last_name,NIC, birthday,dept_id, job_title_id, pay_grade_id,employment_state_id, address, marital_state, employeeId];

  db.query(query1, values, (err, results) => {
    if (err) {
      console.error('Error updating employee data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json({ message: 'Employee updated successfully!' });
  });
  const deletePhoneNumbersQuery = 'DELETE FROM contact_detail WHERE employee_id = ?';
  const deleteDependentsQuery = 'DELETE FROM dependent WHERE employee_id = ?';
  const deleteEmergencyContactsQuery = 'DELETE FROM emergency_contact WHERE employee_id = ?';

    db.query(deletePhoneNumbersQuery, [employeeId], (err) => {
      if (err) {
        console.error('Error deleting phone numbers:', err);
        return res.status(500).send('Server error');
      }
    });

    db.query(deleteDependentsQuery, [employeeId], (err) => {
        if (err) {
          console.error('Error deleting dependents:', err);
          return res.status(500).send('Server error');
        }
      });

      db.query(deleteEmergencyContactsQuery, [employeeId], (err) => {
          if (err) {
            console.error('Error deleting emergency contacts:', err);
            return res.status(500).send('Server error');
          }
        });

        
        const insertPhoneNumbersQuery = 'INSERT INTO contact_detail (employee_id, phone_number) VALUES (?)';
        const insertDependentsQuery = 'INSERT INTO dependent (employee_id, name, relationship, date_of_birth, gender, phone_number) VALUES (?)';
        const insertEmergencyContactsQuery = 'INSERT INTO emergency_contact (employee_id, name, phone, relationship) VALUES(?)';
        
        
        const phoneNumbersValues = phone_numbers.map(phone => [employeeId, phone]);

        
        phoneNumbersValues.forEach(phones => {
          
          if(phones[1] != ""){
            console.log(phones);
            
            db.query(insertPhoneNumbersQuery, [phones], (err) => {
              if (err) {
                console.error('Error inserting phone numbers:', err);
                return res.status(500).send('Server error');
              }
            });
            
          
        }});
        
        const dependentsValues = dependents.map(dependent => [employeeId, dependent.name, dependent.relationship, dependent.date_of_birth, dependent.gender, dependent.phone_number]);

        dependentsValues.forEach(dependent => {
          //console.log(dependent);
          if(dependent[1] !== ''){
            console.log('ok');
            
            db.query(insertDependentsQuery, [dependent], (err) => {
              if (err) {
                console.error('Error inserting phone dependents:', err);
                return res.status(500).send('Server error');
              }
            });
            
            
          }


         });



        
        const emergencyContactsValues = emergency_contacts.map(contact => [employeeId, contact.name,contact.phone, contact.relationship]);

        emergencyContactsValues.forEach(contact => {

          if(contact[1] !== '' && contact[2] !== '' && contact[3] !== ''){
            console.log(contact);
            
            db.query(insertEmergencyContactsQuery, [contact], (err) => {
              if (err) {
                console.error('Error inserting emergency contacts:', err);
                return res.status(500).send('Server error');
              }
            });
            
            
          }

        });
        
         
      
    
  
  
};




