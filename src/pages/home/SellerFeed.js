import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import girlinbox from '../../assets/images/girlinbox.png';
import noOrder from '../../assets/images/feedOp.jpg'
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/Sel_Card';
import axios from "axios";


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
                    }) :<div className=" z-10 relative flex items-start flex-shrink-0 w-[575px] h-[250px] top-[28px] left-[37px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-4">

                    <img src={noOrder} alt="loading sense" className="h-full" />
                        <div className=" mt-16 flex flex-col justify-center items-center content-center">
                            <h1 className="font-oswald text-3xl font-medium ml-3 ">Oops !</h1>
                            <h1 className="mt-5 font-oswald text-2xl font-medium ml-3">You have'nt Posted any Orders Yet</h1>
                        </div>

                </div>
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