import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";

const GetAllShows = () => {
    const [show, setShow]=useState([])

    useEffect(()=>{
        const fetch= async() =>{
            const allShows = await apiFacade.allShows();
            setShow(allShows)
        }
        fetch()

        },[])
    return (
        <div>
            <h1>All shows</h1>


            <div className="table-container">
                <table className="table table-light table-striped table-style">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">duration</th>
                        <th scope="col">Location</th>
                        <th scope="col">Start date</th>
                        <th scope="col">Start time</th>
                    </tr>
                    </thead>
                    <tbody>

                    {show.map((shows, index) => {
                        return(
                            <tr key={index}>
                                <td> {index+1}</td>
                                <td>{shows.name}</td>
                                <td>{shows.duration}</td>
                                <td>{shows.location}</td>
                                <td>{shows.startDate}</td>
                                <td>{shows.startTime}</td>

                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GetAllShows;