import axios from 'axios';

const URL = 'http://0bef-159-224-64-142.ngrok.io/candidates/';

export async function createCandidats(email, first_name, last_name, sv_file, vacancy, access) {
    return await axios.post( URL, {
        email: email,
        first_name: first_name,
        last_name: last_name,
        sv_file: sv_file,
        vacancy: vacancy,
    },{headers: { Authorization: "Bearer " + access}
    }, 
);
}

export async function getCandidats(access){
    return await axios.get( URL, {
        headers: { 
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data", 
        },
    });
}

export async function getCandidat(access, id){
    return await axios.get( URL + id + '/', {
        headers: {
            Authorization: 'Bearer ' + access, 
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function deleteCandidate(access, id){
    return await axios.delete( URL + id + '/', {
        headers: {
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function updateCandidate(id, email, first_name, last_name, sv_file, vacancy, access){
    return await axios.put(URL + id + '/', {
        email: email, 
        first_name: first_name, 
        last_name: last_name, 
        sv_file: sv_file,
        vacancy: vacancy,
        }, {headers: {  
            Authorization: "Bearer " + access,
            "Content-Type": "multipart/form-data",
        }, 
    });
}
