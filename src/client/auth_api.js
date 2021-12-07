import axios from 'axios';

const URL = 'https://pacific-spire-69544.herokuapp.com/auth/';

export async function login(email, password) {
    return await axios.post( URL + 'login/', { 
    withCredentials: false,
    mode: 'no-cors',
    email: email,
    password: password,
    headers: { 
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data" },
    });
}

export async function refresh(){
    return await axios.post( URL + 'login/refresh/', {
        refresh: localStorage.getItem("token"), 
        headers: { "Content-Type": "multipart/form-data",},
    });
}

export async function register(email, password, password2, first_name, last_name) {
    return await axios.post( URL + 'register/', {
        email: email,
        password: password,
        password2: password2,
        first_name: first_name,
        last_name: last_name,  
        mode: 'no-cors',
        headers: { "Content-Type": "multipart/form-data" },
    });
}