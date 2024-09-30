import './Notification.css'

import NotificationCard from '../components/NotificationCard'

export default function Notification() {
    return (
        <>
            <h1>Notifications</h1>
            <div className="notificationBody" >   
                <div className="notificationCardList" >
                    <div className="notificationFilterBy">
                        <p className="p-filter">Filter</p>
                        <div className="buttonlist">
                            <button className="button-filter">All</button>
                            <button className="button-filter">Unread</button>
                            <button className="button-filter">Alerts</button>
                            <button className="button-filter">Leave</button>
                        </div>                  
                    </div>
                    <NotificationCard content="You have 5 days vacation!"/>
                    <NotificationCard content="You have 5 days vacation!"/>
                    <NotificationCard content="You have 5 days vacation!"/>
                    <NotificationCard content="You have 5 days vacation!"/>
                </div>
                
                {/* <div className="notificationDetails">
                    <div> Hello World</div>
                </div> */}
            </div>      
        </>
    )
}