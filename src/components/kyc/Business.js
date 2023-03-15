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

import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Business(){
        const [gen, setGen] = React.useState('');
        const handleChange = (event) => {
            setGen(event.target.value);
        };

    return(
        
        <>
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-20'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={businessAddress} alt='navigate back' className='mr-2' />
                            <TextField
                                id="rAdd"
                                label="Registered  Name of Business/Shop"
                                variant="standard"
                                sx={{width: '600px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    </div>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={building} alt='navigate back' className='mr-2' />
                            <TextField
                                id="rAdd"
                                label="Address of business/shop"
                                variant="standard"
                                sx={{width: '600px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    </div>
                    
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={whatsapp} alt='navigate back' className='mr-2' />
                            <TextField
                                id="state"
                                label="Contact"
                                variant="standard"
                                sx={{width: '180px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={mail} alt='navigate back' className='mr-2' />
                            <TextField
                                id="dist"
                                label=" e.g. johndoe@gmail.com"
                                variant="standard"
                                sx={{width: '180px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                   
                    </div>
                    <div className="flex flex-row gap-10">
                    
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={district} alt='navigate back' className='mr-2' />
                            <TextField
                                id="dist"
                                label="District"
                                variant="standard"
                                sx={{width: '180px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={city} alt='navigate back' className='mr-2' />
                            <TextField
                                id="ctv"
                                label="City/Town/Village"
                                variant="standard"
                                sx={{width: '180px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    
                    </div>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end'  }}>
                            <img src={state} alt='navigate back' className='mr-2' />
                            <InputLabel id="gend" sx={{mt:38,ml:14,fontSize: 18, color: '#8D99AE' ,w:'200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}>Business Type</InputLabel>
                            <Select
                            labelId="gend"
                            id="genid"
                            value={gen}
                            onChange={handleChange}
                            label="Business Type"
                            sx={{width: '180px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            >
                           
                            <MenuItem value={'s'}>Seller</MenuItem>
                            <MenuItem value={'u'}>User</MenuItem>
                            </Select>
                           
                        </Box>
                    </div>
                    </div>
                    
                    
                    
                            
                    <button type='button'
                        className='flex justify-center gap-5 flex-row accessButton text-oswald w-[200px]  p-2  align-items-flex-end '>
                        Next
                        <img src={nextNav} alt='navigate back' className='mr-2 w-9' />

                    </button>
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        </>
    );
}

export default Business;
