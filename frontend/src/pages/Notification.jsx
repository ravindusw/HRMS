import "./Notification.css";

import NotificationCard from "../components/NotificationCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Notification() {
  const [notificationList, setNotificationList] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [activeButtons, setActiveButtons] = useState({
    all: true,
    unread: false,
    read: false,
    alerts: false,
    leave: false,
  }); // State to track active buttons

  const fetchNotificationList = async () => {
    try {
      const url =
        filterType || filterStatus
          ? `http://localhost:8800/api/notification?type=${filterType}&status=${filterStatus}`
          : "http://localhost:8800/api/notification";
      const res = await axios.get(url);
      //console.log(res.data);
      setNotificationList(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotificationList();
  }, [filterType, filterStatus]);

  const filterByType = (type) => {
    setFilterType(type);
    // setFilterStatus(''); // Reset status filter when type filter is applied
    setActiveButtons((prev) => ({
      ...prev,
      ["all"]: false,
      [type]: !prev[type], // Toggle the active state of the button
    }));
  };


  const filterByStatus = (status) => {
    setFilterStatus(status);
    // setFilterType(''); // Reset type filter when status filter is applied
    setActiveButtons((prev) => ({
      ...prev,
      ["all"]: false,
      [status]: !prev[status], // Toggle the active state of the button
    }));
  };

  return (
    <>
      <h1>Notifications</h1>
      <div className="notificationBody">
        <div className="notificationCardList">
          <div className="notificationFilterBy">
            <p className="p-filter">Filter</p>
            <div className="buttonlist">
              <button
                className={
                  activeButtons["all"]
                    ? "button-filter-active"
                    : "button-filter-deactive"
                }
                onClick={() => {
                  setFilterType("");
                  setFilterStatus("");
                }}
              >
                All
              </button>
              <button
                className={
                  activeButtons["unread"]
                    ? "button-filter-active"
                    : "button-filter-deactive"
                }
                onClick={() => filterByStatus("unread")}
              >
                Unread
              </button>
              <button
                className={
                  activeButtons["read"]
                    ? "button-filter-active"
                    : "button-filter-deactive"
                }
                onClick={() => filterByStatus("read")}
              >
                Read
              </button>
              <button
                className={
                  activeButtons["alerts"]
                    ? "button-filter-active"
                    : "button-filter-deactive"
                }
                onClick={() => filterByType("alert")}
              >
                Alerts
              </button>
              <button
                className={
                  activeButtons["leave"]
                    ? "button-filter-active"
                    : "button-filter-deactive"
                }
                onClick={() => filterByType("leave")}
              >
                Leave
              </button>
            </div>
          </div>
          {notificationList &&
            notificationList.map((notification) => {
              return (
                <NotificationCard
                  key={notification.id}
                  content={notification}
                />
              );
            })}
        </div>

        {/* <div className="notificationDetails">
                    <div> Hello World</div>
                </div> */}
      </div>
    </>
  );
}

