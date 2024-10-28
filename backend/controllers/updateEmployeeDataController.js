import { db } from '../config/db.js';

export const updateEmployeeData = (req, res) => {
  const employeeId = req.params.id;
  const {
    first_name,
    last_name,
    NIC,
    birthday,
    dept_id,
    job_title_id,
    pay_grade_id,
    employment_state_id,
    address,
    marital_state,
    phone_numbers,
    dependents,
    emergency_contacts,
  } = req.body;

  // JSON Stringify if arrays are being passed directly
  const phoneNumbersJson = JSON.stringify(phone_numbers);
  const emergencyContactsJson = JSON.stringify(emergency_contacts);

  // Handle birthday, set to null if empty
  const birthdayValue = birthday && birthday.trim() !== '' ? birthday : null;

  // Filter and process dependents to include only those with non-empty date_of_birth
  const processedDependents = dependents
    .filter(dependent => dependent.date_of_birth && dependent.date_of_birth.trim() !== '')
    .map(dependent => ({
      name: dependent.name,
      relationship: dependent.relationship,
      date_of_birth: dependent.date_of_birth, // Already filtered
      gender: dependent.gender,
      phone_number: dependent.phone_number,
    }));

  const query = `CALL UpdateEmployeeDataInDataBase(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    employeeId,
    first_name,
    last_name,
    NIC,
    birthdayValue,  // Use the handled birthday value
    dept_id,
    job_title_id,
    pay_grade_id,
    employment_state_id,
    address,
    marital_state,
    phoneNumbersJson,
    JSON.stringify(processedDependents),  // Use processed dependents
    emergencyContactsJson,
  ];

  // Log each value separately for debugging
  console.log("Employee ID:", employeeId);
  console.log("First Name:", first_name);
  console.log("Last Name:", last_name);
  console.log("NIC:", NIC);
  console.log("Birthday Value:", birthdayValue);
  console.log("Department ID:", dept_id);
  console.log("Job Title ID:", job_title_id);
  console.log("Pay Grade ID:", pay_grade_id);
  console.log("Employment State ID:", employment_state_id);
  console.log("Address:", address);
  console.log("Marital State:", marital_state);
  console.log("Phone Numbers JSON:", phoneNumbersJson);
  console.log("Processed Dependents JSON:", JSON.stringify(processedDependents));
  console.log("Emergency Contacts JSON:", emergencyContactsJson);
  
  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing stored procedure:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json({ message: 'Employee updated successfully!' });
  });
};




/*
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
            //console.log(phones);
            
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
          if(dependentValues[1] !== '' && dependentValues[2] !== '' && dependentValues[3] !== '' && dependentValues[4] !== '' ){
            
            //console.log(dependentValues);
            //console.log('valid');
            
            
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

          if(emergencyContactValues[1] !== '' && emergencyContactValues[2] !== '' ){
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



*/
