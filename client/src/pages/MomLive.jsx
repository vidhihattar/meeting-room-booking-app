import React, { useState } from 'react';
import NotePad from '../components/MomLivePad';
import MomLivePad from '../components/MomLivePad';
import { useMeetingsContext } from "../hooks/useMeetingsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect } from "react";


const MomLive = () => {
    // const {meet, setMeet} = useState('');
    const { user } = useAuthContext()
    const urlSearchParams = new URLSearchParams(window.location.search);
    const meetingId = urlSearchParams.get('meetingid');

    var meeting = {}
    useEffect(() => {
        const fetchMeeting = async () => {
          const response = await fetch(`/api/meetings/${meetingId}`, {
            headers: { 'Authorization': `Bearer ${user.token}` }
          });
    
          const json = await response.json();
    
          if (response.ok) {
            meeting = json;
            console.log(json);
            console.log("response is ok");
    
          }
        }
    
    
         fetchMeeting()
      }, [meeting]);
     
  return (
    <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">MoM Creation</div>
    <div className="mom-live">
       
      
      <MomLivePad meeting={meeting}/>
    </div>
</div>
</div>
  );
};

export default MomLive;