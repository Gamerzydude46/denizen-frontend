import React from "react";
import Box from '@mui/material/Box';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import mail from '../../assets/icons/mail.svg';
import user from '../../assets/icons/user.svg';
import gender from '../../assets/icons/gender.svg';
import cal from '../../assets/icons/calendar.svg';
import pan from '../../assets/icons/panCard.svg';
import adhar from '../../assets/icons/adharCard.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';



    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Identity(){
       
        const [gen, setGen] = React.useState('');
        const handleChange = (event) => {
            setGen(event.target.value);
        };

        const [dob, setdob] = React.useState('');
        const handleChanges = (event) => {
            setdob(event.target.value);
        };

        const schema = yup.object({
            fname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
            mname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
            lname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
            email: yup.string().email("*Enter a valid email").max(255).required("*required"),
            pan: yup.string().matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/, "*Enter a valid Pan card number"),
            adhar: yup.string().matches(/^\d{12}$/, "*Numbers not allowed").required("*required"),
        }).required();
    
        const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });


        const onSubmit = (data) => {

            console.log(data)
        };

    return(
        
        <>
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-14' onSubmit={handleSubmit(onSubmit)}>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="fname"
                                label="First Name"
                                variant="standard"
                                sx={{width: '200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("fname")}
                                helperText={errors.fname?.message}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="mname"
                                label="Middle Name"
                                variant="standard"
                                sx={{width: '200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="lname"
                                label="Last Name"
                                variant="standard"
                                sx={{width: '200 px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    </div>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end'  }}>
                            <img src={gender} alt='navigate back' className='mr-2' />
                            <InputLabel id="gend" sx={{mt:12.5,ml:15,fontSize: 18, color: '#8D99AE' ,w:'200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}>Gender</InputLabel>
                            <Select
                            labelId="gend"
                            id="genid"
                            value={gen}
                            onChange={handleChange}
                            label="Gender"
                            sx={{width: '180px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            >
                            
                            <MenuItem value={'m'}>Male</MenuItem>
                            <MenuItem value={'f'}>Female</MenuItem>
                            <MenuItem value={'o'}>Other</MenuItem>
                            </Select>
                           
                        </Box>
                    </div>
                    
                    <div className='mt-4 display-flex justify-content' >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={cal} alt='navigate back' className='mr-2  mt-2' />
                            <InputLabel id="DOB" sx={{mt:12.5,ml:47.5,fontSize: 18, color: '#8D99AE' ,w:'200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}>Date of Birth</InputLabel>
                            <input type="date" placeholder=" " value={dob}
                            onChange={handleChanges} labelid="DOB"
                            className="bg-Base  border-b border-Primary_Grey-500 focus:outline-none focus:border-"></input>
                            </Box>
                    </div>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end'  }}>
                            <img src={mail} alt='navigate back' className='mr-2' />
                            <TextField
                                id="email"
                                label="Email"
                                variant="standard"
                                sx={{width: '200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={pan} alt='navigate back' className='mr-2' />
                            <TextField
                                id="pan"
                                label="Pan Card Number"
                                variant="standard"
                                sx={{width: '200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={adhar} alt='navigate back' className='mr-2' />
                            <TextField
                                id="adhar"
                                label="Aadhar card Number"
                                variant="standard"
                                sx={{width: '200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                            />
                        </Box>
                    </div>
                    
                    
                    
                      
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        </>
    );
}

export default Identity;
