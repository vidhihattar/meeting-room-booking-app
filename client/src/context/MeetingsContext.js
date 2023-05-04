import { createContext, useReducer } from 'react'

export const MeetingsContext = createContext()

export const meetingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEETINGS':
            return {

                meetings: action.payload
            }

        case 'CREATE_MEETING':
            return {
                ...state,
                meetings: [action.payload, ...state.meetings]
            }

        case 'DELETE_MEETING':
            return {
                meetings: state.meetings.filter((m) => m._id !== action.payload._id)
            }

        case 'SET_MEETING':
            return {
                meeting: action.payload
            }

        default:
            return state
    }


}

export const MeetingsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(meetingsReducer, {
        meetings: null
    })

    return (
        <MeetingsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </MeetingsContext.Provider>
    )
}