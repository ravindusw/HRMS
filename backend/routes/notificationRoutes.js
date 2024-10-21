import { Router } from "express";
import { 
  fetchNotificationsAll, 
  fetchNotificationByUserId, 
  fetchNotificationByNotificationId, 
  updateNotificationStatus,
  deleteNotification,
  createNotification
} from "../controllers/notificationController.js";

const router = Router();

const notificationList = [
  {
    id: 1,
    title: "Notification 1: Unread Leave",
    message: "This is notification 1",
    date: "12/10/2024",
    status: "unread",
    type: "leave",
  },
  {
    id: 2,
    title: "Notification 2: Unread Alert",
    message: "This is notification 2",
    date: "13/10/2024",
    status: "unread",
    type: "alert",
  },
  {
    id: 3,
    title: "Notification 3: Unread Alert",
    message: "This is notification 3",
    date: "14/10/2024",
    status: "unread",
    type: "alert",
  },
  {
    id: 4,
    title: "Notification 4: Read Leave",
    message: "This is notification 4",
    date: "15/10/2024",
    status: "read",
    type: "leave",
  },
  {
    id: 5,
    title: "Notification 5: Read Leave",
    message: "This is notification 5",
    date: "16/10/2024",
    status: "read",
    type: "leave",
  },
];

router.get("/fetch-notification-all", fetchNotificationsAll);
router.get("/fetch-notification-by-notification-id/:notificationId", fetchNotificationByNotificationId);
router.get("/fetch-notification-by-user-id/:userId", fetchNotificationByUserId);
router.post("/update-notification-status", updateNotificationStatus);
router.delete("/delete-notification/:id", deleteNotification);
router.put("/create-notification", createNotification);

export default router;
