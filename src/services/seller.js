import axios from 'axios';

export const insertSeller = async (ref_id,ref_email)=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/seller/create',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "ref_id": ref_id,
            "ref_email": ref_email,
        }
    };

    try{
        const response = await axios.post(config.url,config.data,{credentials: true})
        return (response);
    }
    catch(error){
        console.log(error);
    }
}