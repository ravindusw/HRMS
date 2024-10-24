
import { db } from '../config/db.js';

export const deleteDependent = (req, res) => {
    const { employee_id, name } = req.body;
    console.log( employee_id,name);
    //console.log("name", name);
    /*
    
    const query = `
      DELETE FROM dependent
      WHERE employee_id = ? AND name = ?;
    `;
  
    db.query(query, [employee_id, name], (err, results) => {
      if (err) {
        console.error("Error deleting dependent:", err);
        return res.status(500).send("Server error");
      }
  
      res.status(200).send("Dependent deleted successfully");
    });
    */
  };



  export const deleteEmergencyContact = (req, res) => {
    const { employee_id, contact_id } = req.body;
    console.log( employee_id,contact_id);
    /*
    const query = `
      DELETE FROM emergency_contact
      WHERE contact_id = ?;
    `;
  
    db.query(query, [ contact_id], (err, results) => {
      if (err) {
        console.error("Error deleting emergency contact:", err);
        return res.status(500).send("Server error");
      }
  
      res.status(200).send("Emergency contact deleted successfully");
    });
    */
    
  };

