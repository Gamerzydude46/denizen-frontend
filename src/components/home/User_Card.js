import React from 'react';
import location from '../../assets/icons/location.svg';
import priceTag from '../../assets/icons/priceTag.svg';
import transaction from '../../assets/icons/transaction.svg';
import schedule from '../../assets/icons/schedule.svg';

function Card(props) {
  const {
    image,
    item_title,
    del_address,
    deliver_date,
    deliver_time,
    selling_cost,
    delivery_charges,
  } = props;

  return (
    <div className="z-10 relative flex items-start flex-shrink-0 w-[923px] h-[228px] top-[25px] left-[65px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-t-0 border-r-0 border-l-4 border-b-4">
      <img
        className="absolute top-4 left-6 w-[193px] h-[193px] rounded-lg shadow-md"
        src={image}
        alt={item_title}/>
      <div className="absolute top-4 left-[253px]">
        <h2 className="text-2xl font-medium font-maven text-black]">{item_title}</h2>
        <div className="del-address">
          <h3 className="absolute top-[37px] left-[29px] w-[200px] text-[17px] font-semibold font-maven text-Primary_Red ">
            Delivery Address:
          </h3>
          <img alt="loc" src={location} className="absolute top-[42px] left-[2px] w-5 h-5 mr-1" />
          <p className="absolute top-[54px] left-[29px] w-[300px] font-normal text-[18px] text-left font-maven text-lg flex items-center mt-2 text-Primary_Grey">
            {del_address}
          </p>
        </div>
        <div className="del-by">
          <h3 className="absolute top-[146px] left-[30px] w-[200px] text-[17px] font-semibold font-maven text-Blue">
            Delivery By:
          </h3>
          <img alt="sch" src={schedule} className="absolute top-[150px] left-[2px] w-5 h-5 mr-1" />
          <p className="absolute top-[162px] left-[30px] w-[300px] font-normal text-[16px] text-left font-maven text-lg flex items-center mt-2 text-Primary_Grey">
            {deliver_date} @{deliver_time}
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-[-37px] flex items-start">
        <div className="selling-cost">
          <h3 className="absolute top-[5px] left-[-100px] w-[200px] text-[19px] font-semibold font-maven text-Green ">
            Selling Cost:
          </h3>
          <img alt="prc" src={priceTag} className="absolute top-[6px] left-[-138px] w-7 h-7 mr-1" />
          <p className="absolute top-[38px] left-[-100px]">Rs: {selling_cost}/-</p>
        </div>
        <div className="del-charges">
          <h3 className="absolute top-[75px] left-[-100px] w-[200px] text-[18px] font-semibold font-maven text-Dark_Green">
            Delivery Charges:
          </h3>
          <img
            alt="trc"
            src={transaction}
            className="absolute top-[75px] left-[-138px] w-6 h-6 mr-2"
          />
          <p className="absolute top-[105px] left-[-100px]">Rs: {delivery_charges}/-</p>
        </div>
          <div className="relative right-[110px] top-[115px] ">
            <button className="flex justify-center gap-1 flex-row font-bold text-oswald w-[140px] pt-2 p-4 accessButton align-items-flex-end">
              Accept
            </button>
          </div>
      </div>
      </div>
  );
}

export default Card;