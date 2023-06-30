import axios from 'axios';


export const createItem = async (
    item_name,
    recieverName,
    recieverContact,
    delivery_address,
    latitude,
    longitude,
    item_cost,
    delivery_cost,
    distance,
    delivery_date,
    delivery_by,
    category,
    URL,
    imageName,
) => {
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/postItems/post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "item_name": item_name,
            "reciever":{
                        "name":recieverName,
                        "contact": Number(recieverContact)
                        },
            "delivery_address": delivery_address,
            "latitude": Number(latitude),
            "longitude": Number(longitude),
            "item_cost": item_cost,
            "delivery_cost": delivery_cost,
            "distance": distance,
            "delivery_date": delivery_date,
            "delivery_by": delivery_by,
            "category": category,
            "imageURL":  {
                "URL" : URL,
                "name": imageName,
            },
        }
    };

    try{
        console.log(config.data)
        const response = await axios.post(config.url,config.data,{withCredentials: true})
        return (response);
    }
    catch(error){
        console.log(error);
    }
}





export const createSpecialItem = async (
    email,
    item_name,
    recieverName,
    recieverContact,
    delivery_address,
    latitude,
    longitude,
    item_cost,
    delivery_cost,
    distance,
    delivery_date,
    delivery_by,
    category,
    URL,
    imageName,
) => {
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/postItems/postSpecial',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "user_email":email,
            "item_name": item_name,
            "reciever":{
                        "name":recieverName,
                        "contact": Number(recieverContact)
                        },
            "delivery_address": delivery_address,
            "latitude": Number(latitude),
            "longitude": Number(longitude),
            "item_cost": item_cost,
            "delivery_cost": delivery_cost,
            "distance": distance,
            "delivery_date": delivery_date,
            "delivery_by": delivery_by,
            "category": category,
            "imageURL":  {
                "URL" : URL,
                "name": imageName,
            },
        }
    };

    try{
        console.log(config.data)
        const response = await axios.post(config.url,config.data,{withCredentials: true})
        return (response);
    }
    catch(error){
        console.log(error);
    }
}