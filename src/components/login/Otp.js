import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import lock from '../../assets/icons/lock.svg'
import { NavLink } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.svg'


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const Otp = () => {

    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/home' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-4 text-5xl font-oswald font-bold'>Check Your Email</h1>
            </div>
            <h1 className='font-maven font-medium text-lg mt-6 ml-3'>We have sent <span className='font-bold text-xl'>OTP</span> to your email.</h1>
            <form className='mt-4 ml-3'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={lock} alt='navigate back' className='mr-2' />
                            <TextField
                                id="otp"
                                label="Enter One Time Password"
                                variant="standard"
                                type='number'
                                sx={{ width: '355px' }}
                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='flex flex-row justify-between mt-4 ml-1'>
                        <h1 className='font-maven font-medium  '>Didn’t  receive email? </h1>
                        <button className='font-bold text-Primary_Red'>Click to Resend</button>
                    </div>
                    <button type='button'
                        className='w-[392px] accessButton text-oswald ml-1'>
                        Send One Time Password
                    </button>
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default Otp;