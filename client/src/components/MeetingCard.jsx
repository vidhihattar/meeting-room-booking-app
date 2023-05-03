import { useState } from "react";
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


const MeetingCard = ({ meeting, home, onClick }) => {
    const { user } = useAuthContext()
    

    const handleClick = async (e) => {
        const buttonText = e.target.innerText;
        if (buttonText == "Accept") {
            const status = "Accepted";
            const meetingId = meeting._id;



            const response = await fetch(`/api/meetinginvites/attendees/${meetingId}`, {
                method: 'PUT',
                body: JSON.stringify({status: status}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                    }
                })

                const json = await response.json()

                if (!response.ok) {
                    console.log(json.error)
                }
                if (response.ok) {
                    console.log(json);
                }

        }
        else {
            const status = "Denied";

        }


    }


    return (

        <div class="meeting-card " onClick={onClick}>

            <div class="meeting-header">
                <div class="meeting-title">{meeting.title}</div>
                <div>{formatDate(meeting.date)}</div>
            </div>
            <div class="meeting-body">
                <div class="top-body">
                    <div class="meeting-host">
                        <div class="host">Host : </div><div>{user.email}</div>

                    </div>
                    <div class="meeting-time">
                        <div>{formatTime(meeting.start_time)} - {formatTime(meeting.end_time)} </div>
                    </div>
                </div>
                <div class="mid-body">
                    {meeting.description}

                </div>
                <div class="bottom-body">
                    <div class="meeting-room">
                        <div class="venue">Venue : </div>  <div>{meeting.room.name}</div>
                    </div>
                    <div className="btns">
                        {home ? (
                            <button className="join-btn">Join</button>
                        ) : (
                            <div>
                                <button className="accept-btn" onClick={handleClick}>Accept</button>
                                <button className="deny-btn" onClick={handleClick}>Deny</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>

    );
}

export default MeetingCard;

