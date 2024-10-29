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

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing stored procedure:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json({ message: 'Employee updated successfully!' });
  });
};

