import React from 'react';
import schedule from '../assets/icons/schedule.svg';
import stopwatch from '../assets/icons/stopwatch.svg';
import check from '../assets/icons/check.svg';
import newCheck from '../assets/icons/newCheck.svg';
import map from "../../src/assets/icons/map.svg";
import foodDelivery from "../../src/assets/icons/foodDelivery.svg";
import userColor from "../../src/assets/icons/userColor.svg";
import whatsapp from "../assets/images/whatsapp.png";
import star from "../../src/assets/images/star.png";
import filledstar from "../../src/assets/images/filledstar.png";
import "../pages/home/post-order.css";


function TrackCard(props) {
  const {
    Oid,
    image,
    item_title,
    name,
    rating,
    address,
    deliveries,
    contact,
    deliver_date,
    deliver_time,
    status,
  } = props;

  return (
    <div className="z-10 relative flex items-start flex-shrink-0 w-[935px] h-[228px] top-[25px] left-[65px] mb-8 rounded-lg border border-solid border-Primary_Red bg-White border-t-0 border-l-4 border-b-4">
      <div>
      <img
        className="absolute top-4 left-6 w-[193px] h-[193px] rounded-lg shadow-md"
        src={image}
        alt={item_title}/>
       </div>
        <div className="absolute top-[30px] left-[250px] pl-5 pr-5 md:flex-shrink-5">
                                   <div className="mt-3 flex items-center">
                                          <img className="h-7 w-7 mr-2" src={userColor} alt="User" /> 
                                          <p className="text-l font-bold mr-2"> {name}</p>
                                          <img className="h-7 w-7 mr-2" src={newCheck} alt="Check" />
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-7 w-7 mr-2" src={map} alt="Map" />
                                          <p className="text-l font-bold"> {address}</p>                                          
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-7 w-7 mr-2" src={foodDelivery} alt="FoodDelivery" /> 
                                          <p className="text-l font-bold"> {deliveries} Deliveries</p>                                          
                                   </div>
                                   <div className="mt-3" style={{display:"flex"}}>
                                          {[1,2,3,4,5,].map((value)=>{
                                                 return value <= rating?<img src={filledstar} className='w-8' /> : <img src={star} className='w-8' />
                                          })}
                                   </div>
                            </div>
      <div className="absolute pl-5 pt-5 pb-5 top-[18px] right-[100px] border border-solid border-Primary_Red border-t-0 border-l-2 border-r-0 border-b-0">
        <div >
        <p className="text-xl font-semibold font-maven text-black inline driver-title">Orders:  </p>
        <p className="text-xl font-semibold font-maven text-black inline"> #{Oid} </p>
        </div>
        <div>
        <h2 className="text-2xl mt-2 mb-4 font-medium font-maven text-black]">{item_title}</h2>
        <img alt="sch" src={schedule} className=" left-[2px] inline w-5 h-5 mr-2" />
        <h3 className="left-[30px] w-[200px] text-[17px] font-semibold inline font-maven text-Grad_Blue">
            Delivery By : 
        </h3>
          <p className="  left-[30px] w-[300px] font-normal inline text-[16px] text-left font-maven text-lg  items-center mt-2 text-Primary_Grey">
            {deliver_date} @{deliver_time}
          </p>
        </div>
        <div>
        <div className='mt-2'>
        <img alt="sch" src={whatsapp} className=" left-[2px] inline w-6 h-6 mr-1" />

        <h3 className="mt-2 left-[30px] w-[200px] text-[17px] font-semibold inline font-maven text-Grad_Blue">
            Contact :  
        </h3>
          <p className="left-[30px] w-[300px] font-normal inline text-[16px] text-left font-maven text-lg  items-center text-Primary_Grey">
            {contact}
          </p>
        {status === 'delivered' ? (
            <button className=" ml-3 top-[2px] text-oswald w-[85px]  right-[20px]  rateButton ">
              Rate
            </button>
    
        ) : (
            <div></div>
        )}
        
        </div>
        </div>
        </div>
        <div className="absolute right-[-87px] top-[96px] transform -translate-y-1/2">
          {status === 'pending' ? (
            <div className="flex justify-center gap-3 flex-row text-oswald ml-10 w-[223px] pt-2 p-11 statusButton align-items-flex-end bg-gradient-to-t from-GradOrange  to-Orange ... -rotate-90">
              <img src={stopwatch} alt="stopwatch" className="relative top-[4px] right-[2px] w-9 h-9 mr-2" />
              <p>Pending</p>
            </div>
          ) : (
            <div className="flex justify-center gap-3 flex-row text-oswald ml-10 w-[223px] pt-2 p-11 statusButton align-items-flex-end bg-gradient-to-b from-Green via-Grad_Green to-Grad_Green -rotate-90">
              <img src={check} alt="check" className="relative top-[4px] right-[2px] w-9 h-9 mr-2" />
              <p>Delivered</p>
            </div>
          )}
        </div>
      
    </div>
  );
}

export default TrackCard;