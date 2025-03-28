import './ComponentStyles.css'
import warningIcon from '../assets/warning.svg';

const NotificatioPopupDelete = ({ onDelete, onCancel }) => {

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

export default NotificatioPopupDelete;
