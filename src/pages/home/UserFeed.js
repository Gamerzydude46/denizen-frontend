import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import girlinbox from '../../assets/images/girlinbox.png';
import specialOrder from '../../assets/images/spOrder.jpg';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/User_Card';
import SCard from '../../components/home/Srq_Card';
import axios from "axios";


function UserFeed() {
    const [specials, setSpecials] = useState([]);
    const [items, setItems] = useState([]);

    const getItems = async () => {
        axios.get("http://localhost:8080/postItems/getItems", { withCredentials: true }).then((res) => {
            setItems(res.data.itemSet)
        }).catch(err => console.log(err))
    }
    const getSpecial = async () => {
        axios.get("http://localhost:8080/postItems/getSpecial", { withCredentials: true }).then((res) => {
            setSpecials(res.data.itemSet)
        }).catch(err => console.log(err))
    }
   
    React.useEffect(() => {
        getItems();
        getSpecial();
    }, [])

    return (
        <Layout>
            <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
                <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide  pr-[140px] w-fit h-full border-r-2 border-solid border-Base shadow-md">
                <div className='flex flex-row align-top'>
                        <h1 className='ml-10 mt-4 inline-block text-Primary_Red text-2xl font-oswald font-bold'>Delivery Request's</h1>
                </div>
                    {
                        items.length > 0 ? items.map((item) => {
                            return <Card 
                            key={item._id}
                            item_id = {item._id}
                            seller_email= {item.seller_email}
                            item_title={item.item_name}
                            del_address={item.delivery_address}
                            deliver_by={item.deliver_by}
                            deliver_date={item.delivery_date}
                            deliver_time={item.delivery_by}
                            selling_cost={item.item_cost}
                            delivery_charges={item.delivery_cost}
                            business_name={item.business_name}
                            image={`https://${item.imageURL.name}.ipfs.w3s.link/${item.imageURL.URL}`}
                            />
                        }) : " Error 404  No Data !"
                    }
                </div>
                <div className="special-request">
                    <div className='flex flex-row align-top'>
                        <h1 className='ml-10 mt-4 inline-block text-Primary_Red text-2xl font-oswald font-bold'>Special Request</h1>
                    </div>
                    
                    <div className="container h-full pb-20 overflow-y-scroll overflow-x-hidden scrollbar-hide">
                        {   
                            specials.length > 0 ? specials.map((special) => {
                                return <SCard
                                    key={special._id}
                                    item_id={special._id}
                                    seller_email={special.seller_email}
                                    item_title={special.item_name}
                                    del_address={special.delivery_address}
                                    deliver_by={special.deliver_by}
                                    deliver_date={special.delivery_date}
                                    deliver_time={special.delivery_by}
                                    selling_cost={special.item_cost}
                                    delivery_charges={special.delivery_cost}
                                    business_name={special.business_name}
                                    image={`https://${special.imageURL.name}.ipfs.w3s.link/${special.imageURL.URL}`}
                                />
                            }) : <div className=" z-10 relative flex items-start flex-shrink-0 w-[575px] h-[250px] top-[28px] left-[37px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-4">

                                <img src={specialOrder} alt="loading sense" className="h-full" />
                                    <div className=" mt-16 flex flex-col justify-center items-center content-center">
                                        <h1 className="font-oswald text-3xl font-medium ml-3 ">Oops !</h1>
                                        <h1 className="mt-5 font-oswald text-2xl font-medium ml-3">No Special Delivery request ! </h1>
                                    </div>

                            </div>
                        }
                    </div>
                </div>
                <div className="fixed z-100 bottom-0 right-0">
                    <div className="bg-White rounded-t-full h-[450px] w-[900px] ">
                        <img src={girlinbox} alt="girl in box" className="h-[370px] w-[400px] bottom-[70px] left-[430px] relative" />
                    </div>
                    <button type="button" className="fixed justify-center flex-center bottom-[25px] right-[145px]">
                        <NavLink to="/my-orders" className='flex justify-center gap-3 font-semibold cursor-pointer flex-row text-oswald w-[200px] pt-2 p-8 accessButton' >
                            My Order
                            <span className='ml-0'>
                                <img src={deadline} alt='deadline' className='w-7 mt-1' />
                            </span>
                        </NavLink>
                    </button>
                </div>
                <div>
                </div>
            </main>
        </Layout>
    );
}

export default UserFeed;