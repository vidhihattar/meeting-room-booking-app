import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext"



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


const MeetingInviteCard = ({ meeting, handleAcceptDeny }) => {
    const meetingId = meeting._id;
    const { user } = useAuthContext();


    const attendeeEmail = user.email;
    const attendee = meeting.attendees.find((att) => att.name === attendeeEmail);

    const status = attendee.status
    // rest of the code











    return (
        <div className="meeting-card" >
            <div className="meeting-header">
                <div className="meeting-title">{meeting.title}</div>
                <div>{formatDate(meeting.date)}</div>
            </div>
            <div className="meeting-body">
                <div className="top-body">
                    <div className="meeting-host">
                        <div className="host">Host:</div>
                        <div>{meeting.host.name}</div>
                    </div>
                    <div className="meeting-time">
                        <div>{formatTime(meeting.start_time)} - {formatTime(meeting.end_time)}</div>
                    </div>
                </div>
                <div className="mid-body">{meeting.description}</div>
                <div className="bottom-body">
                    <div className="meeting-room">
                        <div className="venue">Venue:</div>
                        <div>{meeting.room.name}</div>
                    </div>
                    <div className="btns">
                        {status === 'Accepted' ? (
                            <button className="accepted-btn">Accepted</button>
                        ) : status === 'Denied' ? (
                            <button className="denied-btn">Denied</button>
                        ) : status === 'pending' ? (
                            <div>
                                <button className="accept-btn" onClick={(e) => handleAcceptDeny(e.target.innerText, meeting._id)}>
                                    Accept
                                </button>
                                <button className="deny-btn" onClick={(e) => handleAcceptDeny(e.target.innerText, meetingId)}>
                                    Deny
                                </button>
                            </div>
                        ) : null}
                    </div>

                </div>
            </div>
        </div>
    );

}
export default MeetingInviteCard;

