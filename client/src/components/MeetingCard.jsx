import { useAuthContext } from "../hooks/useAuthContext"

const MeetingCard = ({meeting}) => {
    const {user} = useAuthContext()
    return (

        <div class="meeting-card">
    
        <div class="meeting-header">
            <div class="meeting-title">{meeting.title}</div>
            <div>{meeting.date}</div>
        </div>
        <div class="meeting-body">
            <div class="top-body">
                <div class="meeting-host">
                    <div class="host">Host : {user.email}</div>
                  
                </div>
                <div class="meeting-time">
                    <div>{meeting.start_time} </div>
                </div>
            </div>
            <div class="mid-body">
                {meeting.description}
               
            </div>
            <div class="bottom-body">
                <div class="meeting-room">
                    <div class="venue">Venue : </div>  {meeting.room.name}
                </div>
    
            </div>
        </div>
    </div>

    );
}

export default MeetingCard;

