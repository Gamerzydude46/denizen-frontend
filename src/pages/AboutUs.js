import React from "react";
import Layout from "../components/Layout";
import { uploadImage, getFiles, getFileName } from '../services/web3.storages';
import { createItem } from '../services/postItems';

function AboutUs() {

    const imageTest ='https://bafybeieoys32dkwfbhzy64dsi75ilxygnukyjh5bbqg7iqencad2zoefpe.ipfs.dweb.link/god-6308823.jpg'
    const data = {
        item_name: "item_name",
        delivery_address: "delivery_address",
        item_cost: 230,
        delivery_cost: 123,
        distance: 12,
        delivery_date: "delivery_date",
        delivery_by: "delivery_by",
        category: "medium",
    }
    const handleUpload = async(e) =>{
        e.preventDefault();
        const filePointer = getFiles('.item');
        const fileName = getFileName('.item');
        const imageURL = await uploadImage(filePointer);
        createItem(data.item_name, data.delivery_address, data.item_cost, data.delivery_cost, data.distance, data.delivery_date, data.delivery_by, data.category,imageURL,fileName).then((response) => {
            console.log(response);
            if (response.data.flag === false) {
                window.alert("Account created denied !")
            }
            else {

                window.alert("Account created Succefully !")

            }
        }).catch(error => {
            console.log(error);
        })
    }

    
        return (
            <Layout>
                <h1>About us</h1>
                <h1>About us</h1>
                <h1>About us</h1>

                <form onSubmit={handleUpload}>
                    <input type="file" className="item" />
                    <button type='submit'> submit</button>
                </form>
            </Layout>
        );
}

export default AboutUs;