import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import backArrow from '../../assets/icons/backArrow.svg'
import user from '../../assets/icons/user.svg'
import mail from '../../assets/icons/mail.svg'
import key from '../../assets/icons/key.svg'
import { NavLink } from 'react-router-dom';

  
const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const SignUp = (nav,setNav,outlet) => {
    
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' onClick={()=> nav.setNav(true)} >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-3 text-5xl font-oswald font-bold'>Create Account</h1>
            </div>
            <h1 className='font-maven font-medium text-lg mt-6 ml-3'>Hii, Welcome to Denizen Family !</h1>
            <form className='mt-4 ml-2'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='flex flex-row gap-9'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="fname"
                                label="Firstname"
                                variant="standard"
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE', } }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="lname"
                                label="Lastname"
                                variant="standard"
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }} 
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={mail} alt='navigate back' className='mr-2' />
                            <TextField
                                id="email"
                                label="Email Address"
                                variant="standard"
                                sx={{width: '525px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='flex flex-row gap-9'>
                        <div className=' flex flex-row mt-4'>
                            <img src={key} alt='navigate back' className='mr-2 mt-6' />
                            <FormControl sx={{ width: '27ch' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Enter your password</InputLabel>
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff sx={{ color: '#8D99AE' }} /> : <Visibility sx={{ color: '#8D99AE' }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className=' flex flex-row mt-4'>
                            <img src={key} alt='navigate back' className='mr-2 mt-6' />
                            <FormControl sx={{ width: '27ch' }} variant="standard">
                                <InputLabel htmlFor="confirmpassword" sx={{ fontSize: 18, color: '#8D99AE' }}>Confirm your password</InputLabel>
                                <Input
                                    id="confirmpassword"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff sx={{ color: '#8D99AE' }} /> : <Visibility sx={{ color: '#8D99AE' }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className='mt-7 font-maven font-medium'>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                id="userAgreement"
                                name="userAgreement"
                                className='w-5 h-5'
                                 />
                            <label for="userAgreement" className='ml-3'>I agree to the terms and conditions as set out by the <span className='text-Primary_Red'>user agreement</span>.</label>
                        </div>
                        <div className='flex items-center mt-1'>
                            <input
                                type="checkbox"
                                id="privacyPolicy"
                                name="privacyPolicy"
                                className='w-5 h-5'
                                 />
                            <label for="privacyPolicy"  className='ml-3'>I state that I have read, understood and accept the <span className='text-Primary_Red'>Privacy Policy</span>.</label>
                        </div>
                    </div>
                    <button type='button'
                        className='accessButton text-oswald w-[585px] '>
                        Sign Up
                    </button>
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default SignUp;