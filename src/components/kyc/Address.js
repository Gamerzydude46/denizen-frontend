import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate ,useOutletContext} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import building from '../../assets/icons/building.svg';
import city from '../../assets/icons/city.svg';
import state from '../../assets/icons/state.svg';
import district from '../../assets/icons/district.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import pin from '../../assets/icons/pin.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const userData = {
    user: 'Anna Marie',
    type: 'Seller',
    verified: false,
    img: dummyImg2,
}
    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Address(){

        const [addressDetails,setAddressDetails] = useState({rAdd:'',state:'',dist:'',city:'',contact:'',pincode:''});

        const [activeStep, setActiveStep,mainDetails,setMainDetails]=useOutletContext();

        const schema = yup.object({
            rAdd: yup.string().matches(/^[0-9a-zA-Z\s\-\.\,\#\+\/\(\)]+$/i, "*required").required("*required"),
            state: yup.string().matches
            (/^(Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chhattisgarh|Goa|Gujarat|Haryana|Himachal Pradesh|Jharkhand|Karnataka|Kerala|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Odisha|Punjab|Rajasthan|Sikkim|Tamil Nadu|Telangana|Tripura|Uttar Pradesh|Uttarakhand|West Bengal)+$/i
            , "*Numbers not allowed").required("*required"),
            dist: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"), 
            city: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"), 

            contact: yup.string().matches(/^(?:\+91|0)?(?:[6789]\d{9})$/i, "*Enter valid number").required("*required"),
            pincode: yup.string().matches(/^\d{6}$/i, "*Alphabets not allowed").required("*required")
        }).required();

        React.useEffect(()=>{
            setAddressDetails({...addressDetails,...mainDetails.addressDetails})
            setActiveStep(1)
        },[])

        const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
        const navigate = useNavigate();
    
        const onSubmit = (data) => {
            
            console.log('check',data);
            setActiveStep(activeStep+1)
            setMainDetails({...mainDetails,addressDetails:addressDetails})

            navigate((userData.type === "Seller"?"/kyc/Business": "/kyc/userdocument"))
            
        };
    return(
        
        <div className="flex">
         <FormControl variant="standard" >
            <form className='mt-5 ml-8' onSubmit={handleSubmit(onSubmit)}>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="h-[100px]">
                    <div className="flex flex-row gap-10">
                    <div className='mt-4'>
                        <Box className="flex flex-end" >
                            <img src={building} alt='navigate back' className='mr-2' />
                            <TextField
                                id="rAdd"
                                label="Residence Address"
                                variant="standard"
                            
                                sx={{width: '615px'}}
                                inputProps={{ style: { fontSize: 18}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("rAdd")}
                                helperText={errors.rAdd?.message}
                                error={errors?.rAdd? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={addressDetails.rAdd}
                                onChange={(e)=>{setAddressDetails({...addressDetails,rAdd:e.target.value})}}
                            
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
                                inputProps={{ style: { fontSize: 18}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("state")}
                                helperText={errors.state?.message}
                                error={errors?.state? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={addressDetails.state}
                                  onChange={(e)=>{setAddressDetails({...addressDetails,state:e.target.value})}}
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
                                inputProps={{ style: { fontSize: 18}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("dist")}
                                helperText={errors.dist?.message}
                                error={errors?.dist? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={addressDetails.dist}
                                  onChange={(e)=>{setAddressDetails({...addressDetails,dist:e.target.value})}}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={city} alt='navigate back' className='mr-2' />
                            <TextField
                                id="city"
                                label="City"
                                variant="standard"
                                sx={{width: '160px'}}
                                inputProps={{ style: { fontSize: 18}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("city")}
                                helperText={errors.city?.message}
                                error={errors?.city? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={addressDetails.city}
                                  onChange={(e)=>{setAddressDetails({...addressDetails,city:e.target.value})}}
                            />
                        </Box>
                    </div>
                    </div>
                    <div className="flex flex-row gap-6">
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' ,marginLeft :-1 }}>
                            <img src={whatsapp} alt='navigate back' className='mr-2 ' />
                            <TextField
                                id="contact"
                                label="Contact"
                                variant="standard"
                                sx={{width: '160px'}}
                                inputProps={{ style: { fontSize: 18}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("contact")}
                                helperText={errors.contact?.message}
                                error={errors?.contact? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={addressDetails.contact}
                                  onChange={(e)=>{setAddressDetails({...addressDetails,contact:e.target.value})}}
                            />
                        </Box>
                    </div>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={pin} alt='navigate back' className='mr-2' />
                            <TextField
                                id="pincode"
                                label="Pin Code"
                                variant="standard"
                                sx={{width: '160px'}}
                                inputProps={{ style: { fontSize: 18}}}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                {...register("pincode")}
                                helperText={errors.pincode?.message}
                                error={errors?.pincode? true : false}
                                FormHelperTextProps={{
                                    style:{fontSize:10}
                                  }}
                                  value={addressDetails.pincode}
                                  onChange={(e)=>{setAddressDetails({...addressDetails,pincode:e.target.value})}}
                            />
                        </Box>
                    </div>
                    
                    </div>
                    </div>
                    <div className='mt-20 pt-20 fixed'>
                    
                        <button type='submit'  className=' flex justify-center gap-5 flex-row text-oswald -ml-1 w-[200px] p-2 accessButton align-items-flex-end ' >
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

export default Address;
