import React from 'react';
import dummyImg1 from "../../assets/images/dummyImg1.png";
import map from "../../assets/icons/map.svg";
import foodDelivery from "../../assets/icons/foodDelivery.svg";
import user from "../../assets/icons/userColor.svg";
import check from "../../assets/icons/check.svg";
import { NavLink } from 'react-router-dom';
import { borderRadius } from '@mui/system';
import star from "../../assets/images/star.png";
import filledstar from "../../assets/images/filledstar.png";


 

const Card = ({data}) => {
       return (
              <div className="max-w-md bg-white border-b-4 border-l-4  border-radius: 0.25 border-solid  ml-5 rounded-x5 overflow-hidden "style={{flex:"none",borderColor:"#B30000",borderRadius:"20px"}}>
                     <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                   <img className="h-40 rounded-lg w-100 object-cover md:w-44" src={dummyImg1} alt="Your pic" />
                            </div>
                            <div className="pl-5 pr-5 md:flex-shrink-5">
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={user} alt="User" /> 
                                          <p className="text-sm mr-2"> {data?.name}</p>
                                          <img className="h-6 w-6 mr-2" src={check} alt="Check" />
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={map} alt="Map" />
                                          <p className="text-sm"> {data?.contact}</p>                                          
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={foodDelivery} alt="FoodDelivery" /> 
                                          <p className="text-sm"> {data?.deliveries} Deliveries</p>                                          
                                   </div>
                                   <div className="mt-3" style={{display:"flex"}}>
                                          {[1,2,3,4,5,].map((value)=>{
                                                 return value <= data?.rating?<img src={filledstar} className='w-8'/>: <img src={star} className='w-8'/>
                                          })}
                                   </div>
                            </div>
                     </div>
                     <div className="ml-2 mb-2 items-center float">
                            <NavLink to="/Module">
                            <button className="accessButton  inline-flex items-center justify-center p-6 text-oswald font-bold " data-rounded="rounded-md" data-primary="red-600" data-primary-reset style={{marginTop:10}}>SEND SPECIAL DELIVERY REQUEST</button>
                           </NavLink> 
                     </div>
              </div>
       );
}
export default Card;