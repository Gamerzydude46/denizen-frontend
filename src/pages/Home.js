import React from "react";
import Layout from "../components/Layout";
import dummyImg2 from'../assets/images/dummyImg2.png';
import { Outlet } from "react-router-dom";

const data ={
    user: 'Anna Marie',
    type: 'seller',
    verified: false,
    img: dummyImg2,
}

function Home() {

    if (data.verified === false) {
        return (
            <Layout>
                <Outlet/>
            </Layout>
        );
    }
    else {
        return (
            <Layout>
                <div>Home page</div>
            </Layout>
        );
    }
}

export default Home;