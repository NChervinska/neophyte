import axios from 'axios';

const URL = 'https://pacific-spire-69544.herokuapp.com/';

export async function createCandidats(email, first_name, last_name, sv_file, vacancy, access) {
    return await axios.post( URL + 'candidates/', {
        email: email, 
        first_name: first_name, 
        last_name: last_name, 
        sv_file: sv_file,
        vacancy: vacancy,
        }, {headers: {  
            Authorization: "Bearer " + access
        }}, 
    );
}

export async function getCandidats(access){
    return await  axios.get( URL + 'candidates/', {
        headers: { 
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data", 
        },
    });
}


