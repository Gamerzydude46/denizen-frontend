import React from "react";
import Box from '@mui/material/Box';
import Select  from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import mail from '../../assets/icons/mail.svg';
import user from '../../assets/icons/user.svg';
import genders from '../../assets/icons/gender.svg';
import cal from '../../assets/icons/calendar.svg';
import pan from '../../assets/icons/panCard.svg';
import adhar from '../../assets/icons/adharCard.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { NavLink, useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";


    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

   

    
   
    function Identity(){
       
        const [identityDetails,setIdentityDetails] = useState({fname:'',mname:'',lname:'',gen:'',dob:'',email:'',pan:'',adhar:''});
        const [activeStep, setActiveStep,mainDetails,setMainDetails]=useOutletContext();
       
        const schema = yup.object({
            fname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
            mname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
            lname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
            email: yup.string().email("*Enter a valid email").max(255).required("*required"),
            pan: yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]$/i, "*Numbers not allowed").required("*required"),
            adhar: yup.string().matches(/^\d{12}$/i, "*Numbers not allowed").required("*required"),
            dob:yup.string().required("*required"),
            gen:yup.string().matches(/^(Male)|(Female)|(Other)+$/i, "*Numbers not allowed").required("*required"),
        }).required();
       
        React.useEffect(()=>{
            setIdentityDetails({...identityDetails,...mainDetails.identityDetails})
        },[])
       
        const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
        const navigate = useNavigate();
    
        const onSubmit = (data) => {
            console.log(data);
            setActiveStep(activeStep+1)
            setMainDetails({...mainDetails,identityDetails:identityDetails})
            navigate("/kyc/address")
            
        };
    
        const gender = [
            {
                value: '',
                label: ''
            },
            {
                value: 'male',
                label: 'Male',
            },
            {
                value: 'female',
                label: 'Female',
            },
            {
                value: 'other',
                label: 'Other',
            },
    
        ];
        
    return (
     
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-8' onSubmit={handleSubmit(onSubmit)}  >
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="h-[320px]">
                    <div className="flex flex-row gap-10 min-h-0">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={user} alt='navigate back' className='mr-2' />
                            <TextField
                                id="fname"
                                label="First Name"          
                                variant="standard"
                                sx={{width: '200px',mr:1}}
                                inputProps={{ style: { fontSize: 16}}}
                                InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE' } }}
                                {...register("fname")}
                                helperText={errors.fname?.message}
                                error={errors?.fname? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                value={identityDetails.fname}
                                onChange={(e)=>{setIdentityDetails({...identityDetails,fname:e.target.value})}}
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
                                inputProps={{ style: { fontSize: 16}}}
                                InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE' } }}
                                {...register("mname")}
                                helperText={errors.mname?.message}
                                error={errors?.mname? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                }}
                                value={identityDetails.mname}
                                onChange={(e)=>{setIdentityDetails({...identityDetails,mname:e.target.value})}}
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
                                sx={{width: '200px',mr:1}}
                                inputProps={{ style: { fontSize: 16}}}
                                InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE' } }}
                                {...register("lname")}
                                helperText={errors.lname?.message}
                                error={errors?.lname? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={identityDetails.lname}
                                onChange={(e)=>{setIdentityDetails({...identityDetails,lname:e.target.value})}}
                            />
                        </Box>
                    </div>
                    </div>
                    <div className="mt- 4 flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end'  }}>
                            <img src={genders} alt='navigate back' className='mr-2 '/>
                            <TextField
                                    id="gen"
                                    name="gen"
                                    select
                                    className='w-full'
                                    sx={{width: '200px'}}
                                    label="Gender"
                                    inputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE', } }}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    {...register("gen",{
                                        required: 'Gender is required',
                                        validate: value => value !== ''})}
                                    error={errors?.gen ? true : false}
                                    helperText={errors.gen?.message}
                                    variant="standard"
                                    value={identityDetails.gen}
                                    onChange={(e)=>{setIdentityDetails({...identityDetails,gen:e.target.value})}}
                                >
                                    {gender.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                        </Box>
                    </div>
                    
                    <div className='mt-3 display-flex justify-content' >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={cal} alt='navigate back' className='mr-2 ml-2 mt-2' />
                         
                            <TextField
                                    id="dob"
                                    name="dob"
                                    type='date'
                                    className='w-full'
                                    sx={{width: '170px',mr:1}}
                                    label="Date of Birth"
                                    InputLabelProps={{ shrink: true,style: { fontSize: 16, color: '#8D99AE', } }}
                                    {...register("dob")}
                                    variant="standard"

                                    
                                    value={identityDetails.dob}
                                onChange={(e)=>{setIdentityDetails({...identityDetails,dob:e.target.value})}}
                                    
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
                                inputProps={{ style: { fontSize: 16}}}
                                InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE' } }}
                                {...register("email")}
                                helperText={errors.email?.message}
                                error={errors?.email? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  
                                  value={identityDetails.email}
                                  onChange={(e)=>{setIdentityDetails({...identityDetails,email:e.target.value})}}
                            />
                        </Box>
                    </div>
                    <div className='mt-4 '>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={pan} alt='navigate back' className='mr-2 w-8 h-10' />
                            <TextField
                                id="pan"
                                label="Pan Card Number"
                                variant="standard"
                                sx={{width: '250px',mr:1}}
                                inputProps={{ style: { fontSize: 16}}}
                                InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE' } }}
                                {...register("pan")}
                                helperText={errors.pan?.message}
                                error={errors?.pan? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                }}
                                
                                value={identityDetails.pan}
                                onChange={(e)=>{setIdentityDetails({...identityDetails,pan:e.target.value})}}
                            />
                        </Box>
                    
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={adhar} alt='navigate back' className='mr-2 w-8 h-10' />
                            <TextField
                                id="adhar"
                                label="Aadhar card Number"
                                variant="standard"
                                sx={{width: '250px',mr:1}}
                                inputProps={{ style: { fontSize: 16}}}
                                InputLabelProps={{ style: { fontSize: 16, color: '#8D99AE' } }}
                                {...register("adhar")}
                                helperText={errors.adhar?.message}
                                error={errors?.adhar? true : false}
                                FormHelperTextProps=
                                  {{
                                    style:{fontSize:10}
                                  }}
                                  
                                  value={identityDetails.adhar}
                                  onChange={(e)=>{setIdentityDetails({...identityDetails,adhar:e.target.value})}}
                            />
                        </Box>
                        </div>
                    </div>
                   <div className='mt-2  fixed'>
                    
                    <button type='submit' className=' flex justify-center gap-5 flex-row text-oswald -ml-1 w-[200px] p-2 accessButton align-items-flex-end ' >
                     Next
                    <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
                    </button>
                    </div>
                    
                
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        
        
    );
}

export default Identity;