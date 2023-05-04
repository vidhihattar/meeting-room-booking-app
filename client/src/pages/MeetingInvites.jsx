import React, { useEffect, useState } from 'react'
import MeetingInviteCard from '../components/MeetingInviteCard'
import { useMeetingInvitesContext } from "../hooks/useMeetingInvitesContext"
import { useAuthContext } from "../hooks/useAuthContext"



function MeetingInvites() {
  const { meetingInvites, dispatch } = useMeetingInvitesContext()
  const { user } = useAuthContext()
  
  const fetchMeetingInvites = async () => {
    const response = await fetch(`/api/meetinginvites/`, {
      headers: { 'Authorization': `Bearer ${user.token}` }
    });

    const json = await response.json();

    if (response.ok) {

      dispatch({ type: 'SET_MEETING_INVITES', payload: json })
      console.log("response is ok");

    }
  }

  useEffect(() => {
   
    fetchMeetingInvites()

  }, [dispatch, user])

  const handleAcceptDeny = async (buttonText, meetingId) => {
    if (buttonText == "Accept") {
        const status = "Accepted";

        console.log(meetingId);



        const response = await fetch(`/api/meetinginvites/attendees/${meetingId}`, {
            method: 'PUT',
            body: JSON.stringify({ status: status }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
          console.log(json);
          fetchMeetingInvites();
          
        }

        if (!response.ok) {
            console.log(json.error)
        }

    }
    else {
        const status = "Denied";



        const response = await fetch(`/api/meetinginvites/attendees/${meetingId}`, {
            method: 'PUT',
            body: JSON.stringify({ status: status }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
          console.log(json);
          fetchMeetingInvites();
         
        }

        if (!response.ok) {
            console.log(json.error)
        }

    }


}

  return (
    <div className="right-container">
      <div className="upcoming-meetings-container">
        <div className="upcoming-meetings-heading">Meeting Invites <span> </span></div>
        <div className="meeting-cards-container">

          {meetingInvites && meetingInvites.map(invite => (
            <div key={invite._id}>
          
            
            <MeetingInviteCard 
              meeting={invite}  
              handleAcceptDeny={handleAcceptDeny} 
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  )



}

export default MeetingInvites