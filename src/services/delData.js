import axios from 'axios';

export const insertDelData = async (email)=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/delData/create',
        headers: {
            'Content-Type': 'application/json'
        },
        data:{
           "user_email":email
        }
    };

    try{
        const response = await axios.post(config.url,config.data,{withCredentials:true})
        return (response,email);
    }
    catch(error){
        console.log(error);
    }
}


