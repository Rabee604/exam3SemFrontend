import React from 'react';
import ApiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const UserPage = props => {
    return (
        <div>
            {ApiFacade.getRoles() === "user" ?
                (<div>
                    <h1 className="title">User page</h1>

                <div className="link-container">
                    <Link to="/getAllShows">All Shows</Link> |{" "}
                    <Link to="/getMyShows">My Shows</Link> |{" "}
                    <Link to="/getMyShows">My Shows</Link> |{" "}
                    <Link to="/SetShow">sign med to a show</Link> |{" "}

                </div>


                </div>)
                :
                (<h1>You are not a user</h1>)
            }
        </div>
    );
};


export default UserPage;