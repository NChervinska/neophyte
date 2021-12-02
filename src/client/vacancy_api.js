import axios from 'axios';

const URL = 'https://pacific-spire-69544.herokuapp.com/';

export async function createVacancy(name, description, keywords, access) {
    return await axios.post( URL + 'vacancies/', {
            name: name,
            description: description,
            key_words: keywords,
        },{headers: { Authorization: "Bearer " + access}
        }, 
    );
}

export async function getVacancies(access){
    return await axios.get( URL + 'vacancies/', {
        headers: { 
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data", 
        },
    });
}


