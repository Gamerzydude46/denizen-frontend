import axios from 'axios';


export const createItem = async (
    item_name,
    delivery_address,
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
        url: 'http://localhost:8081/postItems/post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "item_name": item_name,
            "delivery_address": delivery_address,
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
        const response = await axios.post(config.url,config.data,{withCredentials: true})
        return (response);
    }
    catch(error){
        console.log(error);
    }
}