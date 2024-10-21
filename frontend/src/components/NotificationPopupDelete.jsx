import { useState } from 'react';
import './NotificationPopupDelete.css'; // We will add animations and styles here
import warningIcon from '../assets/warning.svg';

const NotificatioPopupDelete = ({ onDelete, onCancel }) => {
  //const [isPopupVisible, setPopupVisible] = useState(false);

//   // Toggle popup visibility
//   const handleDeleteClick = () => {
//     setPopupVisible(true);
//   };

  // Handle Confirm Deletion
  const confirmDelete = () => {
    onDelete();  // Call the parent onDelete action (actual delete operation)
  };

  // Handle Cancel Action
  const cancelDelete = () => {
    onCancel();  // Call the parent onCancel action (hide the popup)
  };

  return (
    <div>
      {/* Delete Notification Button
      <button onClick={handleDeleteClick} style={deleteButtonStyles}>
        Delete Notification
      </button> */}

      {/* Confirmation Popup */}
        <div className="popup-overlay fade-in">
          <div className="popup-content">
            <div className="popup-header">
                <img src={warningIcon} alt="Warning" className="popup-icon" />
                <h3>Confirm Deletion</h3>
            </div>
            <p>This action is irreversible. Are you sure you want to delete this notification?</p>
            <div className="popup-buttons">
              <button onClick={confirmDelete} className="confirm-button">Confirm</button>
              <button onClick={cancelDelete} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
    </div>
  );
};

// // Inline styles for the delete button
// const deleteButtonStyles = {
//   backgroundColor: '#007bff',  // Blue color
//   color: '#fff',
//   border: 'none',
//   padding: '10px 15px',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   fontSize: '16px'
// };

export default NotificatioPopupDelete;
