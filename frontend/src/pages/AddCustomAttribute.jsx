// import React, { useState, useEffect } from "react";
// import axiosInstance from "../utils/AxiosInstance";
// import "./AddCustomAttribute.css";

// const CustomAttribute = () => {
//   const [attributeKey, setAttributeKey] = useState("");
//   const [attributeValue, setAttributeValue] = useState("");
//   const [employeeId, setEmployeeId] = useState("");
//   useEffect(() => {
//     axiosInstance
//       .get("/auth/getSupervisors")
//       .then((response) => {
//         setSupervisors(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching supervisors:", error);
//       });
//   }, []);

//   const handleAddAttribute = async (e) => {
//     e.preventDefault();
//     if (!attributeKey || !attributeValue || !employeeId) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post("/auth/addCustomAttribute", {
//         employee_id: employeeId,
//         key: attributeKey,
//         value: attributeValue,
//       });

//       const data = response.data;

//       if (data.success) {
//         alert("Custom attribute added successfully!");
//         setAttributeKey("");
//         setAttributeValue("");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error adding attribute:", error);
//       alert("Error adding attribute.");
//     }
//   };

//   return (
//     <div className="custom-attribute-container">
//       <div className="custom-attribute-form">
//         <h2>Add Custom Attribute</h2>
//         <form onSubmit={handleAddAttribute}>
//           <div className="form-group">
//             <label>Employee ID:</label>
//             <input
//               type="text"
//               value={employeeId}
//               onChange={(e) => setEmployeeId(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Attribute Key:</label>
//             <input
//               type="text"
//               value={attributeKey}
//               onChange={(e) => setAttributeKey(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Attribute Value:</label>
//             <input
//               type="text"
//               value={attributeValue}
//               onChange={(e) => setAttributeValue(e.target.value)}
//               className="form-control"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Add Custom Attribute to the employee
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CustomAttribute;
