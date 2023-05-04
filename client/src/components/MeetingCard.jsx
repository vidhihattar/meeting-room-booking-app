
import { useState } from "react";
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

                   
                           <Link to={`/momlive?meetingid=${meeting._id}`}> <button  className="join-btn" >Join</button></Link>

              
                        

                    </div>

                </div>
            </div>
        </div>

    );
}

export default MeetingCard;

