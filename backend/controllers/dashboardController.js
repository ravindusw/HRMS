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