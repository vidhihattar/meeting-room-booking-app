import React, { useState } from 'react';
import NotePad from '../components/MomLivePad';
import MomLivePad from '../components/MomLivePad';
import { useMeetingsContext } from "../hooks/useMeetingsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect } from "react";


const MomLive = () => {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const meetingId = urlSearchParams.get('meetingid');

    
    
     
  return (
    <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">MoM Creation</div>
    <div className="mom-live">
      <MomLivePad meetingId={meetingId}/>
    </div>
</div>
</div>
  );
};

export default MomLive;