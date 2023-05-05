import { MomContext } from '../context/MomContext';
import { useContext } from "react"

export const useMomContext = () =>{
    const context = useContext(MomContext)

    if(!context){
        throw Error('useMomContext must be used inside an MomContextProvider')
    }
    return context;
}