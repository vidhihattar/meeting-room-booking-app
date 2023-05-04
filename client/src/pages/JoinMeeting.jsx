import JoinMeetingCard from "../components/JoinMeetingCard"; 
// import { useState } from "react";
import { useEffect } from "react";

import { useMeetingsContext } from "../hooks/useMeetingsContext"
import { useAuthContext } from "../hooks/useAuthContext"
const JoinMeeting = () => {
    const { meetings, dispatch } = useMeetingsContext()
    const { user } = useAuthContext()
 
    useEffect(() => {
        const fetchMeetings = async () => {
          const response = await fetch('/api/meetings/', {
            headers: { 'Authorization': `Bearer ${user.token}` }
          });
    
          const json = await response.json();
    
          if (response.ok) {
    
            dispatch({ type: 'SET_MEETINGS', payload: json })
            console.log("response is ok");
    
          }
        }
    
   
          
          fetchMeetings()
    
      }, [dispatch]);
    return (

        <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">Join Meeting</div>
               
          <div className="Join-meeting-container">  {meetings && meetings.map(meeting => (
            <JoinMeetingCard meeting={meeting} key={meeting._id}/>
            
          ))}
          </div>
          </div>
        </div>
        
    
    );
}

export default JoinMeeting;
