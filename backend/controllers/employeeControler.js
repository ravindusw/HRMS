import { db } from "../config/db.js";

export const getSupervisors = (req, res) => {
  const query = `CALL GetSupervisors()`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching supervisors:", err);
      return res.status(500).send("Server error");
    }

    // Check if there are any results
    if (!results[0] || !results[0][0]) {
      return res.status(404).json({ message: "No supervisors found." });
    }

    const supervisors = results[0][0].supervisors;

    // Check the type of supervisors and respond accordingly
    if (Array.isArray(supervisors)) {
      res.status(200).json(supervisors); // Send the array directly
    } else {
      // Handle unexpected format
      res
        .status(500)
        .json({ message: "Unexpected format for supervisors data." });
    }
  });
};
