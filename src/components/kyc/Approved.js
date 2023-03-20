import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import building from '../../assets/icons/building.svg';
import city from '../../assets/icons/city.svg';
import state from '../../assets/icons/state.svg';
import district from '../../assets/icons/district.svg';
import mail from '../../assets/icons/mail.svg';
import InputLabel from '@mui/material/InputLabel';
import whatsapp from '../../assets/icons/whatsapp.svg';
import businessAddress from '../../assets/icons/businessAddress.svg'
import nextNav from '../../assets/icons/nextNav.svg';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import done from '../../assets/icons/newCheck.svg';


import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Approved(){
       
    return(
        
        <>
        <ThemeProvider theme={CustomFontTheme}>
        <div  style={{ width: "100%",marginLeft:'-100px', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,position:'relative'}}>
            <div className="absolute text-[22px] font-maven font-medium w-100% " >
            <h1 style={{textAlign: "center"}}>You KYC Application has been Approved !</h1>
            </div>
            
            <div style={{ display:'block',width:'38%', justifyContent: "center", alignItems: "center"}}>
           <img src={done} alt="man on the bike" className="r h-[160px] w-[180px] ml-20  absolute mt-10 " />
           </div>
         </div>
         <div style={{ position:'absolute',zIndex:'10',marginLeft:'290px',marginTop:'550px'}}>
         <button type='button'
                        className='flex justify-center gap-5 flex-row accessButton text-oswald w-[200px]  p-2  align-items-flex-end '>
                        Proceed

                    </button>
         </div>
        
         </ThemeProvider>
        </>
    );
}

export default Approved;
