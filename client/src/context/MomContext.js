import { createContext, useReducer } from 'react'

export const MomContext = createContext()


export const momsReducer = (state, action) => {

    switch (action.type) {
        case 'SET_MOMS':
            return {
          
                moms: action.payload
            }

        case 'CREATE_MOM':
            return {
                ...state,
                moms: [action.payload, ...state.moms]
            }

        default:
            return state
    }
}

export const MomContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(momsReducer, {
        moms: []
    })

    return (
        <MomContext.Provider value={{ ...state, dispatch }}>
            {children}
        </MomContext.Provider>
    )
}