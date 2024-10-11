// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Image from "react-bootstrap/Image";
// import EmployeePic from "../../assets/Employee.png";
// import { useParams } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   const { employee_id } = useParams(); // Correctly extract employeeId
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8800/profile/${employee_id}`
//         );
//         setProfileData(response.data); // Store the fetched data
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     if (employee_id) {
//       // Ensure employeeId is defined before making the request
//       fetchProfileData();
//     }
//   }, [employee_id]);

//   if (!profileData) {
//     return <div>Loading...</div>; // Show loading state while fetching data
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h1>Profile</h1>
//       </div>
//       <div className="profile-body">
//         <div className="profile-content">
//           <div className="photo-section">
//             <Image
//               className="profile-photo"
//               src={EmployeePic}
//               roundedCircle
//               width="150"
//               height="150"
//             />
//           </div>
//           <div className="info-section">
//             <h2>
//               {profileData.first_name} {profileData.last_name}
//             </h2>
//             <div className="profile-field">
//               <label className="field-label">Name:</label>
//               <div className="field-value">
//                 {profileData.first_name} {profileData.last_name}
//               </div>
//             </div>
//             <div className="profile-field">
//               <label className="field-label">Company Email:</label>
//               <div className="field-value">{profileData.email}</div>
//             </div>
//             <div className="profile-field">
//               <label className="field-label">Personal Email:</label>
//               <div className="field-value">{profileData.personal_email}</div>
//             </div>
//             <div className="profile-field">
//               <label className="field-label">Address:</label>
//               <div className="field-value">{profileData.address}</div>
//             </div>
//             <div className="profile-field">
//               <label className="field-label">Date of Birth:</label>
//               <div className="field-value">
//                 {new Date(profileData.date_of_birth).toLocaleDateString()}
//               </div>
//             </div>
//             <div className="profile-field">
//               <label className="field-label">Position:</label>
//               <div className="field-value">{profileData.job_title}</div>
//             </div>
//             <div className="profile-field">
//               <label className="field-label">Department:</label>
//               <div className="field-value">{profileData.Department}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import EmployeePic from "../assets/Employee.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./Profile.css";

const Profile = () => {
  const { auth } = useAuth();
  // console.log(auth.token);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!auth.token) {
        navigate("/"); // Redirect to login if no token
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8800/api/profile`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [auth.token, navigate]);

  if (!profileData) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-body">
        <div className="profile-content">
          <div className="photo-section">
            <Image
              className="profile-photo"
              src={EmployeePic}
              roundedCircle
              width="150"
              height="150"
            />
          </div>
          <div className="info-section">
            <h2>
              {profileData.first_name} {profileData.last_name}
            </h2>
            <div className="profile-field">
              <label className="field-label">Name:</label>
              <div className="field-value">
                {profileData.first_name} {profileData.last_name}
              </div>
            </div>
            <div className="profile-field">
              <label className="field-label">Company Email:</label>
              <div className="field-value">{profileData.email}</div>
            </div>
            <div className="profile-field">
              <label className="field-label">Personal Email:</label>
              <div className="field-value">{profileData.personal_email}</div>
            </div>
            <div className="profile-field">
              <label className="field-label">Address:</label>
              <div className="field-value">{profileData.address}</div>
            </div>
            <div className="profile-field">
              <label className="field-label">Date of Birth:</label>
              <div className="field-value">
                {new Date(profileData.date_of_birth).toLocaleDateString()}
              </div>
            </div>
            <div className="profile-field">
              <label className="field-label">Position:</label>
              <div className="field-value">{profileData.job_title}</div>
            </div>
            <div className="profile-field">
              <label className="field-label">Department:</label>
              <div className="field-value">{profileData.Department}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
