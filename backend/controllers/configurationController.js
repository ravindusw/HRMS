import { db } from '../config/db.js';

export const fetchJobTitles = (req, res) => {
    const query = "CALL get_job_titles();";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching job titles:", err);
            return res.status(500).send("Server error");
        }

        console.log("Job titles fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const addJobTitle = (req, res) => {
    const { jobTitle } = req.body;
    const query = "CALL create_job_title(?);";

    db.query(query, [jobTitle], (err, results) => {
        if (err) {
            console.error("Error adding job title:", err);
            return res.status(500).send("Server error");
        }

        console.log("Job title added");
        console.log("Results:", results);
        res.json({ message : "Job title added successfully" });
    });
};

export const fetchMaxLeaveCount = (req, res) => {
    const query = "CALL get_pay_grade_leave_limits();";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching leave counts:", err);
            return res.status(500).send("Server error");
        }

        console.log("Leave counts fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const updateMaxLeaveCount = (req, res) => {
    const { name, type, max_leave_count } = req.body;
    const query = "CALL update_max_leave_count(?, ?, ?);";

    db.query(query, [name, type, max_leave_count], (err, results) => {
        if (err) {
            console.error("Error updating leave count:", err);
            return res.status(500).send("Server error");
        }

        if (results.affectedRows === 0) {
            console.error("Error updating leave count:", err);
            return res.status(500).send("Server error");
        }

        console.log("Leave count updated");
        console.log("Results:", results);
        res.json({ message : "Leave count updated successfully" });
    });
};