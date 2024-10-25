import { db } from "../config/db.js";

export const getProfile = (req, res) => {
  const { e_id } = req.user;

  // Call the stored procedure
  const query = `CALL get_profile(?)`;

  db.query(query, [e_id], (err, results) => {
    if (err) {
      console.error("Error fetching profile data:", err);
      return res.status(500).send("Server error");
    }
    if (!results || results.length === 0 || !results[0].length) {
      return res.status(404).send("Profile not found");
    }

    const profileData = results[0][0].profile;

    console.log(profileData);
    res.status(200).json(profileData);
  });
};
