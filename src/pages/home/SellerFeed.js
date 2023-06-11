import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/Sel_Card';
import Data from '../../components/home/Sel_Data';
import axios from "axios";

const cardData = Data.map((data) => {
    return (
        <Card
            key={data.key}
            image={data.image}
            item_title={data.item_title}
            del_address={data.del_address}
            deliver_date={data.deliver_date}
            deliver_time={data.deliver_time}
            selling_cost={data.selling_cost}
            delivery_charges={data.delivery_charges}
            status={data.status}
        />
    );
});

function SellerFeed() {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        axios.get("http://localhost:8080/postItems/getOrders", { withCredentials: true }).then((res) => {
            setOrders(res.data.message)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getOrders();
    }, [])
    return (

        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
            <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full">
                {
                    orders.length > 0 ? orders.map((order) => {
                        return <Card key={order._id}
                            order_id={order._id}
                            item_title={order.item_name}
                            del_address={order.delivery_address}
                            deliver_date={order.delivery_date}
                            deliver_time={order.delivery_by}
                            selling_cost={order.item_cost}
                            delivery_charges={order.delivery_cost}
                            status={order.accepted}
                            image={`https://${order.imageURL.name}.ipfs.w3s.link/${order.imageURL.URL}`}
                        />
                    }) : "No Orders Yet head to Post Order to post the items !"
                }
            </div>

            <div className="fixed z-100 bottom-0 right-0">
                <div className="bg-White rounded-t-full h-[550px] w-[1000px] ">
                    <img src={girlinbox} alt="girl in box" className="h-[520px] w-[550px] bottom-[140px] left-[430px] relative" />
                </div>
                <button type="button" className="fixed justify-center flex-center bottom-[45px] right-[160px]">
                    <NavLink to="/post-orders" className='flex justify-center gap-3 font-semibold cursor-pointer flex-row text-oswald w-[250px] pt-3 p-12 accessButton' >
                        Post Orders
                        <span className='ml-0'>
                            <img src={deadline} alt='deadline' className='w-6 mt-1' />
                        </span>
                    </NavLink>
                </button>
            </div>
        </main>
    );
}

export default SellerFeed;