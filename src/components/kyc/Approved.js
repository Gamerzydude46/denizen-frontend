import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import done from '../../assets/icons/newCheck.svg';



    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Approved(){
       
    return(
        
                <ThemeProvider theme={CustomFontTheme}>
                   <div className="flex flex-col justify-center items-center h-auto">
                    <div className="mt-20  h-10">
                        <typography className='font-3xl'>You KYC Application has been Approved !</typography>
                    </div>
                    <div  className=" flex items-center justify-center mt-2 h-300 w-300 ">
                        <img src={done} className="w-fit h-32" ></img>
                    </div>
                    <div>
                        <button 
                            className='accessButton text-oswald w-[200px] '>
                            Proceed
                        </button>
                    </div>
                   </div>
        
         </ThemeProvider>
    
        
    );
}

export default Approved;
