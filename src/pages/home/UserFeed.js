import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/home/User_Card';
import Data from '../../components/home/Sel_Data';
import axios from "axios";

const cardd = Data.map((d) => {
    // const[data,setData] = React.useState({
    //     key: {fname:"",lname: ""},
    //     type: "",
    //     email: "",
    //     verified: false,
    //   })
    // // React.useEffect(() => {
    // //     axios.get("http://localhost:8080/postItems/getItems", { withCredentials: true }).then((info) => {
    // //       setData({ 
    // //         key:info.data.data.key,
    // //         seller_email:info.data.data.fname,
    // //         user_email:null,
    // //         receiver:"Receiver",
    // //         item_name:"string",
    // //         delivery_address:"string",
    // //         item_cost:233,
    // //         delivery_cost:878,
    // //         distance:32,
    // //         delivery_date:info.data.data.delivery_date,
    // //         delivery_time:info.data.data.deliver_by,
    // //         category:"small",
    // //         image:info.data.data.image.URL,
    // //         accepted:true,
    // //         delivered:false,
    // //         special:false
    // //       })
    // //     })
    //   })
    return (
        <Card
            key={d.key}
            image={d.image}
            item_title={d.item_title}
            del_address={d.del_address}
            deliver_by={d.deliver_by}
            deliver_date={d.deliver_date}
            deliver_time={d.deliver_time}
            selling_cost={d.selling_cost}
            delivery_charges={d.delivery_charges}
        />
    );
});

function UserFeed(){
    return(
        <Layout>
        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
        <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full"> 
           {cardd}
          </div>   
          <div className="fixed z-100 bottom-0 right-0">
                <div className="bg-White rounded-t-full h-[550px] w-[1000px] "> 
                    <img src={girlinbox} alt="girl in box" className="h-[520px] w-[550px] bottom-[130px] left-[430px] relative" /> 
                </div> 
                <button type="button" className="fixed justify-center flex-center bottom-[45px] right-[160px]">
                 <NavLink to="/post-orders" className='flex justify-center gap-3 font-semibold cursor-pointer flex-row text-oswald w-[250px] pt-3 p-12 accessButton' >
                        My Order
                        <span className='ml-0'>
                            <img src={deadline} alt='deadline' className='w-7 mt-1' />
                        </span>
                </NavLink>
                </button>
            </div> 
        </main>
    </Layout>
  );
}

export default UserFeed;