import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DashboardComponentStyles.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/AxiosInstance";

export default function CalendarSection({ profile }) {
  const [events, setEvents] = useState([]);
  const [eventDataList, setEventDataList] = useState([]);
  // const [clickedDate, setClickedDate] = useState(null);
  // const [clickedDateEvents, setClickedDateEvents] = useState([]);
  // console.log("Profile data:", profile?.date_of_birth);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get(`/dashboard/get-upcoming-leaves`);
        // console.log("Events:", response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    setEventDataList([]);

    if (profile?.date_of_birth) {
      const today = new Date();
      const birthDate = new Date(profile.date_of_birth);
      birthDate.setFullYear(today.getFullYear());

      const timeDiff = birthDate - today;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      if (daysDiff === 0) {
        setEventDataList((prev) => [...prev, "Happy Birthday, " + profile.first_name + "!" + " 🎂"]);
      } else if (daysDiff > 0 && daysDiff <= 30) {
        setEventDataList((prev) => [...prev, `Your birthday is coming up in ${daysDiff} days! 🎉`]);
      }

    }
    
    if (events.length === 0 && eventDataList.length === 0) {
      setEventDataList(["No upcoming events"]);
      return;
    }

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      let data = "";
      
      const startDate = new Date(event.start_date).toLocaleDateString();
      const endDate = new Date(event.end_date).toLocaleDateString();

      if (event.status === "approved" || event.status ===  "Approved") {      
        data = "You are on leave from " + startDate + " to " + endDate;
      } else if (event.status === "pending" || event.status === "Pending") {
        data = "Your leave request from " + startDate + " to " + endDate+ " is pending";
      } else if (event.status === "rejected" || event.status === "Rejected") {
        data = "Your leave request from " + startDate + " to " + endDate + " has been rejected";
      }
      
      if (data !== "") setEventDataList((prev) => [...prev, data]);
    }
  }, [events]);

  // const handleClickDate = (date, event) => {
  //   setClickedDate(date.toLocaleDateString());
  //   console.log("Clicked date:", date.toLocaleDateString());
  // };
  
  return (
    <div className="calendar-section">
      <Calendar className="react-calendar"/>
      
      {/* <h3>Events on {clickedDate ? clickedDate : "today"}</h3> */}
    
      <h3>Upcoming Events</h3>
      <ul>
        {eventDataList.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>  

    </div>
  );
}
