import React from 'react'
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import {useMomContext} from "../hooks/useMomContext"
import MomCard from '../components/MomCard';

export default function Moms() {

    const { moms, dispatch } = useMomContext()
    const { user } = useAuthContext()
    useEffect(() => {
       
    
        const fetchMoms = async ()=>{
          const response = await fetch('/api/getmoms/', {
            headers: { 'Authorization': `Bearer ${user.token}` }
          });
    
          const json = await response.json();
    
          if (response.ok) {
    
            dispatch({ type: 'SET_MOMS', payload: json })
            console.log("response is ok");
    
          }
    
        }
    
        if (user) {
          fetchMoms()
        }
      }, [dispatch, user]);
  return (
    <div className="right-container">
    <div className="create-meeting-form-container">
        <div className="create-meeting-heading">Get MoMs <span></span></div>

        <div className="mom-cards-container">
        {moms && moms.map(mom => (
          <div key={mom._id}>
          <MomCard mom ={mom}/>
          </div>))}

        </div>

    </div>
</div>
  )
}
