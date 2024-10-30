import { db } from "../config/db.js";

export const fetchNotificationsAll = (req, res) => {
    const query = "CALL get_notification_all();";

    console.log("Came here");
    console.log(req.user);

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
    const { u_id } = req.user;

    const query = "CALL get_notification_by_user_id(?);";

    db.query(query, [u_id], (err, results) => {
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

export const getUnreadNotificationCount = (req, res) => {
    const query = "SELECT get_unread_notification_count(?) AS unreadCount;";
    const { u_id } = req.user;

    console.log("u_id is ", u_id);

    db.query(query, [u_id], (err, results) => {
        if (err) {
            console.error("Error fetching notifications count:", err);
            return res.status(500).send("Server error");
        }

        if (results.length === 0) {
            return res.json({ unreadCount: 0 });
        }

        console.log("Results:", results);
        res.json(results[0]);
    });
};