const MeetingCard = () => {
    return (

        <div className="meeting-card">
            <div className="meeting-header">
                <div className="meeting-title">Meeting Title</div>
                <div>14/03/2023</div>
            </div>
            <div className="meeting-body">
                <div className="top-body">
                    <div className="meeting-host">
                        <div className="host">Host : </div>
                         Apoorv Mishra
                    </div>
                    <div className="meeting-time">
                        3:00 - 4:00
                    </div>
                </div>
                <div className="mid-body">
                    Description: consectetur adipiscing elit. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

                </div>
                <div className="bottom-body">
                    <div className="meeting-room">
                        <div className="venue">Venue : </div>  New Building  room 212
                    </div>

                </div>
            </div>
        </div>

    );
}

export default MeetingCard;

