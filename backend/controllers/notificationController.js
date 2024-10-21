import { db } from "../config/db.js";

export const fetchNotificationsAll = (req, res) => {
    const query = "CALL get_notification_all();";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching notifications:", err);
            return res.status(500).send("Server error");
        }
        console.log("Notifications fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const fetchNotificationByUserId = (req, res) => {
    if (!req.params.userId) {
        return res.status(400).send("User ID is required");
    }
    
    const { userId } = req.params;
    const query = "CALL get_notification_by_user_id(?);";

    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error("Error fetching notifications:", err);
            return res.status(500).send("Server error");
        }
        console.log("Notifications fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
}

export const fetchNotificationByNotificationId = (req, res) => {
    if (!req.params.notificationId) {
        return res.status(400).send("Notification ID is required");
    }
    
    const query = "CALL get_notification_by_id(?);";
    const { notificationId } = req.params;

    db.query(query, [notificationId], (err, results) => {
        if (err) {
            console.error("Error fetching notification:", err);
            return res.status(500).send("Server error");
        }
        console.log("Notification fetched");
        console.log("Results:", results);
        res.json(results[0]);
    });
};

export const updateNotificationStatus = (req, res) => {
    if (!req.body.notificationId || !req.body.status) {
        return res.status(400).send("Notification ID and status are required");
    }
    
    if (req.body.status !== "read" && req.body.status !== "unread") {
        return res.status(400).send("Invalid status. Only 'read' or 'unread' is allowed");
    }
    
    const query = "CALL update_notification_status(?, ?);";
    
    db.query(query, [req.body.notificationId, req.body.status], (err, results) => {
        if (err) {
            console.error("Error updating notification status:", err);
            return res.status(500).send("Server error");
        }

        if (results.affectedRows === 0) {
            return res.status(404).send("Notification not found");
        }

        console.log("Notification status updated");
        console.log("Results:", results);
        res.json({ message: "Notification status updated" });
    });
};

export const deleteNotification = (req, res) => {
    if (!req.params.id) {
        return res.status(400).send("Notification ID is required");
    }
    
    const query = "CALL delete_notification_by_id(?);";
    const { id } = req.params;

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error deleting notification:", err);
            return res.status(500).send("Server error");
        }

        if (results.affectedRows === 0) {
            return res.status(404).send("Notification not found");
        }

        console.log("Notification deleted");
        console.log("Results:", results);
        res.json({ message: "Notification deleted" });
    });
};

export const createNotification = (req, res) => {
    if (!req.body.id || !req.body.message || !req.body.date || !req.body.status || !req.body.type) {
        return res.status(400).send("All fields are required");
    }
    
    if (req.body.status !== "read" && req.body.status !== "unread") {
        return res.status(400).send("Invalid status. Only 'read' or 'unread' is allowed");
    }
    
    if (req.body.type !== "new request" && req.body.type !== "alert" && req.body.type !== "leave status") {
        return res.status(400).send("Invalid type");
    }
    
    const query = "CALL create_notification(?, ?, ?, ?, ?);";
    const { id, message, date, status, type } = req.body;
    let user_id = "";

    const create_query = () => {
        db.query(query, [user_id, message, status, type, date], (err, results) => {
            if (err) {
                console.error("Error creating notification:", err);
                return res.status(500).send("Server error");
            }
    
            if (results.affectedRows === 0) {
                return res.status(404).send("Notification not created");
            }
    
            console.log("Notification created");
            console.log("Results:", results);
            res.json({ message: "Notification created" });
        });
    };

    if (type == "new request") {
        const query_sup_id = "SELECT get_supervisor_user_id_of_user(?) AS supervisor_id;";

        db.query(query_sup_id, [id], (err, results) => {
            if (err) {
                console.error("Error fetching supervisor ID:", err);
                return res.status(500).send("Server error");
            }

            if (results.length === 0) {
                return res.status(404).send("Supervisor ID not found");
            }

            console.log("Supervisor ID fetched");
            console.log("Results:", results[0].supervisor_id);
            user_id = results[0].supervisor_id;

            create_query();
        });

    }

    else if (type == "leave status") {
        const query_user_id = "SELECT get_user_id_by_leave_record_id(?) AS user_id;";

        db.query(query_user_id, [id], (err, results) => {
            if (err) {
                console.error("Error fetching user ID:", err);
                return res.status(500).send("Server error");
            }

            if (results.length === 0) {
                return res.status(404).send("User ID not found");
            }

            console.log(results);
            console.log("User ID fetched");
            console.log("Results:", results[0].user_id);
            user_id = results[0].user_id;

            create_query();
        });
    }

    else {
        res.status(400).send("Invalid type");
    }
};