import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/User_Card';
import Data from '../../components/MyData';
import SData from "../../components/home/Srq_Data";
import SCard from '../../components/home/Srq_Card';

const cardData = Data.map((data) => {
    return (
        <Card
            key={data.key}
            image={data.image}
            item_title={data.item_title}
            del_address={data.del_address}
            deliver_by={data.deliver_by}
            deliver_date={data.deliver_date}
            deliver_time={data.deliver_time}
            selling_cost={data.selling_cost}
            delivery_charges={data.delivery_charges}
        />
    );
});

const SprData = SData.map((data) => {
    return (
        <SCard
            key={data.key}
            image={data.image}
            item_title={data.item_title}
            del_address={data.del_address}
            deliver_by={data.deliver_by}
            deliver_date={data.deliver_date}
            deliver_time={data.deliver_time}
            selling_cost={data.selling_cost}
            delivery_charges={data.delivery_charges}
            business_name={data.business_name}
        />
    );
});

function UserFeed(){
    const [specialRequest, setSpecialReq] = useState([]);

    return(
        <Layout>
        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
        <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide pr-20 w-fit h-full border-r-2 border-solid border-Secondary_Grey"> 
           {cardData}
          </div>
          <div className="special-request">   
          <div className='flex flex-row align-top'>
                <h1 className='ml-10 mt-4 inline-block text-Primary_Red text-2xl font-oswald font-bold'>Special Request</h1>
          </div>
          <div className="container h-full pb-20 overflow-y-scroll overflow-x-hidden scrollbar-hide">
          {SprData}
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