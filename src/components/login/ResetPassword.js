import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import mail from '../../assets/icons/mail.svg'
import { NavLink } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.svg'


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const ResetPassword = () => {

    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/home' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-4 text-5xl font-oswald font-bold'>Reset Password</h1>
            </div>
            <form className='mt-4 ml-3'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={mail} alt='navigate back' className='mr-2' />
                            <TextField
                                id="email"
                                label="Email Address"
                                variant="standard"
                                sx={{ width: '325px' }}
                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <button type='button'
                        className='w-[369px] accessButton text-oswald'>
                        Send One Time Password
                    </button>
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default ResetPassword;