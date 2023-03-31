import React from "react";
import Header from "./Header";
import dummyImg2 from'../assets/images/dummyImg2.png';

const data ={
    user: 'Anna Marie',
    type: 'Seller',
    verified: false,
    img: dummyImg2,
}

const Layout = (props) => {
    return(
        <div className="h-screen">
            <div>
                <Header {...data}/>
            </div>
            <div className="h-[calc(100vh-96px)]">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;