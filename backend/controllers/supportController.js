import { db } from "../config/db.js";

export const setSupport = (req, res) => {
  const { name, email, subject, description, type, reply_status } = req.body;
  console.log("adawd", req.body);
  const query = "CALL insert_inquiry(?,?,?,?,?,?)";
  db.query(
    query,
    [name, email, subject, description, type, reply_status],
    (err, results) => {
      if (err) {
        console.error("Error during stored procedure call:", err);
        return res.status(500).send("Server error");
      }
      res.status(200).send("Inquiry submitted successfully");
    }
  );
};
