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


export const  updateSellerDetails = async (bname,bAdd,longitude,latitude,bcontact,bemail,bdist,bcity)=>{
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
                "latitude":latitude,
                "longitude":longitude,
                "contact": Number(bcontact),
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






export const  sellerResident = async (profileFileName,profileImageURL,bregFileName,bregDocURL,bleaseFileName,bleaseURL,residentFileName,residentURL)=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/documents/upload",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "profile_picture": {
                "URL":profileImageURL,
                "name":profileFileName
                },
            "resident": {
                "URL":residentURL,
                "name":residentFileName
                   },
            "liscence": {
                "URL":bleaseURL,
                "name":bleaseFileName
                   },
            "registration": {
                "URL":bregDocURL,
                "name":bregFileName
                   }
            
            
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

