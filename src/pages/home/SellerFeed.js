import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/Sel_Card';
import Data from '../../components/home/Sel_Data';
//import { getItems } from "../../services/seller";

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

function SellerFeed(){
     /*const [cardData, setCardData] = useState([]);

    useEffect(() => {
        getItems().then((data) => {
            data.map((item) => {
                cardData.push(<Card
                    key={item.key}
                    image={item.image}
                    item_title={item.item_title}
                    del_address={item.del_address}
                    deliver_date={item.deliver_date}
                    deliver_time={item.deliver_time}
                    selling_cost={item.selling_cost}
                    delivery_charges={item.delivery_charges}
                    status={item.status}
                    />)
            })
        })
    }, [])*/

    return(
        
        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
        <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full"> 
              {cardData}
          </div>   
          
          <div className="fixed z-100 bottom-0 right-0">
                <div className="bg-White rounded-t-full h-[500px] w-[1000px] "> 
                    <img src={girlinbox} alt="girl in box" className="h-[450px] w-[470px] bottom-[90px] left-[510px] relative" /> 
                </div> 
                <button type="button" className="fixed justify-center flex-center bottom-[45px] right-[160px]">
                 <NavLink to="/post-orders" className='flex justify-center gap-3 font-semibold cursor-pointer flex-row text-oswald w-[220px] pt-2 p-6 accessButton' >
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