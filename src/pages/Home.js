import React from "react";
import Welcome from './kyc/Welcome';

const data ={
    user: 'Anna Marie',
    type: 'Seller',
    verified: false,
}

function Home(){
    
    if(data.verified === false){
        return(<Welcome {...data}/> );
    }
    else{
        return(
            <div>Home page</div>
        );
    }
}

export default Home;