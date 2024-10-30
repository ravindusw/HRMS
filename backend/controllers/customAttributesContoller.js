import { db } from "../config/db.js";

export const getCustomAttributes = (req, res) => {
  const query = "CALL get_custom_attributes()";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching custom attributes:", err);
      return res.status(500).send("Server error");
    }

    console.log("Custom attributes fetched");
    console.log("Results:", results[0]);
    res.json(results[0]);
  });
};

export const removeAttribute = (req, res) => {
  const { attributeId } = req.params;

  const query = `CALL remove_custom_attribute(?)`;

  db.query(query, [attributeId], (err, results) => {
    if (err) {
      console.error("Error removing custom attribute:", err);
      return res.status(500).send("Server error");
    }

    console.log("Custom attribute removed");
    res.json({ message: "Custom attribute removed" });
  });
};

export const addAttribute = (req, res) => {
  const query0 = `SELECT get_entry_count_in_employee_attribute() AS entry_count`;

  db.query(query0, (err, results) => {
    if (err) {
      console.error("Error fetching entry count:", err);
      return res.status(500).send("Server error");
    }

    const entryCount = results[0].entry_count;

    const { attributeKey, defaultValue } = req.body;

    let query;
    if (entryCount === 0) {
      query = `CALL insert_first_custom_attribute(?, ?)`;
    } else {
      query = `CALL insert_custom_attribute(?, ?)`;
    }

    db.query(query, [attributeKey, defaultValue], (err, results) => {
      if (err) {
        console.error("Error adding custom attribute:", err);
        return res.status(500).send("Server error");
      }

      console.log("Custom attribute added");
      console.log(results[0][0]);

      res.json(results[0]);
    });
  });
};
