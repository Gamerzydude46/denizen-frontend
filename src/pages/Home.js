import React from "react";
import Layout from "../components/Layout";
import dummyImg2 from'../assets/images/dummyImg2.png';
import { Outlet } from "react-router-dom";
import SellerFeed from "./home/SellerFeed";


function Home(data) {

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
                <SellerFeed/>
            </Layout>
        );
    }
}

export default Home;