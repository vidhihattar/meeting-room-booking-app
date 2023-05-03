import React from 'react'

export default function MeetingModal({ isOpen, onClose, meeting }) {
    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>

            <div className="modal-content">
                <div className="create-meeting-heading">{meeting.title} </div>
                <p>This is the popup modal content.</p>
                <button className="modal-close" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 50 50" overflow="visible" stroke="black" stroke-width="10" stroke-linecap="round">
                        <line x2="50" y2="50" />
                        <line x1="50" y2="50" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
