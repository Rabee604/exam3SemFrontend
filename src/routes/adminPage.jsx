import React from 'react';
import ApiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const AdminPage = () => {

        return (
            <div>
                {ApiFacade.getRoles() === "admin" ?
                    (<div>
                        <h1 className="title">Admin page</h1>
                    <div className="link-container">
                        <Link to="/createGuest">Create Guest</Link> |{" "}
                        <Link to="/createFestival">Create Festival</Link> |{" "}
                        <Link to="/createShow">Create Show</Link> |{" "}
                        <Link to="/deleteShow">Delete Show</Link> |{" "}
                        <Link to="/EditFestival">Edit Festival</Link> |{" "}
                    </div>
                    </div>)
                    :
                    (<h1 className="title">You are not an admin</h1>)
                }
            </div>
        );
};


export default AdminPage;