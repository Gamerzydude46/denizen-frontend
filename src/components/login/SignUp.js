import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import backArrow from '../../assets/icons/backArrow.svg'
import user from '../../assets/icons/user.svg'
import { NavLink } from 'react-router-dom';


const SignUp = () => {
    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/home' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-3 text-5xl font-oswald font-bold'>Create Account</h1>
            </div>
            <h1 className='font-maven font-medium text-lg mt-4 ml-2'>Hii, Welcome to Denizen Family !</h1>
            <form className='mt-2'>
                <div className='flex flex-row gap-9'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <img src={user} alt='navigate back' className='mr-1' />
                        <TextField id="input-with-sx" label="Firstname" variant="standard" InputLabelProps={{style: {fontSize: 40}}}/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <img src={user} alt='navigate back' className='mr-1' />
                        <TextField id="input-with-sx" label="Lastname" variant="standard" />
                    </Box>
                </div>
            </form>
            
        </FormControl>
    );
}

export default SignUp;