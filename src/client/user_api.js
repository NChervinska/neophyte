import axios from 'axios';

const URL = 'https://pacific-spire-69544.herokuapp.com/users/';

export async function createUser(email, password, password2, first_name, last_name, access) {
    return await axios.post( URL, {
        email: email,
        password: password,
        password2: password2,
        first_name: first_name,
        last_name: last_name,  
        }, {headers: {  
            Authorization: "Bearer " + access,
            "Content-Type": "multipart/form-data",
        }}, 
    );
}

export async function getUsers(access){
    return await  axios.get( URL, {
        headers: { 
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data", 
        },
    });
}

export async function getUser(access){
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    }; 
    return await axios.get( URL + parseJwt(access).user_id + '/', {
        headers: {
            Authorization: 'Bearer ' + access, 
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function deleteUser(access, id){
    return await axios.delete( URL + id + '/', {
        headers: {
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function updateUser(email, first_name, last_name, access){
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    }; 
    return await axios.put(URL + parseJwt(access).user_id + '/', {
        email: email,
        password: '',
        password2: '',
        first_name: first_name,
        last_name: last_name,
        }, {headers: {  
            Authorization: "Bearer " + access
        }, 
    });
}
