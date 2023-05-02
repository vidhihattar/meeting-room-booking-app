import React, { useEffect } from 'react'
import MeetingCard from '../components/MeetingCard'
import { useMeetingInvitesContext } from "../hooks/useMeetingInvitesContext"
import { useAuthContext } from "../hooks/useAuthContext"


function MeetingInvites() {
  const { meetingInvites, dispatch } = useMeetingInvitesContext()
  const { user } = useAuthContext()

  useEffect(() => {
   

    
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

    fetchMeetingInvites()
    

  }, [dispatch, user])



  return (
    <div className="right-container">
      <div className="upcoming-meetings-container">
        <div className="upcoming-meetings-heading">Meeting Invites <span> </span></div>
        <div className="meeting-cards-container">

          {meetingInvites && meetingInvites.map(invite => (
            <MeetingCard meeting={invite} key={invite._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MeetingInvites