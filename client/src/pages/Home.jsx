import { useEffect } from "react";
import MeetingCard from '../components/MeetingCard';
import MomCard from '../components/MomCard';

import { useMeetingsContext } from "../hooks/useMeetingsContext"

const Home = () => {

  const { meetings, dispatch } = useMeetingsContext()

  useEffect(()=>{
    const fetchMeetings = async()=>{
        const response = await fetch('/api/meetings/');

        const json = await response.json();

        if(response.ok){
            dispatch({type: 'SET_MEETINGS', payload: json})
            console.log(json);
        }
    }

    fetchMeetings();
}, [dispatch]);


    return (
        <div className="right-container">
        <div className="upcoming-meetings-container">
          <div className="upcoming-meetings-heading">Upcoming Meetings</div>
          <div className="meeting-cards-container">

          {meetings && meetings.map(meeting => (
                    <MeetingCard meeting= {meeting} key = {meeting._id} />
                ))}
          </div>

        </div>
        <hr />
        <div className="mom-container">
          <div className="mom-heading">MoMs</div>
          <div className="mom-cards-container">
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
            <MomCard />
          </div>
        </div>

      </div>
    );
}
 
export default Home;