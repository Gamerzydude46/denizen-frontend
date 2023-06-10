import React, { useState } from 'react';
import location from '../../assets/icons/location.svg';
import priceTag from '../../assets/icons/priceTag.svg';
import transaction from '../../assets/icons/transaction.svg';
import schedule from '../../assets/icons/schedule.svg';
import stopwatch from '../../assets/icons/stopwatch.svg';
import check from '../../assets/icons/check.svg';

// Edit Modal Form
function Modal(props) {
  const {del_address, deliver_date, deliver_time, onClose } = props;
  const [address, setAddress] = useState(del_address);
  const [date, setDate] = useState(deliver_date);
  const [time, setTime] = useState(deliver_time); const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (<div className="fixed top-0 left-[500px] w-full h-full flex items-center justify-center">
      <div className="modal-container bg-White w-11/12 md:max-w-md mx-auto rounded shadow-lg z-80 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-4">
            <p className="text-2xl font-bold">EDIT DETAILS :</p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5l7.5 7.5 1.5-1.5-7.5-7.5z"
                />    
              </svg>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="address" className="block text-black font-bold mb-2">
                Delivery Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-black font-bold mb-2">
                Delivery Date
              </label>
              <input
                type="text"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-black font-bold mb-2">
                Delivery Time
              </label>
              <input
                type="text"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-10 font-semibold bg-Primary_Grey p-3 rounded-lg text-Base hover:bg-warn hover:text-Secondary_Red mr-2">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Edit(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="relative right-[105px] top-[95px] ">
        <button
          className="flex justify-center gap-1 flex-row text-oswald w-[140px] pt-2 p-2 accessButton align-items-flex-end"
          onClick={handleOpenModal}>
          Edit
        </button>
      </div>
      {isModalOpen && (
        <Modal
          del_address={props.del_address}
          deliver_date={props.deliver_date} 
          deliver_time={props.deliver_time}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

// Seller Feed Card 

function Card(props) {
  const {
    image,
    item_title,
    del_address,
    deliver_date,
    deliver_time,
    selling_cost,
    delivery_charges,
    status,
  } = props;

  return (
    <div className="z-10 relative flex items-start flex-shrink-0 w-[890px] h-[195px] top-[25px] left-[60px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-t-0 border-l-4 border-b-4">
      <img
        className="absolute top-2 left-6 w-[160px] h-[160px] rounded-lg shadow-md"
        src={image}
        alt={item_title}/>
      <div className="absolute top-2 left-[215px]">
        <h2 className="text-2xl font-medium font-maven text-black]">{item_title}</h2>
        <div className="del-address">
          <h3 className="absolute top-[35px] left-[29px] w-[200px] text-[17px] font-semibold font-maven text-Primary_Red ">
            Delivery Address:
          </h3>
          <img alt="loc" src={location} className="absolute top-[40px] left-[2px] w-5 h-5 mr-1" />
          <p className="absolute top-[52px] left-[29px] w-[300px] font-normal text-[17px] text-left font-maven flex items-center mt-2 text-Primary_Grey">
            {del_address}
          </p>
        </div>
        <div className="del-by">
          <h3 className="absolute top-[118px] left-[30px] w-[200px] text-[17px] font-semibold font-maven text-Grad_Blue">
            Delivery By:
          </h3>
          <img alt="sch" src={schedule} className="absolute top-[123px] left-[2px] w-5 h-5 mr-1" />
          <p className="absolute top-[137px] left-[30px] w-[300px] font-normal text-[16px] text-left font-maven flex items-center mt-2 text-Primary_Grey">
            {deliver_date} @{deliver_time}
          </p>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex items-start">
        <div className="selling-cost">
          <h3 className="absolute top-[5px] left-[-100px] w-[200px] text-[19px] font-semibold font-maven text-Green ">
            Selling Cost:
          </h3>
          <img alt="prc" src={priceTag} className="absolute top-[6px] left-[-138px] w-7 h-7 mr-1" />
          <p className="absolute top-[35px] left-[-100px]">Rs: {selling_cost}/-</p>
        </div>
        <div className="del-charges">
          <h3 className="absolute top-[68px] left-[-100px] w-[200px] text-[18px] font-semibold font-maven text-Dark_Green">
            Delivery Charges:
          </h3>
          <img alt="trc"src={transaction} className="absolute top-[68px] left-[-138px] w-6 h-6 mr-2"/>
          <p className="absolute top-[96px] left-[-100px]">Rs: {delivery_charges}/-</p>
        </div>
        {status === 'accepted' ? (
          <div className="relative right-[105px] top-[95px] ">
            <button className="flex justify-center gap-1 flex-row font-bold text-oswald w-[140px] pt-2 p-2 accessButton align-items-flex-end">
              View
            </button>
          </div>
        ) : (
          <Edit del_address={del_address} deliver_date={deliver_date} deliver_time={deliver_time} />
        )}
        <div className="absolute right-[-81px] top-[70px] transform -translate-y-1/2">
          {status === 'pending' ? (
            <div className="flex justify-center gap-3 flex-row text-oswald ml-10 w-[195px] pt-2 p-11 statusButton align-items-flex-end bg-gradient-to-t from-GradOrange  to-Orange ... -rotate-90">
              <img src={stopwatch} alt="stopwatch" className="relative top-[5px] right-[2px] w-8 h-8 mr-2" />
              <p>Pending</p>
            </div>
          ) : (
            <div className="flex justify-center gap-3 flex-row text-oswald ml-10 w-[195px] pt-2 p-11 statusButton align-items-flex-end -rotate-90  bg-gradient-to-t from-Grad_Green  to-Dark_Green ...  ">
              <img src={check} alt="check" className="relative top-[5px] right-[2px] w-8 h-8 mr-2" />
              <p className=''>Accepted</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;