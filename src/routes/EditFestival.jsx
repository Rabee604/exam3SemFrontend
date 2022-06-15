import React, {useState} from 'react';
import "../create.css"
import apiFacade from "../apiFacade";

const EditFestival = () => {
    const [name, setName]=useState("");
    const [city,setCity]=useState("");
    const [startDate,setStartDate]=useState("");
    const [duration,setDuration]=useState("");
    const editFestival = async () => {
        await apiFacade.editFestival(name, city, startDate, duration)
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        setName("")
        setCity("")
        setStartDate("")
        setDuration("")
    }


    return (
        <div className="create">
            <h1> Edit a Festival</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) =>setName(e.target.value) }
                />
                <label>City:</label>
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) =>setCity(e.target.value) }
                />
                <label>Start Date:</label>
                <input
                    type="text"
                    required
                    value={startDate}
                    onChange={(e) =>setStartDate(e.target.value) }
                />
                <label>duration:</label>
                <input
                    type="text"
                    required
                    value={duration}
                    onChange={(e) =>setDuration(e.target.value) }
                />

                <button onClick={editFestival }>Edit Festival</button>

            </form>
        </div>
    );
};

export default EditFestival;