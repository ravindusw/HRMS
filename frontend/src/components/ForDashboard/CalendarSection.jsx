import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarSection() {
  return (
    <div className="calendar-section">
      <Calendar />
      <h3>Upcoming Meetings</h3>
      <p>03/02/2024 - Meeting with Managers</p>
      <p>05/10/2024 - Meeting</p>
      <p>24/10/2024 - On Leave</p>
    </div>
  );
}
