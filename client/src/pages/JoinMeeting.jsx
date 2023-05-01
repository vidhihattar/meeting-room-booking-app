import JoinMeetingCard from "../components/JoinMeetingCard"; 
// import { useState } from "react";
// import { useMeetingsContext } from '../hooks/useMeetingsContext'
// import { useAuthContext } from '../hooks/useAuthContext'
const JoinMeeting = () => {
    return (
        <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">Join Meeting</div>
            <JoinMeetingCard/>
        </div>
        </div>
    
    );
}

export default JoinMeeting;
