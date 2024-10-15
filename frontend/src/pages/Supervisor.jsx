import './Dashboard.css';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import { useState } from 'react';

export default function SupervisorDashboard() {
    const [leaveRequests, setLeaveRequests] = useState([
        { id: 1, name: 'John Doe', type: 'Annual', date: '2024-10-15', status: 'Pending' },
        { id: 2, name: 'Jane Smith', type: 'Casual', date: '2024-10-16', status: 'Pending' },
    ]);

    const handleLeaveAction = (id, action) => {
        setLeaveRequests(leaveRequests.map(request => 
            request.id === id ? { ...request, status: action } : request
        ));
    };

    return (
        <div className="dashboard-container">
            <h1>Supervisor Dashboard</h1>
            <h2>Good Morning Supervisor!</h2>

            <div className="info-summary">
                <h3>Personal Information Summary</h3>
                <p><strong>Name:</strong> Alan Walker</p>
                <p><strong>Job Title:</strong> Supervisor</p>
                <p><strong>Department:</strong> IT</p>
                <p><strong>Date of Birth:</strong> 05/05/1998</p>
                <p><strong>Working Since:</strong> 12/05/2020</p>
                <button className="btn-update">View Details</button>
            </div>

            <div className="calendar">
                <Calendar />
                <h3>Upcoming Meetings</h3>
                <p>03/02/2024 - Meeting with Managers</p>
                <p>05/10/2024 - Meeting</p>
                <p>24/10/2024 - On Leave</p>
            </div>

            <div className="leave-requests">
                <h3>Pending Leave Requests</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Leave Type</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveRequests.map(request => (
                            <tr key={request.id}>
                                <td>{request.name}</td>
                                <td>{request.type}</td>
                                <td>{request.date}</td>
                                <td>{request.status}</td>
                                <td>
                                    {request.status === 'Pending' && (
                                        <>
                                            <button className="btn-approve" onClick={() => handleLeaveAction(request.id, 'Approved')}>Approve</button>
                                            <button className="btn-reject" onClick={() => handleLeaveAction(request.id, 'Rejected')}>Reject</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="employees-info">
                <div className="employees-count">
                    <h3>Total Employees</h3>
                    <p>450</p>
                </div>
                <div className="employees-on-leave">
                    <h3>Employees on Leave</h3>
                    <p>50</p>
                </div>
            </div>

            <div className="quick-actions">
                <h3>Quick Actions</h3>
                <p>Approve/Reject Leave Requests</p>
                <p>Update Personal Information</p>
            </div>
        </div>
    );
}
