import React from "react";
import Header from "./Header";

const Layout = ({children}) => {
    return(
        <div className="h-screen">
            <div>
                <Header/>
            </div>
            <div className="h-[calc(100vh-96px)]">
                {children}
            </div>
        </div>
    );
}

export default Layout;