import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notification.css";
import markread from "../assets/mark-as-read.svg";
import deleteIcon from "../assets/delete.svg";
import markunread from "../assets/mark-as-unread.svg";

import NotificationPopupDelete from "../components/NotificationPopupDelete";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeButton, setActiveButton] = useState("All");

  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/notification/fetch-notification-all");
      setNotifications(response.data);
      console.log("Notifications fetched:", response.data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };
  
  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8800/api/notification/update-notification-status`, {
        notificationId: id,
        status: "read",
      });
      console.log(`Notification with id: ${id} is marked as read...`);
      console.log("Response:", response.data);
      fetchNotifications();
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  const handleMarkAsUnread = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8800/api/notification/update-notification-status`, {
        notificationId: id,
        status: "unread",
      });
      console.log(`Notification with id: ${id} is marked as unread...`);
      console.log("Response:", response.data);
      fetchNotifications();
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  const cancelDelete = () => {
    setDeletePopupVisible(false);
    setDeleteId(null);
  }

  const confirmDelete = (id) => {
    setDeletePopupVisible(true);
    setDeleteId(id);
  }
  
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8800/api/notification/delete-notification/${deleteId}`);
      console.log(`Notification with id: ${deleteId} is deleted...`);
      console.log("Response:", response.data);
      fetchNotifications();
    } catch (err) {
      console.error("Error deleting notification:", err);
    }
    setDeletePopupVisible(false);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    setActiveButton(filter);
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "All") return true;
    if (filter === "Unread") return notification.status === "unread";
    if (filter === "Read") return notification.status === "read";
    if (filter === "Alert") return notification.type === "alert";
    if (filter === "Leave") return notification.type === "leave status" || notification.type === "new request";
    return true;
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="notification-container">
      <h2 className="notification-header">Notifications</h2>
      
      {/* Filter buttons */}
      <div className="filter-buttons">
        <button className={activeButton=="All"? "active" : null} onClick={() => handleFilter("All")}>All</button>
        <button className={activeButton=="Unread"? "active" : null} onClick={() => handleFilter("Unread")}>Unread</button>
        <button className={activeButton=="Read"? "active" : null} onClick={() => handleFilter("Read")}>Read</button>
        <button className={activeButton=="Alert"? "active" : null} onClick={() => handleFilter("Alert")}>Alert</button>
        <button className={activeButton=="Leave"? "active" : null} onClick={() => handleFilter("Leave")}>Leave</button>
      </div>

      {/* Delete Notification Popup */}
      {isDeletePopupVisible && <NotificationPopupDelete onDelete={handleDelete} onCancel={cancelDelete} />}

      {filteredNotifications.length === 0 ? (
        <p className="notification-empty">No notifications to display.</p>
      ) : (
        <ul className="notification-list">
          {filteredNotifications.map((notification) => (
            <li
              key={notification.notification_id}
              className={`notification-item ${notification.status === "unread" ? "unread" : ""}`}
            >
              <div className="notification-content">
                <h3 className="notification-title">
                  {
                    notification.type == "new request" ? "New Leave Request" : 
                    notification.type == "leave status" ? "Leave Application Status" :
                    notification.type == "alert" ? "Alert" : "Notification"
                  }
                </h3>
                <p className="notification-message">{notification.message}</p>
                <span className="notification-date">{new Date(notification.date).toLocaleString()}</span>
              </div>

              <div className="notification-actions">
                {notification.status === "unread" && (
                  <button
                    className="mark-as-read"
                    onClick={() => handleMarkAsRead(notification.notification_id)}
                    title="Mark as Read"
                  >
                    <img src={markread} alt="Mark as Read" />
                  </button>
                )}
                {notification.status === "read" && (
                  <button
                    className="mark-as-unread mark-as-read"
                    onClick={() => handleMarkAsUnread(notification.notification_id)}
                    title="Mark as Unread"
                  >
                    <img src={markunread} alt="Mark as Unread" />
                  </button>
                )}
                <button
                  className="delete-notification"
                  onClick={() => confirmDelete(notification.notification_id)}
                  title="Delete Notification"
                >
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;

