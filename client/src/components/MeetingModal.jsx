import React from 'react'


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
                        <div className="modal-left-container-elements">
                            {/* <div className='svg-h3'> */}
                            {/* <svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 500 512.44"><path  fill-rule="nonzero" d="M330.56 302.52c8.23 0 14.9 6.61 14.9 14.75 0 8.15-6.67 14.75-14.9 14.75H109.79c-8.23 0-14.9-6.6-14.9-14.75 0-8.14 6.67-14.75 14.9-14.75h220.77zM440.34 61.29h18.94c11.21 0 21.4 4.58 28.77 11.95l.95 1.04c6.81 7.3 11 17.06 11 27.73v369.71c0 11.17-4.59 21.35-11.98 28.74-7.34 7.4-17.53 11.98-28.74 11.98H100.37c-11.15 0-21.32-4.58-28.71-11.95l-.06-.05c-7.38-7.43-11.94-17.58-11.94-28.72v-20.57H40.72c-11.15 0-21.32-4.58-28.71-11.94l-.06-.06C4.57 431.73 0 421.57 0 410.44V40.72C0 29.57 4.58 19.4 11.95 12.01l.06-.06C19.43 4.57 29.58 0 40.72 0h358.91c11.21 0 21.4 4.58 28.77 11.95l.94 1.04c6.81 7.3 11 17.06 11 27.73v20.57zM70.84 421.21a14.8 14.8 0 0 1 3.79-.48c1.31 0 2.57.16 3.78.48h321.22c2.94 0 5.64-1.22 7.59-3.18 1.98-1.91 3.18-4.61 3.18-7.59V40.72c0-2.73-1-5.21-2.63-7.09l-.55-.51c-1.95-1.96-4.65-3.18-7.59-3.18H40.72c-2.98 0-5.68 1.2-7.6 3.12l-.06.06a10.712 10.712 0 0 0-3.12 7.6v369.72c0 2.98 1.2 5.68 3.12 7.59l.06.06a10.73 10.73 0 0 0 7.6 3.12h30.12zm18.76 29.94v20.57c0 2.99 1.2 5.69 3.12 7.6l.06.06c1.91 1.92 4.61 3.12 7.59 3.12h358.91c2.94 0 5.64-1.22 7.6-3.18 1.98-1.91 3.18-4.61 3.18-7.6V102.01c0-2.73-1-5.21-2.64-7.09l-.54-.51c-1.96-1.96-4.66-3.18-7.6-3.18h-18.94v319.21c0 11.16-4.59 21.34-11.97 28.74-7.34 7.39-17.53 11.97-28.74 11.97H89.6zm240.96-332.02c8.23 0 14.9 6.61 14.9 14.75 0 8.15-6.67 14.76-14.9 14.76H109.79c-8.23 0-14.9-6.61-14.9-14.76 0-8.14 6.67-14.75 14.9-14.75h220.77zm0 91.7c8.23 0 14.9 6.6 14.9 14.75s-6.67 14.75-14.9 14.75H109.79c-8.23 0-14.9-6.6-14.9-14.75s6.67-14.75 14.9-14.75h220.77z"/></svg> */}
                            <h3>Description:</h3>

                            {/* </div> */}
                           
                            <div className="description">{meeting.description}</div>

                        </div>
                        <div className="modal-left-container-elements">
                            {/* <div className="svg-h3"> */}
                            {/* <svg height="15px" width="15px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.89"><title>date</title><path d="M81.61,4.73C81.61,2.12,84.19,0,87.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM66.11,105.66c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1ZM15.85,68.94c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14-10.1H107c.8,0,.8,10.1,0,10.1H91.25c-.8,0-.8-10.1,0-10.1ZM15.85,87.3c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1ZM41,87.3c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14,0c-.8,0-.8-10.1,0-10.1H107c.8,0,.8,10.1,0,10.1Zm-75.4,18.36c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,43.47H116.47v-22a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,0,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.09a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.55V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07v22Zm110.08,6.41H6.4v63.67a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.55a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V49.88ZM50.43,18.54a3.2,3.2,0,0,1,0-6.4H71.92a3.2,3.2,0,1,1,0,6.4Z"/></svg> */}
                                <h3>Date:</h3>
                            {/* </div> */}
                            
                            <div className="date">{formatDate(meeting.date)} </div>

                        </div>
                        <div className="modal-left-container-elements">

                            <h3>Timmings:</h3>
                            <div className="time">{formatTime(meeting.start_time)} - {formatTime(meeting.end_time)} </div>

                        </div>
                        <div className="modal-left-container-elements">
                            <h3>Host</h3>
                            <div className="host">John Doe</div>

                        </div>





                    </div>
                    <div className="modal-right-container">
                        <div className="modal-right-container-elements">
                            <h3>Meeting Invites Status</h3>
                            <div className='inner-elements'>
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
        </div>
    );
}
