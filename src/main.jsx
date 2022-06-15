import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Welcome from "./routes/welcome";
import UserPage from "./routes/userPage";
import AdminPage from "./routes/adminPage";
import ApiFacade from "./apiFacade";
import Jokes from "./routes/jokes";
import GetAllShows from "./routes/GetAllShows";
import GetMyShows from "./routes/GetMyShows";
import CreatGuest from "./routes/CreatGuest";
import CreateFestival from "./routes/CreateFestival";
import CreateShow from "./routes/CreateShow";
import DeleteShow from "./routes/DeleteShow";
import SetShow from "./routes/SetShow";
import EditFestival from "./routes/EditFestival";



const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/userpage" element={<UserPage/>}/>
                <Route path="/adminpage" element={<AdminPage/>}/>
                <Route path="/jokes" element={<Jokes/>}/>
                <Route path="/getAllShows" element={<GetAllShows/>}/>
                <Route path="/getMyShows" element={<GetMyShows/>}/>
                <Route path="/createGuest" element={<CreatGuest/>}/>
                <Route path="/createFestival" element={<CreateFestival/>}/>
                <Route path="/createShow" element={<CreateShow/>}/>
                <Route path="/DeleteShow" element={<DeleteShow/>}/>
                <Route path="/SetShow" element={<SetShow/>}/>
                <Route path="/EditFestival" element={<EditFestival/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);