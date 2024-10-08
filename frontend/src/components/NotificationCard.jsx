import './NotificationCard.css';

export default function NotificationCard(props) {
    return (
        <div className="notificationcard">
            <div className="icon"></div>
            <div className="content">
                <div className="header">
                    <span className="date">{props.content.date}</span>
                    <span className="title">{props.content.title}</span>
                </div>
                <div className="message">
                    <p>{props.content.message}</p>
                </div>
            </div>
            <button className="read-button">Read</button>
            <button className="delete-button">Delete</button>
        </div>
    )
}