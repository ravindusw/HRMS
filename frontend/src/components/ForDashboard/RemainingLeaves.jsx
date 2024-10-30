import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./DashboardComponentStyles.css";
import { useState, useEffect } from "react";

import axiosInstance from "../../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function RemainingLeaves({ role }) {
  const navigate = useNavigate();
  const [remainingLeaves, setRemainingLeaves] = useState([]);

  const data = remainingLeaves.map((leave) => {
    return {
      name: leave.type,
      value: leave.balance,
    };
  });

  useEffect(() => {
    // const id = "6bf363e8-8b5d-11ef-acee-4a6a3b2083d6"; // Hardcoded employee id
    
    const fetchRemainingLeaves = async () => {
      try {
        const response = await axiosInstance.get(`/dashboard/get-remaining-leave-count`);
        // console.log(response.data);
        setRemainingLeaves(response.data);
      } catch (error) {
        console.error("Error fetching remaining leaves:", error);
      }
    };

    fetchRemainingLeaves();

  }, []);

  
  return (
    <div className="remaining-leaves-card">
      <h3>Remaining Leaves</h3>

      <div className="leave-content">
        {/* Leave Types Cards */}
        <div className="leave-types">
          {remainingLeaves.length > 0 ? 
            remainingLeaves.map((leave, index) => {
              return (
                <div key={index} className="leave-card">
                  {leave.type} <br />
                  <span>{leave.balance}</span>
                </div>
              );
            }) : <p className="error-fetchingData">Seems like there is an issue fetching the data</p>}
        </div>

        {/* Pie Chart for leave types */}
        <div className="leave-chart">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <button className="btn-apply" onClick={() => navigate("/leaveapplication")}>Apply For a Leave</button>
      {(role == "Supervisor") ? <button className="btn-apply" onClick={() => navigate("/leaverequests")}>View Leave Requests</button> : null}
    </div>
  );
}
