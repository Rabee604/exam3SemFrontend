import React, {useState} from 'react';
import "../create.css"
import apiFacade from "../apiFacade";
const CreatGuest = () => {
    const [name, setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [status,setStatus]=useState("");
    const [guest,setGuest]=useState("");

    const createANewGuest = async () => {
       await apiFacade.createGuest(name,phone,email,status);

    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        setName("")
        setPhone("")
        setEmail("")
        setStatus("")
    }
    return (

        <div className="create">
            <h1> Create a Guest</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) =>setName(e.target.value) }
                />
                <label>Phone:</label>
                <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) =>setPhone(e.target.value) }
                />
                <label>Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) =>setEmail(e.target.value) }
                />
                <label>Status:</label>
                <input
                    type="text"
                    required
                    value={status}
                    onChange={(e) =>setStatus(e.target.value) }
                />

                <button onClick={createANewGuest}>New Guest</button>

            </form>
        </div>
    );
};

export default CreatGuest;