import axios from 'axios';

const URL = 'http://0bef-159-224-64-142.ngrok.io/vacancies/';

export async function createVacancy(name, description, keywords, access) {
    return await axios.post( URL, {
            name: name,
            description: description,
            key_words: keywords,
        },{headers: { Authorization: "Bearer " + access}
        }, 
    );
}

export async function getVacancies(access){
    return await axios.get( URL, {
        headers: { 
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data", 
        },
    });
}


export async function getVacancy(access, id){
    return await axios.get( URL + id + '/', {
        headers: {
            Authorization: 'Bearer ' + access, 
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function deleteVacancy(access, id){
    return await axios.delete( URL + id + '/', {
        headers: {
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function updateVacancy(id, name, description, keywords, access){
    return await axios.put(URL + id + '/', {
            name: name,
            description: description,
            key_words: keywords,
        }, {headers: {  
            Authorization: "Bearer " + access,
            "Content-Type": "multipart/form-data",
        }, 
    });
}


