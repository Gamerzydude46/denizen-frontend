import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import key from '../../assets/icons/key.svg'
import { NavLink } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.svg'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid #EF233C',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };
  
const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const SetPassword = () => {
    
    const [showPassword, setShowPassword] = React.useState(false);
    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }


    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/otp' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-4 text-5xl font-oswald font-bold'>Set New Password</h1>
            </div>
            <form className='mt-4 ml-3'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='flex  flex-col'>
                        <div className=' flex flex-row mt-4'>
                            <img src={key} alt='navigate back' className='mr-2 mt-6' />
                            <FormControl sx={{ width: '42ch' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Enter your New password</InputLabel>
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
                            <FormControl sx={{ width: '42ch' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Confirm your New password</InputLabel>
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
                    </div>
                    <button 
                        type='button'
                        onClick={handleOpen}
                        className='w-[401px] accessButton text-oswald ml-1'>
                        Set New Password
                    </button>
                    <Modal
                        open={open}
                        
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <button onClick={handleClose} className='bg-Primary_Red'>close</button>
                            </Typography>
                        </Box>
                    </Modal>
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default SetPassword;