import React from "react";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";


function MyOrders() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default MyOrders;