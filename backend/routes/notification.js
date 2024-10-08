import { Router } from "express";

const router = Router();

const notificationList = [
  {
    id: 1,
    title: "Notification 1",
    message: "This is notification 1",
    date: "12/10/2024",
    status: "unread",
    type: "leave",
  },
  {
    id: 2,
    title: "Notification 2",
    message: "This is notification 2",
    date: "13/10/2024",
    status: "unread",
    type: "alert",
  },
  {
    id: 3,
    title: "Notification 3",
    message: "This is notification 3",
    date: "14/10/2024",
    status: "unread",
    type: "alert",
  },
  {
    id: 4,
    title: "Notification 4",
    message: "This is notification 4",
    date: "15/10/2024",
    status: "read",
    type: "leave",
  },
  {
    id: 5,
    title: "Notification 5",
    message: "This is notification 5",
    date: "16/10/2024",
    status: "read",
    type: "leave",
  },
];

router.get("/api/notification", (req, res) => {
  const { type, status } = req.query;
  // console.log(req.query);
  let filteredNotificationList = notificationList;

  if (type) {
    filteredNotificationList = filteredNotificationList.filter(
      (notification) => notification.type === type
    );
  }

  if (status) {
    filteredNotificationList = filteredNotificationList.filter(
      (notification) => notification.status === status
    );
  }

  res.json(filteredNotificationList);
  // console.log(`Filtered notifications by type: ${type} and status: ${status}`);
});

router.get("/api/notification/:id", (req, res) => {
  const id = req.params.id;
  const notification = notificationList.find(
    (notification) => notification.id == id
  );
  res.json(notification);
  console.log(`Notification with id: ${id} is running...`);
});

export default router;
