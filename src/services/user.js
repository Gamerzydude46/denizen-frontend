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
        url: 'http://localhost:8081/user/create',
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

//axios(config)
//.then(function (response) {
//  console.log(JSON.stringify(response.data));
//})
//.catch(function (error) {
//  console.log(error);
//});
