
import { db } from '../config/db.js';

export const updateEmployeeData = (req, res) => {
  const employeeId = req.params.id;
  const {first_name,last_name,NIC, birthday,dept_id, job_title_id, pay_grade_id,employment_state_id, address, marital_state,phone_numbers,dependents,emergency_contacts } = req.body;
  //console.log( req.body);
  
  
  const query1 = `CALL UpdateEmployee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    employeeId,
    first_name,
    last_name,
    NIC,
    birthday,
    dept_id,
    job_title_id,
    pay_grade_id,
    employment_state_id,
    address,
    marital_state
  ];


  db.query(query1, values, (err, results) => {
    if (err) {
      console.error('Error updating employee data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json({ message: 'Employee updated successfully!' });
  });
  const deletePhoneNumbersQuery = `CALL DeletePhoneNumbers(?)`;
  const deleteDependentsQuery =  `CALL DeleteDependents(?)`;
  const deleteEmergencyContactsQuery = `CALL DeleteEmergencyContacts(?)`;

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

        
        const insertPhoneNumbersQuery = `CALL InsertPhoneNumber(?, ?)`;
        const insertDependentsQuery = `CALL InsertDependent(?, ?, ?, ?, ?, ?)`;
        const insertEmergencyContactsQuery = `CALL InsertEmergencyContact(?, ?, ?, ?)`;
        
        
        

        
        phone_numbers.forEach(phones => {
          const phoneNumberValues = [employeeId, phones];
          if(phones[1] != ""){
            console.log(phones);
            
            db.query(insertPhoneNumbersQuery, phoneNumberValues, (err) => {
              if (err) {
                console.error('Error inserting phone numbers:', err);
                return res.status(500).send('Server error');
              }
            });
            
          
        }});
        
        

        dependents.forEach(dependent => {

          const dependentValues = [
            employeeId,
            dependent.name,
            dependent.relationship,
            dependent.date_of_birth,
            dependent.gender,
            dependent.phone_number
          ];

          //console.log(dependent);
          if(dependentValues.name !== ''){
            //console.log('ok');
            
            db.query(insertDependentsQuery, dependentValues, (err) => {
              if (err) {
                console.error('Error inserting phone dependents:', err);
                return res.status(500).send('Server error');
              }
            });
            
            
          }


         });



        
        

        emergency_contacts.forEach(contact => {
          const emergencyContactValues = [
            employeeId,
            contact.name,
            contact.phone,
            contact.relationship
          ];

          if(emergencyContactValues.name !== '' && emergencyContactValues.phone !== '' ){
            //console.log(contact);
            
            db.query(insertEmergencyContactsQuery,emergencyContactValues, (err) => {
              if (err) {
                console.error('Error inserting emergency contacts:', err);
                return res.status(500).send('Server error');
              }
            });
            
            
          }

        });
        
         
      
    
  
  
};




