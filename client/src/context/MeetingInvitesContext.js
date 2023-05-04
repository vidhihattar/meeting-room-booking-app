import { createContext, useReducer } from 'react'

export const MeetingInvitesContext = createContext()

export const meetingInvitesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEETING_INVITES':
            return {
                ...state,
                meetingInvites: action.payload
            }

        case 'UPDATE_ATTENDEE_STATUS':
            const meetingInvites = state.meetingInvites || [] // handle null or undefined case
            const updatedMeetingInvites = meetingInvites.map(meetingInvite => {
                if (meetingInvite._id === action.payload.meetingId) {
                    const attendees = meetingInvite.attendees || [] // handle null or undefined case
                    const updatedAttendees = attendees.map(attendee => {
                        if (attendee._id === action.payload.attendeeId) {
                            attendee.status = action.payload.status
                        }
                        return attendee
                    })
                    meetingInvite.attendees = updatedAttendees
                }
                return meetingInvite
            })
            return {
                ...state,
                meetingInvites: updatedMeetingInvites
            }
        default:
            return state
    }
}


export const MeetingInvitesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(meetingInvitesReducer, {
        meetingInvites: null
    })
    return (
        <MeetingInvitesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </MeetingInvitesContext.Provider>
    )
}