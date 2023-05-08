import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/User_Card';
import Data from '../../components/home/Sel_Data';

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

function UserFeed(){
    return(
        <Layout>
        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
        <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full"> 
           {cardData}
          </div>   
          <div className="fixed z-100 bottom-0 right-0">
                <div className="bg-White rounded-t-full h-[550px] w-[1000px] "> 
                    <img src={girlinbox} alt="girl in box" className="h-[520px] w-[550px] bottom-[130px] left-[430px] relative" /> 
                </div> 
                <button type="button" className="fixed justify-center flex-center bottom-[45px] right-[160px]">
                 <NavLink to="/post-orders" className='flex justify-center gap-3 font-semibold cursor-pointer flex-row text-oswald w-[250px] pt-3 p-12 accessButton' >
                        My Order
                        <span className='ml-0'>
                            <img src={deadline} alt='deadline' className='w-7 mt-1' />
                        </span>
                </NavLink>
                </button>
            </div> 
        </main>
    </Layout>
  );
}

export default UserFeed;