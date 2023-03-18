import React from "react";
import Layout from "../../components/Layout";
import officepaper from '../../assets/images/officepaper.png';
import backArrow from '../../assets/icons/backArrow.svg';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import { Outlet } from "react-router-dom";
import Form from "../../components/kyc/Form"

const data ={
    user: 'Anna Marie',
    type: 'Seller',
    verified: false,
    img: dummyImg2,
}


const steps = ['Identity','Address','Documents','Declaration'];


function UserKyc(){
    return(
      
            <Layout {...data}>
            <main className="h-full flex flex-row justify-between padding-right-10 padding-top-5">
            <div className="z-10 w-full relative">
          
                <div className="flex items-center gap-4 m-6  ">
                    <button className="bg-Primary_Red rounded-full h-[35px] w-[35px] top-100 left-100 p-2">
                        <img src={backArrow} alt="back button" className="" />
                    </button>
                
                    <h1 className="font-maven font-weight-600px text-[40px] mt-0.25">
                    KYC APPLICATION
                    </h1>
                </div>
               
                <div className="flex justify-start items-center w-70% h-auto  absolute left-30 top-100">
               

                <Form steps={steps} sx={{ width: '100%', maxWidth: '800px' }}/>
        </div>
       
    

                </div>
                

                
                <h1 className="font-oswald font-bold text-[70px] mt-1">
                    
                </h1>
                <p className="font-maven font-bold text-2xl w-1/2 mt-6">
                </p>
                <div className="flex flex-row mt-10 gap-x-10">
                    
                </div>
        
            <div className="fixed  z-10 bottom-0 right-0">
                <div className="bg-White rounded-t-full h-[430px] w-[900px] ">
                    <div>
                        <img src={officepaper} alt="man on the bike" className="h-[550px] w-[550px] bottom-[140px] left-[290px] relative" />
                    </div>
                </div>
            </div>
            
            <Outlet/>
            
            </main>
            </Layout>
            
 
    );
}

export default UserKyc;