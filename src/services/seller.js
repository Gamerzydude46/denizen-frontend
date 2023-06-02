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
        const response = await axios.post(config.url,config.data,{withCredentials: true})
        return (response);
    }
    catch(error){
        console.log(error);
    }
}


export const  updateSellerDetails = async (bname,bAdd,bcontact,bemail,bdist,bcity)=>{
    var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/seller/update",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "business_name": bname, 
            "business_address": {
                "city": bcity,
                "contact": bcontact,
                "email": bemail,
                "residence": bAdd,
                "district": bdist
            },
        }
    };

    try{
        const response = await axios.put(config.url,config.data,{withCredentials: true})
        console.log(response);
        return (response);
    }
    catch(error){
        console.log("Error occurred during API call:",error);
    }
}



export const  sellerprofile = async (profile_picture)=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/user/update",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "profile_picture": profile_picture
            
        }
    };

    try{
        const response = await axios.post(config.url,config.data,{withCredentials: true})
        console.log(response);
        return (response);
    }
    catch(error){
        console.log("Error occurred during API call:",error);
    }
}


export const  sellerResident = async (registration,liscence,resident)=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/user/update",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "resident": resident,
            "liscence": liscence,
            "registration": registration,
            
        }
    };

    try{
        const response = await axios.post(config.url,config.data,{withCredentials: true})
        console.log(response);
        return (response);
    }
    catch(error){
        console.log("Error occurred during API call:",error);
    }
}

