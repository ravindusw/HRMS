import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import './NotificationBellIcon.css'; // Import the CSS file for styling
import bellicon from '../assets/bell-icon.svg'; // Import the bell icon

const NotificationBellIcon = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // const userId = '4183f727-8be8-11ef-acee-4a6a3b2083d6'; // Hardcoded user ID for now

  useEffect(() => {
    // Fetch the unread message count from the backend
    const fetchUnreadCount = async () => {
      try {
        const response = await axiosInstance.get(`/notification/get-unread-notification-count`);
        setUnreadCount(response.data.unreadCount);
      } catch (error) {
        console.error('Error fetching unread count:', error);
      }
    };

    fetchUnreadCount();
  }, []);

  // Handle click event to navigate to the notification page
  const handleClick = () => {
    navigate('/notification');
  };

  return (
    <div className="notification-bell-icon" onClick={handleClick}>
      <img src={bellicon} alt="Notifications" className="bell-icon" title="Notifications"/>
      {unreadCount > 0 && (
        <span className="unread-count">{unreadCount}</span>
      )}
    </div>
  );
};

export default NotificationBellIcon;