import axios from 'axios';

const URL = 'https://pacific-spire-69544.herokuapp.com/interviews/';

export async function createInterview(candidate, datetime, link, access) {
    return await axios.post( URL, {
        candidate: candidate,
        datetime: datetime,
        link: link,
        }, {headers: {  
            Authorization: "Bearer " + access,
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        }}, 
    );
}

export async function getInterviews(access){
    return await  axios.get( URL, {
        headers: { 
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data", 
        },
    });
}

export async function getCandidat(access, id){
    return await axios.get( URL + id, {
        headers: {
            Authorization: 'Bearer ' + access, 
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function deleteCandidate(access, id){
    return await axios.delete( URL + id, {
        headers: {
            Authorization: 'Bearer ' + access,
            "Content-Type": "multipart/form-data",
        },
    });
}

export async function updateCandidate(id, candidate, datetime, link, access){
    return await axios.put(URL + id, {
        candidate: candidate,
        datetime: datetime,
        link: link,
        }, {headers: {  
            Authorization: "Bearer " + access,
            "Content-Type": "multipart/form-data",
        }, 
    });
}
