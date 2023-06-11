import React from 'react';
import location from '../../assets/icons/location.svg';
import priceTag from '../../assets/icons/priceTag.svg';
import transaction from '../../assets/icons/transaction.svg';
import schedule from '../../assets/icons/schedule.svg';
import city from '../../assets/icons/city.svg';
import axios from "axios";

function SCard(props) {
  const {
    image,
    item_id,
    item_title,
    del_address,
    deliver_date,
    deliver_time,
    selling_cost,
    delivery_charges,
    seller_email
  } = props;


  const [loading, setLoading] = React.useState(false);
  const [bname, setBname] = React.useState(undefined);

  const getBname = async () => {
    axios.post("http://localhost:8080/postItems/getBname",{ ref_email: seller_email}, { withCredentials: true }).then((res) => {
      setBname(res.data.name)
    }).catch(err => console.log(err))
  }

  React.useEffect(() => {
    getBname();
  }, [])

  const handleAccept = async (e) => {
    e.preventDefault();
    setLoading(true)
    axios.put("http://localhost:8080/postItems/accepted", {
      item_id: item_id,
      seller_email: seller_email

    }, { withCredentials: true }).then((res) => {
      console.log(res)
      alert(`${res.data.message}  with order_Id ${item_id}`);
      setLoading(false)
    }).catch(err => console.log(err))
  }
  
  return (
    <div className="z-10 relative flex items-start flex-shrink-0 w-[575px] h-[250px] top-[28px] left-[37px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-t-0 border-r-0 border-l-4 border-b-4">
      <img
        className="absolute top-2 left-6 w-[155px] h-[160px] rounded-lg shadow-md"
        src={image}
        alt={item_title} />
      <div className="absolute top-0 left-[200px]">
        <h2 className="text-[21px] font-medium font-maven text-black]">{item_title}</h2>
        <div className="del-address">
          <h3 className="absolute top-[32px] left-[29px] w-[200px] text-[15px] font-semibold font-maven text-Primary_Red ">
            Delivery Address:
          </h3>
          <img alt="loc" src={location} className="absolute top-[35px] left-[4px] w-4 h-4 mr-1" />
          <p className="absolute top-[50px] left-[29px] w-[300px] font-normal text-[16px] text-left font-maven flex items-center mt-2 text-Primary_Grey">
            {del_address}
          </p>
        </div>
        <div className="del-by">
          <h3 className="absolute top-[108px] left-[30px] w-[200px] text-[16px] font-semibold font-maven text-Grad_Blue">
            Delivery By:
          </h3>
          <img alt="sch" src={schedule} className="absolute top-[114px] left-[5px] w-4 h-4 mr-1" />
          <p className="absolute top-[125px] left-[30px] w-[300px] font-normal text-[15px] text-left font-maven flex items-center mt-2 text-Primary_Grey">
            {deliver_date} @{deliver_time}
          </p>
        </div>
      </div>
      <div className="absolute top-[-45px] right-[45px] flex">
        <div className="selling-cost">
          <h3 className="absolute top-[205px] left-[-127px] w-[200px] text-[16px] font-semibold font-maven text-Green ">
            Selling Cost:
          </h3>
          <img alt="prc" src={priceTag} className="absolute top-[207px] left-[-153px] w-5 h-5 mr-1" />
          <p className="absolute top-[230px] left-[-125px]">Rs: {selling_cost}/-</p>
        </div>
        <div className="del-charges">
          <h3 className="absolute top-[205px] left-[20px] w-[200px] text-[16px] font-semibold font-maven text-Dark_Green">
            Delivery Charges:
          </h3>
          <img
            alt="trc"
            src={transaction}
            className="absolute top-[207px] left-[-8px] w-5 h-5 mr-2"
          />
          <p className="absolute top-[230px] left-[20px]">Rs: {delivery_charges}/-</p>
        </div>
        <div className="Request-by">
          <img alt="trc" src={city} className="relative top-[255px] left-[-153px] inline w-5 h-5 mr-2" />
          <h3 className="relative top-[255px] left-[-155px] inline w-[200px] text-[16px] font-semibold font-maven ">
            Request By:
          </h3>
          <p className="relative top-[230px] left-[-55px] ml-8">{bname.name}</p>
        </div>
        <div className="absolute right-[350px] top-[200px] ">
          <button
            type="button"
            onClick={handleAccept}
            disabled={loading}
            className="flex justify-center gap-1 flex-row font-bold text-oswald w-[150px] pt-1 p-3 mt-10 text-White text-xl bg-Primary_Red rounded-md h-10 hover:bg-Primary_Grey align-items-flex-end"

          >
            {loading ? "Processing..." : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SCard;