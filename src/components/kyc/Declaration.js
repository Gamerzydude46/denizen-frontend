import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import user from '../../assets/icons/user.svg';
import cal from '../../assets/icons/calendar.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Typography } from "@mui/material";


    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Declaration(){
        const [curdate, setdate] = React.useState(new Date().toISOString().substr(0, 10));
        const handleChanges = (event) => {
            setdate(event.target.value);
        };
        const [name, setName] = useState('Anna Marie');

        const handleChange = (event) => {
            setName(event.target.value);
        };

    return(
        
        <>
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-7'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row ">
                        <div className=' mt-6 '>
                            
                                <typography className=' font-semibold '>
                                    I hereby declare that the details furnished above are true
                                    and correct to the best of my knowledge and belief and I undertake
                                    to inform you of any changes therein, immediately. In case any of
                                    the above information is found to be false or untrue or misleading
                                    or misrepresenting, I am aware that I may be held liable for it.
                                </typography>
                                
                        </div>
                    </div>
                    <div className="flex flex-row gap-25 mt-8">
                    <div className='flex mt-2 '>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' ,ml:0 }}>

                            <img src={user} alt='navigate back' width="30px" className=' mr-4  ' style={{width:"12%"}} />
                            <input type="text" id="name" disabled value={name} onChange={handleChange} />
                        
                        </Box>
                        </div>
                        <div className='mt-2 ml-20'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' ,ml:9}}>
                            <img src={cal} alt='navigate back' className='mr-4 ml-20' style={{width:"12%"}} />
                            <input type="date" disabled value={curdate} onChange={handleChanges} className='bg-none  border-none  '></input>
                        </Box>
                    </div>

                    </div>
                    <section className='mt-10 font-maven font-sm'>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                id="userAgreement"
                                name="conditions"
                                className= 'w-5 h-5'
                            />
                            <label for="userAgreement" className='ml-3'>I agree to the terms and conditions as set out by the <span className='text-Primary_Red'>User agreement</span>.</label>
                        </div>
                        <div className='flex items-center mt-1'>
                            <input
                                type="checkbox"
                                id="privacyPolicy"
                                name="conditions"
                                className='w-5 h-5 '
                            />
                            <label for="privacyPolicy" className='ml-3'>I state that I have read, understood and accept the <span className='text-Primary_Red'>Privacy Policy</span>.</label>
                        </div>
                    </section>
                            
                
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        </>
    );
}

export default Declaration;
