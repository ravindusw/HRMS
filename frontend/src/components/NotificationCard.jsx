import './NotificationCard.css';

export default function NotificationCard(props) {
    return (
        <div className="notificationcard">
            <div className="icon"></div>
            <div className="content">
                <div className="header">
                    <span className="date">12/10/2024</span>
                    <span className="title">Title</span>
                </div>
                <div className="message">
                    <p>{props.content}</p>
                </div>
            </div>
            <button className="read-button">Read</button>
            <button className="delete-button">Delete</button>
        </div>
    )
}