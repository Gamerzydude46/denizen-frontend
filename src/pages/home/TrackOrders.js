import React from "react";
import { NavLink } from "react-router-dom";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/TrackCard';
import Data from '../../components/TrackData';
import Layout from "../../components/Layout";
const cardData = Data.map((data) => {
    return (
        <Card

            Oid={data.Oid}
            image={data.image}
            item_title={data.item_title}
            name={data.name}
            rating={data.rating}
            address={data.address}
            deliveries={data.deliveries}
            contact={data.contact}
            deliver_date={data.deliver_date}
            deliver_time={data.deliver_time}
            status={data.status}
        />
    );
});

function TrackOrders(){
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
            </div> 
        </main>
        </Layout>
  );
}

export default TrackOrders;

