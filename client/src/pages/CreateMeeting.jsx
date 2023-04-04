
const CreateMeeting = () => {
    return (
        <div className="right-container">
            <div className="create-meeting-form-container">
                <div className="create-meeting-heading">Create Meeting</div>
                <form className="create-meeting-form">

                    <label for="meeting-name">Meeting Name:</label>
                    <input type="text" id="meeting-name" name="meeting-name" /><br /><br />

                    <label for="date">Date:</label>
                    <input type="date" id="date-time" name="date-time" /><br /><br />

                    <label for="time">Start:</label>
                    <input type="time" id="date-time" name="date-time" /><br /><br />

                    <label for="time">End:</label>
                    <input type="time" id="date-time" name="date-time" /><br /><br />

                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location" /><br /><br />

                    <label for="agenda">Agenda:</label><br />
                    <textarea id="agenda" name="agenda" rows="5" cols="40"></textarea><br /><br />

                    <label class="custom-field one">
                        <input type="text" placeholder=" " />
                        <span class="placeholder">Enter Text</span>
                    </label>

                    <button>add</button>


                </form>
            </div>

        </div>


    );
}

export default CreateMeeting;
