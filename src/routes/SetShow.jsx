import React, {useState} from 'react';
import "../create.css"
import apiFacade from "../apiFacade";

const SetShow = () => {
    const [showName, setShowName]=useState("");
    const [guestName,setGuestName]=useState("");

    const addMeToShow = async () => {
        await apiFacade.setShow(showName,guestName)


    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        setShowName("")
        setGuestName("")
    }

    return (
        <div className="create">
            <h1> Please write guests name and shows name</h1>

            <form onSubmit={handleSubmit}>
                <label>Shows Name:</label>
                <input
                    type="text"
                    required
                    value={showName}
                    onChange={(e) =>setShowName(e.target.value) }
                />
                <label>Guests name:</label>
                <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) =>setGuestName(e.target.value) }
                />

                <button onClick={addMeToShow}>Sign to show </button>

            </form>
        </div>
    );
};

export default SetShow;