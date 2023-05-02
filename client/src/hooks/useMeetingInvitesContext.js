import { MeetingInvitesContext } from '../context/MeetingInvitesContext';
import { useContext } from "react"

export const useMeetingInvitesContext = () =>{
    const context = useContext(MeetingInvitesContext)

    if(!context){
        throw Error('useMeetingInvitesContext must be used inside an MeetingInvitesContextProvider')
    }
    return context;
}