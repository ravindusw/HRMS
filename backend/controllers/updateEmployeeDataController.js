
import { db } from '../config/db.js';



  export const updateEmployeeData = (req, res) => {
    const employeeId = req.params.id;
    const { Updated_data } = req.body;
    console.log( employeeId);
    console.log( req.body);
      
  };