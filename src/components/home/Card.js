import React from 'react';
import dummyImg1 from "../../assets/images/dummyImg1.png";
import map from "../../assets/icons/map.svg";
import foodDelivery from "../../assets/icons/foodDelivery.svg";
import user from "../../assets/icons/userColor.svg";
import check from "../../assets/icons/check.svg";
import { NavLink } from 'react-router-dom';
import { borderRadius } from '@mui/system';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import whatsapp from "../../assets/images/whatsapp.png"
import star from "../../assets/images/star.png";
import filledstar from "../../assets/images/filledstar.png";
import request from '../../assets/images/request.png';
import axios from "axios";

const style = {
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width: '600px',
       height: '300px',
       bgcolor: 'background.paper',
       border: '4px solid 	#8B0000',
       borderRadius: '10px',
       boxShadow: 24,
       p: 4,
};

const Card = (props) => {
       const {
              pFunction,
              fname,
              lname,
              contact,
              rating,
              deliveries ,
              email
       } = props
       const [open, setOpen] = React.useState(false);
       const [loading, setLoading] = React.useState(false);
       const [pic, setPic] = React.useState([]);

       const getImg = async () => {
              axios.post("http://localhost:8080/documents/getUserProfile",{user_email: email},{ withCredentials: true }).then((res) => {
                     setPic(res.data) 
              }).catch(err => console.log())
       }
       
       React.useEffect(() => {
              getImg();
       }, [])
       
       const handleRequest = async () => {
              setLoading(true);
              const funFlag = await pFunction(email);
              console.log(funFlag)
              if(funFlag === true){
                     setOpen(true);
                     setLoading(false);
              }else{
                     setLoading(false);
                     window.alert("Email sent for Special delivery Request!")
              }
       }

       return (

              <div className="max-w-md bg-white border-b-4 border-l-4 bg-Base border-radius: 0.25 border-solid  ml-5 rounded-x5 overflow-hidden " style={{ flex: "none", borderColor: "#B30000", borderRadius: "20px" }}>
                     <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                   <img className="h-40 rounded-lg w-100 object-cover md:w-44" src={pic.flag? `https://${pic.docs.URL}.ipfs.w3s.link/${pic.docs.name}` : dummyImg1} alt="Your pic" />
                            </div>
                            <div className="pl-5 pr-5 md:flex-shrink-5">
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2 " src={user} alt="User" />
                                          <p className="text-sm mr-2 font-maven-pro font-bold"> {fname} {lname}</p>
                                          <img className="h-6 w-6 mr-2 font-maven-pro font-bold" src={check} alt="Check" />
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={whatsapp} alt="contact" />
                                          <p className="text-sm font-maven-pro font-bold"> {contact}</p>
                                   </div>
                                   <div className="mt-3 flex items-center">
                                          <img className="h-6 w-6 mr-2" src={foodDelivery} alt="FoodDelivery" />
                                          <p className="text-sm font-maven-pro font-bold"> {deliveries} Deliveries</p>
                                   </div>
                                   <div className="mt-3" style={{ display: "flex" }}>
                                          {[1, 2, 3, 4, 5,].map((value) => {
                                                 return value <= rating ? <img src={filledstar} className='w-8' /> : <img src={star} className='w-8' />
                                          })}
                                   </div>
                            </div>
                     </div>
                     <div className="ml-2 mb-2 items-center float">

                            <button className="accessButton  inline-flex items-center justify-center p-6 text-oswald font-bold " onClick={handleRequest} data-rounded="rounded-md" data-primary="red-600" data-primary-reset style={{ marginTop: 10 }}>{loading? "Processing.......":"SEND SPECIAL DELIVERY REQUEST"}</button>

                     </div>
                     <Modal

                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                     >
                            <Box sx={style} classname="relative p-2">


                                   <div className="absolute p-4 left-[120px] top-[30px]">
                                          <Typography className="" style={{
                                                 fontSize: '20px', fontWeight: 'bold', background: 'linear-gradient(90deg, #CF0A0A 0%, #2B2D42 140.91%)',
                                                 '-webkit-background-clip': 'text',
                                                 '-webkit-text-fill-color': 'transparent',
                                                 backgroundClip: 'text',
                                                 textFillColor: 'transparent',
                                                 color: '#FFFFFF'
                                          }}>FEATURED DELIVERY REQUEST</Typography>
                                   </div>

                                   <div className="absolute ml-16 p-2 left-[100px] mt-[60px]">

                                          <img src={request} alt="Request" className={' ml-20 left-[370px] w-[60px] h-[60px] center '} />
                                   </div>
                                   <div className="absolute p-2 left-[100px] mt-[140px]">
                                          <Typography className="text-Primary_Grey font-lg">You Order Request  has been submitted successfully !</Typography>
                                   </div>
                                   <div className="absolute p-2 left-[150px] mt-[170px]">
                                          <Typography className="text-Primary_Grey font-sm">Check Track Orders Menu for more Info</Typography>
                                   </div>

                            </Box>
                     </Modal>
              </div>
       );
}
export default Card
