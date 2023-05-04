import React, { useState } from 'react';
import location from '../assets/icons/location.svg';
import priceTag from '../assets/icons/priceTag.svg';
import transaction from '../assets/icons/transaction.svg';
import schedule from '../assets/icons/schedule.svg';
import stopwatch from '../assets/icons/stopwatch.svg';
import city from '../assets/icons/city.svg';
import user from '../assets/icons/userColor.svg';
import call from '../assets/icons/whatsapp.svg';
import check from '../assets/icons/check.svg';


function MyCard(props) {
  const {
    image,
    item_title,
    del_address,
    deliver_date,
    deliver_time,
    selling_cost,
    delivery_charges,
    status,
    sel_address,
    sel_contact,
    rcvr_name,
    rcvr_contact,
    business_name
  } = props;

  return (
    <div className="z-10 relative flex items-start flex-shrink-0 w-[1400px] h-[228px] top-[25px] left-[65px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-t-0 border-r-0 border-l-4 border-b-4">
      <img className="absolute top-4 left-6 w-[193px] h-[193px] rounded-lg shadow-md"
        src={image}
        alt={item_title} />
      <div className='absolute box-border h-[200px]  w-[1140px] top-4 left-[253px]  flex flex-row '>
        <div className=' h-[200px] w-1/2 flex flex-col border border-Secondary_Grey border-t-0 border-l-0 border-b-0 border-r-1'>
          <div className='h-2/3  '>
            <div className="absolute">
              <h2 className="text-2xl font-medium font-maven text-black]">{item_title}</h2>
              <div className="del-address">
                <img alt="loc" src={location} className="absolute top-[42px] left-[2px] w-5 h-5 mr-1" />
                <h3 className="absolute top-[37px] left-[29px] w-[200px] text-[17px] font-semibold font-maven text-Primary_Red ">
                  Delivery Address:
                </h3>
                <p className="absolute top-[54px] left-[29px] w-[320px] font-normal text-[18px] text-left font-maven text-lg flex items-center mt-2 text-Primary_Grey">
                  {del_address}
                </p>
              </div>
            </div>
            <div className="absolute flex flex-col left-[380px] flex items-start">
              <div className="selling-cost">
                <img alt="prc" src={priceTag} className=" inline  w-7 h-7 mr-2" />
                <h3 className="inline   w-[200px] text-[19px] font-semibold font-maven text-Green ">
                  Selling Cost:
                </h3>
                <p className=" mt-[-2px] ml-10">Rs: {selling_cost}/-</p>
              </div>
              <div className=" block top-4 ">
                <img alt="trc" src={schedule} className="inline  w-6 h-6 mr-4" />
                <h3 className="inline left-[-100px] w-[200px] text-[18px] font-semibold font-maven text-Grad_Blue">
                  Delivery By:
                </h3>
                <p className=" mt-[-2px] ml-10 ">{deliver_date} </p>
                <p className="    ml-10"> @{deliver_time}</p>
              </div>
            </div>
          </div>
          <div className='border border-Secondary_Grey w-[540px] border-b-0 border-r-0 border-l-0 border-t-1'>
            <div className="absolute recvr_name mt-1">
              <img alt="user" src={user} className="inline top-[42px] left-[2px] w-5 h-5 mr-1" />
              <h3 className=" inline top-[37px] left-[29px] w-[200px] text-[17px] font-semibold font-maven mr-2 text-Sky_Blue ">
                Reciever Name:
              </h3>
              <p className=" inline left-[29px] w-[320px] font-normal text-[18px]  font-maven text-lg   text-Primary_Grey">
                {rcvr_name}
              </p>

            </div>
            <div className="rcvr absolute mt-8">
              <img alt="contact" src={call} className=" inline top-[42px] left-[2px] w-5 h-5 mr-1" />
              <h3 className=" inline top-[37px] left-[29px] w-[200px] text-[17px] font-semibold mr-2 font-maven text-Dark_Green ">
                Reciever Contact:
              </h3>
              <p className=" inline  left-[29px] w-[320px] font-normal text-[18px] text-left font-maven text-lg   text-Primary_Grey">
                {rcvr_contact}
              </p>
            </div>
          </div>
        </div>
        <div className=' w-1/2 '>
          <div className='absolute inline'>
            <div className="del-charges ml-2 ">
              <img alt="trc" src={transaction} className=" inline w-6 h-6 mr-2" />
              <h3 className=" inline w-[200px] text-[18px] font-semibold font-maven text-Dark_Green">
                Delivery Charges:
              </h3>
              <p className=" mt-[-2px] ml-8">Rs: {delivery_charges}/-</p>
            </div>
            <div className="del-charges ml-2 mt-2">
              <img alt="trc" src={city} className=" inline w-6 h-6 mr-2" />
              <h3 className=" inline w-[200px] text-[18px] font-semibold font-maven ">
                Request By:
              </h3>
              <p className=" mt-[-2px] ml-8">{business_name}</p>
            </div>
            <div className="sel-address mt-2 ml-2">
              <img alt="loc" src={location} className="inline   w-5 h-5 mr-2" />
              <h3 className="inline w-[200px] text-[17px] font-semibold font-maven text-Primary_Red ">
                Seller Address:
              </h3>
              <p className=" ml-8 w-[320px] font-normal text-[18px] text-left font-maven text-lg   text-Primary_Grey">
                {sel_address}
              </p>
            </div>
          </div>
          <div className="absolute inline right-0">
            <div className="">
              {status === 'pending' ? (
                <div className="flex justify-center gap-3 flex-row text-oswald  w-[340px] pt-2 p-11 orderstatusButton bg-gradient-to-t from-Orange  to-GradOrange ...  ">
                  <p className='mr-20'>Pending</p>
                  <img src={stopwatch} alt="stopwatch" className=" top-[5px] left-[2px] w-8 h-8 ml-2" />
                </div>
              ) : (
                <div className="flex justify-center gap-3 flex-row text-oswald  w-[340px] pt-2 p-11 orderstatusButton  bg-gradient-to-t from-Grad_Green  to-Dark_Green ...  ">
                  <p className='mr-20'>Delivered</p>
                  <img src={check} alt="check" className=" top-[5px] left-[2px] w-8 h-8 ml-2" />
                </div>
              )}
            </div>
            <div className="absolute inline right-0 mt-4 mr-8">
              <img alt="contact" src={call} className=" inline w-6 h-6 mr-2" />
              <h3 className=" inline w-[200px] text-[18px] font-semibold font-maven text-Dark_Green">
                Seller Contact:
              </h3>
              <p className=" mt-[-2px] ml-8">{sel_contact}</p>
            </div>
            <div className="absolute  right-0 mt-16 ">
              <button className=" flex justify-center gap-1 flex-row font-bold text-oswald w-[180px] pt-2 p-4 direcButton align-items-flex-end">
                Direction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MyCard;