// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Report.css";

// const Report = () => {
//   const [reportType, setReportType] = useState("");
//   const navigate = useNavigate();

//   const handleReportChange = (e) => {
//     const selectedReport = e.target.value;
//     setReportType(selectedReport);

//     // Navigate based on selected report type
//     if (selectedReport === "Employee Report") {
//       navigate("/employee-report");
//     } else if (selectedReport === "Leave Report") {
//       navigate("/leave-report");
//     } else if (selectedReport === "Salary Report") {
//       navigate("/salary-report");
//     } else if (selectedReport === "Custom Fields Report") {
//       navigate("/custom-fields-report");
//     }
//   };
//   const backgroundImageStyle1 = {
//     backgroundImage: `url(src/assets/appreal.png)`, // Example for images in the public folder
//     height: "100vh",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   };
//   const backgroundImageStyle2 = {
//     backgroundImage: `url(src/assets/report.jpg)`, // Example for images in the public folder
//     height: "100vh",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   };

//   return (
//     <div className="report-page">
//       <div className="report-container">
//         <div className="reportcontainer-1" style={backgroundImageStyle2}>
//           <h1>Jupiter Apparels Reporting Module</h1>
//           {/* <h1> Reporting Module </h1> */}
//           <h2> Generate Report </h2>
//           <form>
//             <div>
//               <label>Select Report Type:</label>
//               <select value={reportType} onChange={handleReportChange}>
//                 <option value="">-- Select Report --</option>
//                 <option value="Employee Report">Employee Report</option>
//                 <option value="Leave Report">Leave Report</option>
//                 <option value="Salary Report">Salary Report</option>
//                 <option value="Custom Fields Report">
//                   Reports Based on Custom Fields
//                 </option>
//               </select>
//             </div>
//           </form>
//         </div>
//         <div className="reportcontainer-2" style={backgroundImageStyle1}></div>
//       </div>
//     </div>
//   );
// };

// export default Report;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Report.css";

const Report = () => {
  const [reportType, setReportType] = useState("");
  const navigate = useNavigate();

  const backgroundImageStyle1 = {
    backgroundImage: `url(src/assets/appreal.png)`, // Example for images in the public folder
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const backgroundImageStyle2 = {
    backgroundImage: `url(src/assets/report.jpg)`, // Example for images in the public folder
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const fetchReportData = async (reportType) => {
    try {
      const response = await fetch(
        `http://localhost:8800/api/reports?type=${reportType}`
      );
      const data = await response.json();
      console.log(data); // Handle the fetched data as needed
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const handleReportChange = (e) => {
    const selectedReport = e.target.value;
    setReportType(selectedReport);

    // Fetch report data from backend
    fetchReportData(selectedReport);

    // Navigate based on selected report type
    if (selectedReport === "Employee Report") {
      navigate("/employee-report");
    } else if (selectedReport === "Leave Report") {
      navigate("/leave-report");
    } else if (selectedReport === "Salary Report") {
      navigate("/salary-report");
    } else if (selectedReport === "Custom Fields Report") {
      navigate("/custom-fields-report");
    }
  };

  return (
    <div className="report-page">
      <div className="report-container">
        <div className="reportcontainer-1" style={backgroundImageStyle2}>
          <h1>Jupiter Apparels Reporting Module</h1>
          <h2> Generate Report </h2>
          <form>
            <div>
              <label>Select Report Type:</label>
              <select value={reportType} onChange={handleReportChange}>
                <option value="">-- Select Report --</option>
                <option value="Employee Report">Employee Report</option>
                <option value="Leave Report">Leave Report</option>
                <option value="Salary Report">Salary Report</option>
                <option value="Custom Fields Report">
                  Reports Based on Custom Fields
                </option>
              </select>
            </div>
          </form>
        </div>
        <div className="reportcontainer-2" style={backgroundImageStyle1}></div>
      </div>
    </div>
  );
};

export default Report;
