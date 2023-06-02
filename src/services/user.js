import axios from 'axios';

//var data = JSON.stringify({
//    "fname": "Sujay",
//   "lname": "Kanolkar",
//   "email": "19co50@aitgoa.edu.in",
//    "password": "pass",
//    "type": "seller"
//  });


export const createUser = async (fname,lname,email,password,type)=>{
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/user/create',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "fname": fname,
            "lname": lname,
            "email": email,
            "password": password,
            "type": type
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


export const  updateUserDetails = async (mname,dob,gen,pan,adhar)=>{
    var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/user/update",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "mname":  mname,
            "dob":dob,
            "gender":gen,
            "pan":pan,
            "adhar":adhar
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


export const  updateUserAddDetails = async (rAdd, state, dist, city, contact,pincode)=>{
    var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/user/updateAdd",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            address: {
                "city":city,
                "contact":contact,
                "pincode":pincode,
                "residence":rAdd,
                "state":state,
            }
            
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


export const  userprofile = async (profile_picture)=>{
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


export const  userResident = async (registration,liscence,resident)=>{
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


export const  verified = async ()=>{
    var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: "http://localhost:8080/user/verify",
        headers: {
            'Content-Type': 'application/json'
        },
        data:{}
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



//axios(config)
//.then(function (response) {
//  console.log(JSON.stringify(response.data));
//})
//.catch(function (error) {
//  console.log(error);
//});
