
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"




function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
function formatTime(dateString) {
    const date = new Date(dateString);
    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString('en-US', options);
}


const MeetingCard = ({ meeting,onClick}) => {
    const { user } = useAuthContext()

    function JoinMeetingButtonState(meeting) {
        const [startTime, setStartTime] = useState(formatTime(meeting.start_time));
        const [endTime, setEndTime] = useState(formatTime(meeting.end_time));
        const [isButtonActive, setIsButtonActive] = useState(false);
    
        useEffect(() => {
          const intervalId = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString("en-US", {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            });
            const currentDate = new Date();
  
           if(formatDate(currentDate) === formatDate(meeting.date)){
            setIsButtonActive(currentTime >= formatTime(meeting.start_time) && currentTime <= formatTime(meeting.end_time));
          }
          }, 100); // Update every second
    
          return () => clearInterval(intervalId);
        }, [meeting.start_time]);
    
        return isButtonActive;
      }
    
      const isButtonEnabled = JoinMeetingButtonState(meeting);
  
    
    
    
    
    
    
    
    return (

        <div class="meeting-card " >

            <div class="meeting-header" onClick={onClick}>
                <div class="meeting-title">{meeting.title}</div>
                <div>{formatDate(meeting.date)}</div>
            </div>
            <div class="meeting-body">
                <div class="top-body">
                    <div class="meeting-host">
                        <div class="host">Host : </div><div>{user.email}</div>

                    </div>
                    <div class="meeting-time">
                        <div>{formatTime(meeting.start_time)} - {formatTime(meeting.end_time)} </div>
                    </div>
                </div>
                <div class="mid-body">
                    {meeting.description}

                </div>
                <div class="bottom-body">
                    <div class="meeting-room">
                        <div class="venue">Venue : </div>  <div>{meeting.room.name}</div>
                    </div>
                    <div className="btns">

                   
                           <Link to={`/momlive?meetingid=${meeting._id}`}> <button className={isButtonEnabled ? "card-button join-btn" : " join-button-disabled"} disabled={!isButtonEnabled}   >Join</button></Link>

              
                        

                    </div>

                </div>
            </div>
        </div>

    );
}

export default MeetingCard;

