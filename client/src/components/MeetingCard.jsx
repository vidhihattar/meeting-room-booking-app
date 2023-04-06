const MeetingCard = ({meeting}) => {
    return (

        <div className="meeting-card">
            <div className="meeting-header">
                <div className="meeting-title">{meeting.title}</div>
                <div>{meeting.date}</div>
            </div>
            <div className="meeting-body">
                <div className="top-body">
                    <div className="meeting-host">
                        <div className="host">Host : </div>
                      
                    </div>
                    <div className="meeting-time">
                        <div>{meeting.start_time} - {meeting.end_time}</div>
                    </div>
                </div>
                <div className="mid-body">
                    {meeting.description}

                </div>
                <div className="bottom-body">
                    <div className="meeting-room">
                        <div className="venue">Venue : </div>  {meeting.room}
                    </div>

                </div>
            </div>
        </div>

    );
}

export default MeetingCard;

