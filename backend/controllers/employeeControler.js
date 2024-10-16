import { db } from "../config/db.js";

export const getSupervisors = (req, res) => {
  const query = `CALL GetSupervisors()`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching supervisors:", err);
      return res.status(500).send("Server error");
    }
    // MySQL stored procedures return results in an array, so we need to access the first element
    console.log(results);
    const supervisors = results[0][0].supervisors;
    res.status(200).json(JSON.parse(supervisors));
  });
};
