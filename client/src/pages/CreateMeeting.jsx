import { useState, useEffect } from "react";
import { useMeetingsContext } from '../hooks/useMeetingsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useUsersContext } from '../hooks/useUsersContext'
import { useRoomsContext } from '../hooks/useRoomsContext'

const CreateMeeting = () => {
    const { dispatch } = useMeetingsContext()
    const { dispatch: usersDispatch } = useUsersContext()
    const { dispatch: roomsDispatch } = useRoomsContext();
    const { user } = useAuthContext()
    const { users } = useUsersContext()
    const { rooms } = useRoomsContext()
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState({ _id: '', name: 'None selected' });

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [room, setRoom] = useState({});
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const roomId = selectedRoom._id;

        const meeting = {
            title,
            date,
            start_time: startTime,
            end_time: endTime,
            room: {
                id: selectedRoom._id,
                name: selectedRoom.name,
            },
            description,
            attendees: attendees,
        };
        console.log(meeting)

        const start = new Date(startTime);
        const end = new Date(endTime);
        const durationMs = end.getTime() - start.getTime();
        const durationMin = Math.floor(durationMs / (1000 * 60));

        const response = await fetch('/api/meetings', {
            method: 'POST',
            body: JSON.stringify(meeting),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null);
            setTitle('');
            setDate('');
            setStartTime('')
            setEndTime('')
            setRoom({})
            setDescription('')
            setAttendees('')
            setSelectedUsers([]);
            setSelectedRoom({});
            dispatch({ type: 'CREATE_MEETING', payload: json })
            console.log('new meeting added:', json)






            const roomResponse = await fetch(`/api/room/${roomId}`, {
                method: 'PUT',
                body: JSON.stringify({ isBooked: true, duration: durationMin }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const roomJson = await roomResponse.json();

            if (!roomResponse.ok) {
                // handle error
            }

            console.log('room updated:', roomJson);
        }

    }

    const handleStartTime = (time) => {
        var date = new Date().toLocaleDateString("en-US");
        var result = new Date(date + " " + time);

        setStartTime(result.toISOString())
    }

    const handleEndTime = (time) => {
        var date = new Date().toLocaleDateString("en-US");
        var result = new Date(date + " " + time);

        setEndTime(result.toISOString())
    }


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users/', {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });

            const json = await response.json();

            if (response.ok) {

                usersDispatch({ type: 'SET_USERS', payload: json })


            }
        }

        const fetchRooms = async () => {
            const response = await fetch('/api/room/', {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });

            const json = await response.json();

            if (response.ok) {
                roomsDispatch({ type: 'SET_ROOMS', payload: json })

            }
        }


        fetchUsers()
        fetchRooms()
    }, [usersDispatch, roomsDispatch, room]);

    useEffect(() => {
        const attendeesArray = selectedUsers.map((user) => ({ id: user._id, name: user.email }));
        setAttendees(attendeesArray);
        setRoom(selectedRoom);
    }, [selectedUsers, selectedRoom]);

    const handleUserSelect = (e) => {
        const userId = e.target.value;
        const user = users.find((user) => user._id === userId);
        setSelectedUsers([...selectedUsers, user]);
    };

    const handleRoomSelect = (e) => {
        const roomId = e.target.value;
        const room = rooms.find((room) => room._id === roomId);
        console.log(room);
        setSelectedRoom(room);
        console.log(selectedRoom.name);

    };


    const handleUserRemove = (userId) => {
        setSelectedUsers(selectedUsers.filter((user) => user._id !== userId));
    };


    return (
        <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">Create Meeting <span></span></div>

                <form className="create-meeting-form" onSubmit={handleSubmit}>
                    <div className="form-container">

                        <div className="form-container-left">

                            <label >Meeting Name:</label>
                            <input
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />

                            <br />
                            <br />
                            <label >Agenda:</label>
                            <textarea
                                rows="10" cols="40"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description} >

                            </textarea>

                            <br />
                            <br />
                            <label >Meeting Room:</label>
                            <div className="select-container">
                                <select onChange={handleRoomSelect} value={selectedRoom._id}>
                                    <option value="">Select Room</option>
                                    {rooms &&
                                        rooms.map((room) => (
                                            <option key={room._id} value={room._id}>
                                                {room.name}
                                            </option>
                                        ))
                                    }
                                </select>

                            </div>

                            <br />
                            <br />
                            <label >Attendees:</label>
                            <div className="selected-users-container">
                                <select id="user-select" onChange={handleUserSelect} value={selectedUsers}>
                                    <option >
                                        Select Users
                                    </option>
                                    {users &&
                                        users.map((user) => (
                                            <option key={user._id} value={user._id}>
                                                {user.email}
                                            </option>
                                        ))}
                                </select>

                            </div>

                        </div>

                        <div className="form-container-right">
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

                            <div className="selected-users-container">
                                {selectedUsers && selectedUsers.map((user) => (
                                    <div key={user._id} className="selected-users">
                                        <span>{user.email}</span>
                                        <button onClick={() => handleUserRemove(user._id)} className="user-remove-btn"></button>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                    <div>
                        <button>Create Meeting</button>
                        {error && <div className="error">{error}</div>}

                    </div>


                </form>











            </div>

        </div>


    );
}

export default CreateMeeting;
