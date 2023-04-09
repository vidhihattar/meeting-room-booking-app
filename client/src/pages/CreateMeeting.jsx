import { useState } from "react";
import { useMeetingsContext } from '../hooks/useMeetingsContext'
import { useAuthContext } from '../hooks/useAuthContext'


const CreateMeeting = () => {
    const {dispatch} = useMeetingsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [room, setRoom] = useState('');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const meeting = {title, date, startTime, endTime, room, description, attendees};

        const response = await fetch('/api/meetings', {
            method: 'POST',
            body: JSON.stringify(meeting),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setError(null);
            setTitle('');
            setDate('');
            setStartTime('')
            setEndTime('')
            setRoom('')
            setDescription('')
            setAttendees('')
            dispatch({type: 'CREATE_MEETING', payload: json})
            console.log('new meeting added:', json)
        }

    }

    const handleStartTime = (time) =>{
        var date = new Date().toLocaleDateString("en-US");
        var result = new Date(date + " " + time);
        console.log(result.toISOString());
        setStartTime(result.toISOString())
    }

    const handleEndTime = (time) =>{
        var date = new Date().toLocaleDateString("en-US");
        var result = new Date(date + " " + time);
        console.log(result.toISOString());
        setEndTime(result.toISOString())
    }




    return (
        <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">Create Meeting</div>
                <form className="create-meeting-form" onSubmit={handleSubmit}>

                    <label >Meeting Name:</label>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    /><br /><br />

                    <label >Date:</label>
                    <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date} /><br /><br />

                    <label >Start:</label>
                    <input
                        type="time"
                        onChange={(e) => handleStartTime(e.target.value)}
                        /*value={startTime}*/ /><br /><br />

                    <label>End:</label>
                    <input
                        type="time"
                        onChange={(e) => handleEndTime(e.target.value)}
                         /><br /><br />

                    <label >Location:</label>
                    <input
                        type="text"
                        onChange={(e) => setRoom(e.target.value)}
                        value={room} /><br /><br />

                    <label >Agenda:</label><br />
                    <textarea
                        rows="5" cols="40"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} ></textarea><br /><br />

                    <label>Attendees: </label>
                    <input
                        type="text"
                        onChange={(e) => setAttendees(e.target.value)}
                        value={attendees} /><br /><br />



                    <button>add</button>
                    {error && <div className="error">{error}</div>}


                </form>
            </div>

        </div>


    );
}

export default CreateMeeting;
