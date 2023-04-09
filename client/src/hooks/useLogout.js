import { useAuthContext } from "./useAuthContext";
import {useMeetingsContext} from "./useMeetingsContext"

export const useLogout = ()=>{
    const {dispatch } = useAuthContext()
    const {dispatch : meetingsDispatch} = useMeetingsContext()

    const logout = () =>{
        localStorage.removeItem('user')

        dispatch({'type': 'LOGOUT'})
        meetingsDispatch({type: 'SET_MEETINGS', payload: null })
    }
    return {logout}
}