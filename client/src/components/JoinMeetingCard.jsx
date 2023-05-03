import React from 'react';
// import { useMeetingsContext } from '../hooks/useMeetingsContext'
// import { useAuthContext } from '../hooks/useAuthContext'
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
    return (
        <div className="join-meeting-card">
        <div className="card-header">
          <h2 className="card-title">{meeting.title}</h2>
          <p className="card-date"><span>{formatDate(meeting.date)}</span></p>
        </div>
        <div className="card-body">
          <p className="card-host">Host: <span>{meeting.host}</span></p>
          <p className="card-time"><span>{formatTime(meeting.start_time)} - {formatTime(meeting.end_time)}</span></p>
          
        </div>
        <div className="card-footer">
        <p classNAme="card-venue">Venue:{meeting.room.name}</p>
        <button className="card-button">Join Now</button>
        </div>
      </div>
    );
}

export default JoinMeetingCard;
