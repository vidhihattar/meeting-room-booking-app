import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
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



 const JoinMeetingCard = ({meeting}) => {

  const urlSearchParams = new URLSearchParams(window.location.search);
  const meetingId = urlSearchParams.get('meetingid');


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
        <div className="join-meeting-card">
        <div className="card-header">
          <h2 className="card-title">{meeting.title}</h2>
          <p className="card-date"><span>{formatDate(meeting.date)}</span></p>
        </div>
        <div className="card-body">
          <p className="card-host">Host: <span>{meeting.host.name}</span></p>
          <p className="card-time"><span>{formatTime(meeting.start_time)} - {formatTime(meeting.end_time)}</span></p>
          
        </div>
        <div className="card-footer">
        <p className="card-venue">Venue:{meeting.room.name}</p>

       <Link to={`/momlive?meetingid=${meeting._id}`}> <button  className={isButtonEnabled ? "card-button" : "card-button-disabled"} disabled={!isButtonEnabled}>Join Now</button></Link>
        </div>
      </div>
    );

  };

export default JoinMeetingCard;
