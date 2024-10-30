import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../utils/AxiosInstance';
import { useNavigate, useLocation } from 'react-router-dom';
import './ComponentStyles.css'
import bellicon from '../assets/bell-icon.svg'; // Import the bell icon

const NotificationBellIcon = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const location = useLocation(); // Initialize the useLocation hook

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
  }, [location]);

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