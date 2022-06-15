import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";
const GetMyShows = () => {
    const [guest, setGuest]= useState([])
    const [isShown, setIsShown] = useState(false);
    const [show, setShow]= useState([])
    useEffect(()=>{
        const fetch = async ()=>{
            const allGuest= await apiFacade.allGuest();
            setGuest(allGuest);

        }
        fetch()


            .catch(console.error);;
    },[])

    const handleShow= async (name) => {

        const shows= await apiFacade.getMyShows(name);
        setShow(shows);
        setIsShown(true);

    }
    const hide=()=>{
        setIsShown(false);

    }
    return (
        <div>
            <h2> Show my Shows</h2>
            <div className="right aligned">
                <table className="<Table striped bordered hover size=sm">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Operation</th>
                    </tr>
                    </thead>
                    <tbody>

                    {guest.map((guests,i)=>{
                        return(
                            <tr key={i}>
                                <td> {guests.id}</td>
                                <td>{guests.name}</td>
                                <td><button type="button" onClick={() => handleShow(guests.name)}>My shows</button></td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>

            {isShown && (

                <div className="table-container">
                    <table className="<table table-light table-striped table-style">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Location</th>
                            <th scope="col">Start date</th>
                            <th scope="col">Start time</th>
                            <th scope="col">Operation</th>
                        </tr>
                        </thead>
                        <tbody>

                        {show.map((shows,index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index+1}</td>
                                    <td>{shows.name}</td>
                                    <td>{shows.duration}</td>
                                    <td>{shows.location}</td>
                                    <td>{shows.startTime}</td>
                                    <td>{shows.startDate}</td>

                                    <td><button variant="secondary" size="sm"onClick={() => hide()}>Hide</button></td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>

            )}

        </div>
    );
};

export default GetMyShows;