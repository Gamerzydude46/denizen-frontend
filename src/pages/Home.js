import React from "react";
import Welcome from './kyc/Welcome';
import Layout from "../components/Layout";
import dummyImg2 from'../assets/images/dummyImg2.png';

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
                <Welcome {...data} />
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