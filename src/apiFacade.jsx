import URL from "./settings";
import jwt from 'jwt-decode'

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {


    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }
    const getRoles = () => {
        return jwt(getToken()).roles;
    }
    const getName = () => {
        return jwt(getToken()).username;
    }


    const getJokes = async() => {

        return await fetch(URL + "/api/info/jokes")
            .then(handleHttpErrors)
            // .then(res => ())

    }
    const  allShows = async ()=>{
        return await fetch( URL + "/api/info/show")
            .then(handleHttpErrors)
    }
    const  allGuest = async ()=>{
        return await fetch( URL + "/api/info/allGuest")
            .then(handleHttpErrors)
    }

    const  allFestival = async ()=>{
        return await fetch( URL + "/api/info/allFestival")
            .then(handleHttpErrors)
    }



    const getMyShows = async(guestName) => {

        return await fetch(URL + "/api/info/guestShow/" + guestName)
            .then(handleHttpErrors)
    }
    const createGuest = (name,phone,email,status) => {
        const options = makeOptions("POST", false,
            {name: name,
                phone: phone,
                email: email,
                status: status});
        return fetch(URL + "/api/info/createGuest", options)

    }
    const createFestival = ( name, city, startDate, duration) => {
        const options = makeOptions("POST", false,
            {name: name,
                city: city,
                startDate: startDate,
                duration: duration});
        return fetch(URL + "/api/info/createFestival", options)

    }
    const editFestival = ( festivalName, cityName, startDate, duration) => {
        const options = makeOptions("POST", false,
            {festivalName: festivalName,
                cityName: cityName,
                startDate: startDate,
                duration: duration});
        return fetch(URL + "/api/info/edit", options)

    }

    const createAShow = ( name, duration, location,startDate, startTime) => {
        const options = makeOptions("POST", false,
            {name: name,
                duration: duration,
                location: location,
                startDate: startDate,
                startTime: startTime});
        return fetch(URL + "/api/info/createShow", options)

    }
    const deleteShow = async (id) => {
        const options = makeOptions("POST", false,{id: id});
        return fetch(URL + "/api/info/delete",options)

    }

    const setShow = async (showName,guestName) => {
        const options = makeOptions("POST", false,{showName: showName,
            guestName: guestName});
        return fetch(URL + "/api/info/setShow",options)

    }


    const login = (user, password) => {
        const options = makeOptions("POST", true,{username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {setToken(res.token) })
    }

    const fetchData = () => {
        const options = makeOptions("GET",true); //True add's the token

        if (getRoles() === "user"){
            return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
        } else if(getRoles() === "admin") {
            return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
        }

    }

    const makeOptions= (method,addToken,body) =>{
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }


    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        getRoles,
        getJokes,
        getName,
        allShows,
        getMyShows,
        allGuest,
        createGuest,
        createFestival,
        createAShow,
        deleteShow,
        setShow,
        editFestival,
        allFestival
    }
}





const facade = apiFacade();
export default facade;
