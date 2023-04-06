import { MeetingsContext } from '../context/MeetingsContext';
import { useContext } from "react"

export const useMeetingsContext = () =>{
    const context = useContext(MeetingsContext)

    if(!context){
        throw Error('useMeetingsContext must be used inside an MeetingsContextProvider')
    }
    return context;
}