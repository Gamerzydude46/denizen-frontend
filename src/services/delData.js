import axios from 'axios';

export const insertDelData = async ()=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/delData/create',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    try{
        const response = await axios.post(config.url,{withCredentials: true})
        return (response);
    }
    catch(error){
        console.log(error);
    }
}