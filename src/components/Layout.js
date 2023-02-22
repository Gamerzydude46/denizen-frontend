import React from "react";
import Header from "./Header";

const Layout = (props) => {
    return(
        <div className="h-screen">
            <div>
                <Header {...props}/>
            </div>
            <div className="h-[calc(100vh-96px)]">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;