import React, { useState } from 'react';
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

function RateModal({ onSaveRating }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSaveRating = () => {
    onSaveRating(rating);
    setRating(0);
  };

  return (
    <div className="fixed z-100 bottom-[300px] right-[10px] w-[700px] h-[800] flex items-center justify-center">
      <div className="bg-White rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-medium mb-4 font-maven">Rate Our Delivery Agent!</h2>
        <div className="flex items-center align-middle space-x-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`w-10 h-10 ${
                value <= rating ? 'text-Orange' : 'text-Primary_Grey'
              }`}
              onClick={() => handleRatingChange(value)}
            >
              ★
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-Grad_Blue hover:bg-Blue text-Base rounded"
            onClick={handleSaveRating}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

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

  const [showRateModal, setShowRateModal] = useState(false);

  const handleRateClick = () => {
    setShowRateModal(true);
  };

  const handleSaveRating = (rating) => {
    // Save the rating to the backend
    // You can perform an API request here to save the rating
    console.log('Saving rating:', rating);

    // Close the rating modal
    setShowRateModal(false);
  };

  return (
    <div className="z-10 relative flex items-start flex-shrink-0 w-[850px] h-[175px] top-[20px] left-[70px] mb-8 rounded-lg border border-solid border-Primary_Red bg-White border-t-0 border-l-4 border-b-4">
      <div>
      <img
        className="absolute top-4 left-6 w-[145px] h-[145px] rounded-lg shadow-md"
        src={image}
        alt={item_title}/>
       </div>
        <div className="absolute top-[10px] left-[180px] pl-5 pr-5 md:flex-shrink-5">
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={userColor} alt="User" /> 
                                          <p className="text-l font-bold mr-2"> {name}</p>
                                          <img className="h-6 w-6 mr-2" src={newCheck} alt="Check" />
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={map} alt="Map" />
                                          <p className="text-l font-bold"> {address}</p>                                          
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={foodDelivery} alt="FoodDelivery" /> 
                                          <p className="text-l font-bold"> {deliveries} Deliveries</p>                                          
                                   </div>
                                   <div className="mt-3" style={{display:"flex"}}>
                                          {[1,2,3,4,5,].map((value)=>{
                                                 return value <= rating?<img src={filledstar} className='w-7' /> : <img src={star} className='w-7' />
                                          })}
                                   </div>
                            </div>
      <div className="absolute pl-3 pt-2 pb-2 top-[5px] right-[90px] border border-solid border-Primary_Red border-t-0 border-l-2 border-r-0 border-b-0">
        <div >
        <p className="ml-2 text-l font-semibold font-maven text-black inline driver-title">Orders:  </p>
        <p className="text-xl font-semibold font-maven text-black inline"> #{Oid} </p>
        </div>
        <div>
        <h2 className="ml-2 text-xl mt-2 mb-1 font-medium font-maven text-black]">{item_title}</h2>
        <img alt="sch" src={schedule} className="ml-2 left-[2px] inline w-5 h-5 mr-2" />
        <h3 className="ml-2 left-[30px] w-[200px] text-[15px] font-semibold inline font-maven text-Grad_Blue">
            Delivery By : 
        </h3>
          <p className="ml-2 left-[30px] w-[300px] font-normal inline text-[15px] text-left font-maven items-center mt-2 text-Primary_Grey">
            {deliver_date} @{deliver_time}
          </p>
        </div>
        <div>
        <div className='ml-2 mt-2'>
        <img alt="sch" src={whatsapp} className=" left-[2px] inline w-6 h-6 mr-1" />

        <h3 className="mt-2 left-[30px] w-[100px] text-[15px] font-semibold inline font-maven text-Grad_Blue">
            Contact :  
        </h3>
          <p className="left-[30px] w-[300px] font-normal inline text-[16px] text-left font-maven items-center text-Primary_Grey">
            {contact}
          </p>
        {status === 'delivered' ? (
            <button className=" ml-3 top-[1px] text-oswald w-[85px] right-[20px] rateButton" onClick={handleRateClick}>
              Rate
            </button>
    
        ) : (
            <div></div>
        )}
        
        </div>
        </div>
        </div>
        <div className="absolute right-[-60px] top-[70px] transform -translate-y-1/2">
          {status === 'pending' ? (
            <div className="flex justify-center gap-3 flex-row text-oswald ml-8 w-[170px] pt-2 p-11 statusButton align-items-flex-end bg-gradient-to-t from-GradOrange  to-Orange ... -rotate-90">
              <img src={stopwatch} alt="stopwatch" className="relative top-[4px] right-[2px] w-7 h-7 mr-2" />
              <p>Pending</p>
            </div>
          ) : (
            <div className="flex justify-center gap-3 flex-row text-oswald ml-8 w-[170px] pt-2 p-11 statusButton align-items-flex-end bg-gradient-to-b from-Green via-Grad_Green to-Grad_Green -rotate-90">
              <img src={check} alt="check" className="relative top-[4px] right-[2px] w-7 h-7 mr-2" />
              <p>Delivered</p>
            </div>
          )}
        </div>
        {showRateModal && <RateModal onSaveRating={handleSaveRating} />}
    </div>
  );
}

export default TrackCard;