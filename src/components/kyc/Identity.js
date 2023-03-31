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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";


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
        const handleChanges = (e) => {
            setdob(e.target.value);
        };

     //validationschema
    const schema = yup.object({
        fname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
        mname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
        lname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
        
        email: yup.string().email("*Enter a valid email").max(255).required("*required"),
        pan: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
        adhar: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),

    }).required();

    //form validation + POST(createUser) data
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {

        
    };
    
    
    
    return(
        
     
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-8' onSubmit={handleSubmit(onSubmit)} >
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="fname"
                                label="First Name"          
                                variant="standard"
                                sx={{width: '200px',mr:1}}
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
                                sx={{width: '200px',mr:1}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("mname")}
                                helperText={errors.mname?.message}
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
                                sx={{width: '200 px',mr:1}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("lname")}
                                helperText={errors.lname?.message}
                            />
                        </Box>
                    </div>
                    </div>
                    <div className="mt- 4 flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end'  }}>
                            <img src={gender} alt='navigate back' className='mr-2 '/>
                            <InputLabel id="gend" sx={{mt:12.5,ml:8,fontSize: 18, color: '#8D99AE' ,width:200}}
                            
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}>Gender</InputLabel>
                            <Select
                            labelId="gend"
                            id="genid"
                            value={gen}
                            onChange={handleChange}
                            label="Gender"
                            sx={{width: '170px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                name="gender" 
                            >
                            
                            <MenuItem value={'m'}>Male</MenuItem>
                            <MenuItem value={'f'}>Female</MenuItem>
                            <MenuItem value={'o'}>Other</MenuItem>
                            </Select>
                           
                        </Box>
                    </div>
                    
                    <div className='mt-3 display-flex justify-content' >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={cal} alt='navigate back' className='mr-2  mt-2' />
                            <InputLabel id="DOB" sx={{mt:13,ml:44.5,fontSize: 18, color: '#8D99AE' ,w:'200px'}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}></InputLabel>
                            <TextField
                                    id="dob"
                                    name="dateOfBirth"
                                    type='date'
                                    className='w-full'
                                    sx={{width: '170px',mr:1}}
                                    label="Date of Birth"
                                    inputProps={{ style: { fontSize: 18  } }}
                                    InputLabelProps={{ shrink: true,style: { fontSize: 18, color: '#8D99AE', } }}
                                    required              
                                    {...register("dateOfBirth", { required: true })}
                                    variant="standard"
                                    
                                />
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
                                sx={{width: '250px',mr:1}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("email")}
                                    helperText={errors.email?.message}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={pan} alt='navigate back' className='mr-2 w-8 h-10' />
                            <TextField
                                id="pan"
                                label="Pan Card Number"
                                variant="standard"
                                sx={{width: '250px',mr:1}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("pan")}
                                helperText={errors.pan?.message}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={adhar} alt='navigate back' className='mr-2 w-8 h-10' />
                            <TextField
                                id="adhar"
                                label="Aadhar card Number"
                                variant="standard"
                                sx={{width: '250px',mr:1}}
                                inputProps={{ style: { fontSize: 18,fontWeight: 'bold'}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("adhar")}
                                helperText={errors.adhar?.message}
                            />
                        </Box>
                    </div>
                    
                    
                    
                      
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        
        
    );
}

export default Identity;
