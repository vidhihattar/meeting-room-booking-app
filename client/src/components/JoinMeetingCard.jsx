import React from 'react';

const JoinMeetingCard = () => {
    return (
        <div className="join-meeting-card">
        <div className="card-header">
          <h2 className="card-title">Meeting Name</h2>
          <p className="card-date">Date: <span>31st May, 2023</span></p>
        </div>
        <div className="card-body">
          <p className="card-host">Hosted by: <span>John Doe</span></p>
          <p className="card-time">Time: <span>10:00 AM - 11:30 AM</span></p>
          <p classNAme="card-venue">Venue: <span>Online</span></p>
        </div>
        <button className="card-button">Join Meeting</button>
      </div>
    );
}

export default JoinMeetingCard;
