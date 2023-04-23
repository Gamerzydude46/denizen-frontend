import * as React from 'react';
import Header from "./Header";
import dummyImg2 from'../assets/images/dummyImg2.png';
import axios from "axios";



const Layout = (props) => {
    const[data,setData] = React.useState({
        user: "",
        type: "",
        verified: false,
        img: dummyImg2,
    })
    React.useEffect(() => {
        axios.get("http://localhost:8080/user/userData", { withCredentials: true }).then((info) => {
            setData({
                user: info.data.data.fname,
                type: info.data.data.type,
                verified: info.data.data.verified,
                img: dummyImg2,
            })
        })
    },[])

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