import React from "react";
import Layout from "../components/Layout";
import MyCard from '../components/MyCard';
import MyData from '../components/MyData';

const cardData = MyData.map((data) => {
    
    return (
        <MyCard
            key={data.key}
            image={data.image}
            item_title={data.item_title}
            del_address={data.del_address}
            deliver_date={data.deliver_date}
            deliver_time={data.deliver_time}
            selling_cost={data.selling_cost}
            delivery_charges={data.delivery_charges}
            status={data.status}
            sel_address={data.sel_address}
            sel_contact={data.sel_contact}
            rcvr_name={data.rcvr_name}
            rcvr_contact={data.rcvr_contact}
            business_name={data.business_name}
        />
    );
});

function MyOrder(){
    return(
        
        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
        <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full"> 
              {cardData}
          </div>   
          
         
        </main>
  );
}

export default MyOrder;