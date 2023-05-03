import React from 'react'

export default function MeetingModal({ isOpen, onClose, meeting }) {
    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>

            <div className="modal-content">
                <div className="modal-heading">{meeting.title} </div>
                <button className="modal-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 50 50" overflow="visible" stroke="black" stroke-width="10" stroke-linecap="round">
                        <line x2="50" y2="50" />
                        <line x1="50" y2="50" />
                    </svg>
                </button>
                <div className='modal-body'>
                    <div className="modal-left-container">
                        <h3>Description:</h3>
                        <div className="description">{meeting.description}</div>
                        <h3>Date:</h3>
                        <div className="date">{meeting.date} </div>
                        <h3>Timmings:</h3>
                        <div className="time">{meeting.start_time} - {meeting.end_time} </div>
                        <h3>Host</h3>
                        <div className="host">John Doe</div>

                    </div>
                    <div className="modal-right-container">
                        <h3>Meeting Invites Status</h3>
                        <div>
                            {meeting.attendees.map((attendee) => {
                                return (<div className='status-div'>
                                    
                                    <div>{attendee.name}</div>
                                    <div>{attendee.status}</div>

                                </div>);

                            })}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
