import { createContext, useReducer } from 'react'

export const MeetingInvitesContext = createContext()

export const meetingInvitesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEETING_INVITES':
            return {

                meetingInvites: action.payload
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