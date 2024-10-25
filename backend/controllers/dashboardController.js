import { db } from "../config/db.js";

export const fetchRemainingLeaveCount = (req, res) => {
    const { e_id } = req.user;
    const query = "CALL get_remaining_leave_count(?, ?);";

    console.log(new Date().getFullYear());
    console.log("e_id is ", e_id);

    db.query(query, [e_id, new Date().getFullYear()], (err, results) => {
        if (err) {
            console.error("Error fetching remaining leave count:", err);
            return res.status(500).send("Server error");
        }

        if (results[0].length === 0) {
            return res.status(404).send("No leave count found for given employee id");
        }

        console.log("Remaining leave count fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const fetchTotalEmployeeCount = (req, res) => {
    const query = "SELECT get_total_employees_count() AS total_count;";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching total employee count:", err);
            return res.status(500).send("Server error");
        }

        console.log("Total employee count fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const fetchAbsentEmployeeCount = (req, res) => {
    const query = "SELECT get_absent_employees_count() AS absent_count;";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching total employee count:", err);
            return res.status(500).send("Server error");
        }

        console.log("Total absen temployee count fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const fetchRoleCount = (req, res) => {
    const query = "CALL get_role_count();";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching total employee count:", err);
            return res.status(500).send("Server error");
        }

        console.log("Role Count fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const fetchUpcomingLeaves = (req, res) => {
    const { e_id } = req.user;
    const query = "CALL get_upcoming_leaves(?);";

    db.query(query, [e_id], (err, results) => {
        if (err) {
            console.error("Error fetching upcoming leaves:", err);
            return res.status(500).send("Server error");
        }

        console.log("Upcoming leaves fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};