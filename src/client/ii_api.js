import axios from 'axios';

const URL = 'http://0bef-159-224-64-142.ngrok.io/interviews/';

export async function postImage(id, image, width, height, access) {
    return await axios.post( URL + id + '/analyze/', {
        image: image,
        width: width,
        height: height,
        }, {headers: {  
            Authorization: "Bearer " + access,
        }}, 
    );
}

export async function getResult(id, access){
    return await  axios.get( URL +  id + '/result/', {
        headers: { 
            Authorization: 'Bearer ' + access
        },
    });
}

