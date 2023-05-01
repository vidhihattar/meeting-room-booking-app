import React from 'react';

const JoinMeetingCard = () => {
    return (
        <div class="join_meeting_card">
        <div class="card-header">
          <h2 class="card-title">Meeting Name</h2>
          <p class="card-date">Date: <span>31st May, 2023</span></p>
        </div>
        <div class="card-body">
          <p class="card-host">Hosted by: <span>John Doe</span></p>
          <p class="card-time">Time: <span>10:00 AM - 11:30 AM</span></p>
          <p class="card-venue">Venue: <span>Online</span></p>
        </div>
        <button class="card-button">Join Meeting</button>
      </div>
    );
}

export default JoinMeetingCard;
