import React from "react";
import request from '../../src/assets/images/request.png';
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
 
const CustomFontTheme = createTheme({
    typography: {
        fontFamily: ["Maven Pro"].join(",")
    }
});


function Module() {

    return (


        
            <ThemeProvider theme={CustomFontTheme}>
            <main className="flex h-screen w-full center items-center flex-col
             justify-center top-200">
                
                
                <div className="center mb-10">
                <Typography className="mt-20 " style={{fontSize:'30px',fontWeight:'bold' ,background: 'linear-gradient(90deg, #CF0A0A 0%, #2B2D42 140.91%)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  color: '#FFFFFF'}}>FEATURED DELIVERY REQUEST</Typography>
                </div>
                
                <div className="mb-10 ">
                 <img src={request} alt="Request"className={' w-[150px] h-[150px] center'}/>
                 </div>
                 <div className="mb-4 ">
                <Typography className="text-Primary_Grey font-lg">You Order Request  has been submitted successfully !</Typography>
                 </div>
                 <div className="mb-10 ">
                <Typography className="text-Primary_Grey font-sm">Check Track Orders Menu for more Info</Typography>
                 </div>
                        
            </main>
        
            </ThemeProvider>

    );
}
export default Module;