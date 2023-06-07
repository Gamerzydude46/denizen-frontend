import React from "react";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";
import SellerFeed from "./home/SellerFeed";
import UserFeed from "./home/UserFeed";

function Home(data) {

    if (data.verified === false) {
        return (
            <Layout>
                <Outlet/>
            </Layout>
        );
    }
    else if(data.verified === true && data.type==="seller"){
        return (
            <Layout>
                <SellerFeed/>
            </Layout>
        );
    }
    else{
        return (
                <UserFeed/>
        );
    }
}

export default Home;