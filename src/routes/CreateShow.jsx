import React, {useState} from 'react';
import "../create.css"
import apiFacade from "../apiFacade";

const CreateShow = () => {
    const [name, setName]=useState("");
    const [duration,setDuration]=useState("");
    const [location,setLocation]=useState("");
    const [startDate,setStartDate]=useState("");
    const [startTime,setStartTime]=useState("");
    const createANewShow = async () => {
        await apiFacade.createAShow(name,duration,location,startDate,startTime);

    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        setName("")
        setDuration("")
        setLocation("")
        setStartDate("")
        setStartTime("")
    }
    return (

        <div className="create">
            <h1> Create a Show</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) =>setName(e.target.value) }
                />
                <label>Duration:</label>
                <input
                    type="text"
                    required
                    value={duration}
                    onChange={(e) =>setDuration(e.target.value) }
                />
                <label>Location:</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) =>setLocation(e.target.value) }
                />
                <label>Start Date:</label>
                <input
                    type="text"
                    required
                    value={startDate}
                    onChange={(e) =>setStartDate(e.target.value) }
                />
                <label>Start Time:</label>
                <input
                    type="text"
                    required
                    value={startTime}
                    onChange={(e) =>setStartTime(e.target.value) }
                />

                <button onClick={createANewShow}>add Show</button>

            </form>
        </div>
    );
};

export default CreateShow;