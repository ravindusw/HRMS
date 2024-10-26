import { db } from "../config/db.js";

export const fetchOrganizationInfo = (req, res) => {
    const query = "CALL get_organization_details();";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching organization detaile:", err);
            return res.status(500).send("Server error");
        }

        console.log("Organization details fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
}

export const fetchBranchInfo = (req, res) => {
    const query = "CALL get_branch_details();";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching branch details:", err);
            return res.status(500).send("Server error");
        }

        console.log("Branch details fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const updateBranchInfo = (req, res) => {
    const { branch_id, branch_name, country, address, phone_number, organization_id } = req.body;
    const query = `CALL update_branch_details(?,?,?,?,?,?);`;

    db.query(query, [branch_id, country, address, organization_id, branch_name, phone_number],(err, results) => {
        if (err) {
            console.error("Error updating branch details:", err);
            return res.status(500).send("Server error");
        }

        if (results.affectedRows === 0) {
            console.error("Branch not found");
            return res.status(404).send("Branch not found");
        }

        console.log("Branch details updated");
        console.log("Results:", results);
        res.json({ message: "Branch details updated"});
    });
};