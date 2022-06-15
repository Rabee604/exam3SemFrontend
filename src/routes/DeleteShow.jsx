import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";

const DeleteShow = () => {

    const [show, setShows]= useState([])
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        const fetch = async ()=>{
            const allShow= await apiFacade.allShows();
            setShows(allShow);

        }
        fetch()


            .catch(console.error);
    },[load])


    const handleRemove=async (id) => {
       await apiFacade.deleteShow(id)
        setLoad(!load);
    }
    return (
        <div>
            <h1> Choose a show to delete</h1>
            <div className="table-container">
                <table className="table table-light table-striped table-style">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Location</th>
                        <th scope="col">Start date</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">Operation</th>
                    </tr>
                    </thead>
                    <tbody>

                    {show.map((shows,index)=>{
                        return(
                            <tr key={index}>
                                <td> {shows.id}</td>
                                <td>{shows.name}</td>
                                <td>{shows.duration}</td>
                                <td>{shows.location}</td>
                                <td>{shows.startDate}</td>
                                <td>{shows.startTime}</td>
                                <td><button type="button" onClick={() => handleRemove(shows.id)}>Delete</button></td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteShow;