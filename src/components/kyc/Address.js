import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import building from '../../assets/icons/building.svg';
import city from '../../assets/icons/city.svg';
import state from '../../assets/icons/state.svg';
import district from '../../assets/icons/district.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import pin from '../../assets/icons/pin.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";


    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Address(){

    return(
        
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-14'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={building} alt='navigate back' className='mr-2' />
                            <TextField
                                id="rAdd"
                                label="Residence Address"
                                variant="standard"
                                sx={{width: '600px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    
                    </div>
                    <div className="flex flex-row gap-6">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={state} alt='navigate back' className='mr-2' />
                            <TextField
                                id="state"
                                label="State"
                                variant="standard"
                                sx={{width: '160px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={district} alt='navigate back' className='mr-2' />
                            <TextField
                                id="dist"
                                label="District"
                                variant="standard"
                                sx={{width: '160px'}}
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
                                label="City"
                                variant="standard"
                                sx={{width: '160px'}}
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
                                id="Cnum"
                                label="Contact Number"
                                variant="standard"
                                sx={{width: '160px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={pin} alt='navigate back' className='mr-2' />
                            <TextField
                                id="pCode"
                                label="Pin Code"
                                variant="standard"
                                sx={{width: '160px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    
                    </div>
                    
                    
                    
                            
                    
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
    );
}

export default Address;
