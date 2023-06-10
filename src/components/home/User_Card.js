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
    <div className="z-10 relative flex items-start flex-shrink-0 w-[760px] h-[175px] top-[20px] left-[60px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-t-0 border-r-0 border-l-4 border-b-4">
      <img
        className="absolute top-2 left-6 w-[145px] h-[145px] rounded-lg shadow-md"
        src={image}
        alt={item_title}/>
      <div className="absolute top-2 left-[205px]">
        <h2 className="text-[19px] font-medium font-maven text-black">{item_title}</h2>
        <div className="del-address">
          <h3 className="absolute top-[30px] left-[29px] w-[200px] text-[16px] font-semibold font-maven text-Primary_Red ">
            Delivery Address:
          </h3>
          <img alt="loc" src={location} className="absolute top-[35px] left-[4px] w-4 h-4 mr-1" />
          <p className="absolute top-[47px] left-[32px] w-[300px] font-normal text-[16px] text-left font-maven flex items-center mt-2 text-Primary_Grey">
            {del_address}
          </p>
        </div>
        <div className="del-by">
          <h3 className="absolute top-[107px] left-[30px] w-[200px] text-[16px] font-semibold font-maven text-Grad_Blue">
            Delivery By:
          </h3>
          <img alt="sch" src={schedule} className="absolute top-[112px] left-[3px] w-4 h-4 mr-1" />
          <p className="absolute top-[123px] left-[30px] w-[300px] font-normal text-[15px] text-left font-maven flex items-center mt-2 text-Primary_Grey">
            {deliver_date} @{deliver_time}
          </p>
        </div>
      </div>
      <div className="absolute top-2 right-[-50px] flex items-start">
        <div className="selling-cost">
          <h3 className="absolute top-[5px] left-[-100px] w-[200px] text-[16px] font-semibold font-maven text-Green ">
            Selling Cost:
          </h3>
          <img alt="prc" src={priceTag} className="absolute top-[6px] left-[-135px] w-6 h-6 mr-1" />
          <p className="absolute top-[33px] left-[-100px]">Rs: {selling_cost}/-</p>
        </div>
        <div className="del-charges">
          <h3 className="absolute top-[63px] left-[-100px] w-[200px] text-[15px] font-semibold font-maven text-Dark_Green">
            Delivery Charges:
          </h3>
          <img
            alt="trc"
            src={transaction}
            className="absolute top-[67px] left-[-135px] w-5 h-5 mr-2"
          />
          <p className="absolute top-[87px] left-[-100px]">Rs: {delivery_charges}/-</p>
        </div>
          <div className="relative right-[110px] top-[95px] ">
            <button className="flex justify-center gap-1 flex-row text-oswald w-[125px] pt-1 p-4 mt-7 text-White text-l font-semibold bg-Primary_Red rounded-md h-8 hover:bg-Primary_Grey align-items-flex-end">
              Accept
            </button>
          </div>
      </div>
      </div>
  );
}

export default Card;