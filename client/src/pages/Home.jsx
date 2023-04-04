import MeetingCard from '../components/MeetingCard';
import MomCard from '../components/MomCard';

const Home = () => {
    return (
        <div className="right-container">
        <div className="upcoming-meetings-container">
          <div className="upcoming-meetings-heading">Upcoming Meetings</div>
          <div className="meeting-cards-container">
          <MeetingCard />
          <MeetingCard />
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