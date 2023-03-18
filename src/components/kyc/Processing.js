import React from "react";
import Box from '@mui/material/Box';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import mail from '../../assets/icons/mail.svg';
import user from '../../assets/icons/user.svg';
import gender from '../../assets/icons/gender.svg';
import cal from '../../assets/icons/calendar.svg';
import pan from '../../assets/icons/panCard.svg';
import adhar from '../../assets/icons/adharCard.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import transac from '../../assets/images/syncUpdate.png';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Processing(){
       


    return(
        
        <>
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-20'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10"></div>
      
                    <h1 className="mt-20 text-lg ml-10" >You Application has been submitted successfully !</h1>
        
                    <div >
                    <h4 className="mt-2 ml-16">We will Notify you once your KYC being Verified</h4>
                    </div>
                    <div className="ml-10">
                    <img src={transac} alt="man on the bike" className="r h-[180px] w-[200px] ml-20  absolute mt-5 " />
                    </div>
        
         </ThemeProvider>
         </form>
         </FormControl>
         </div>
        </>
    );
}

export default Processing;
