import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import building from '../../assets/icons/building.svg';
import city from '../../assets/icons/city.svg';
import district from '../../assets/icons/district.svg';
import mail from '../../assets/icons/mail.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from 'react-router-dom';
import whatsapp from '../../assets/icons/whatsapp.svg';
import businessAddress from '../../assets/icons/businessAddress.svg'
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from 'react';


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});

function Business() {
    const [businessDetails, setBusinessDetails] = useState({ bname: '', bAdd: '', bcontact: '', bemail: '', bdist: '', bcity: '' });
    const [activeStep, setActiveStep, mainDetails, setMainDetails] = useOutletContext();


    const schema = yup.object({
        bname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
        bAdd: yup.string().matches(/^[0-9a-zA-Z\s\-\.\,\#\+\/\(\)]+$/i, "*Numbers not allowed").required("*required"),
        bcontact: yup.string().matches(/^(?:\+91|0)?(?:[6789]\d{9})$/i, "*Numbers not allowed").required("*required"),
        bemail: yup.string().email("*Enter a valid email").max(255).required("*required"),
        bdist: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
        bcity: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
    }).required();

    React.useEffect(() => {
        setBusinessDetails({ ...businessDetails, ...mainDetails.businessDetails })
        setActiveStep(2)
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        setActiveStep(activeStep + 1);
        setMainDetails({ ...mainDetails, businessDetails: businessDetails })

        navigate("/kyc/sellerdocument");
    };

    return (

        <>
            <div className="flex">
                <FormControl variant="standard" >
                    <form className='mt-5 ml-8' onSubmit={handleSubmit(onSubmit)}>
                        <ThemeProvider theme={CustomFontTheme}>
                            <div className='h-[300px]'>
                                <div className="flex flex-row gap-10">
                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={businessAddress} alt='navigate back' className='mr-2' />
                                            <TextField
                                                id="bname"
                                                label="Registered  Name of Business/Shop"
                                                variant="standard"
                                                sx={{ width: '600px' }}
                                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bname")}
                                                helperText={errors.bname?.message}
                                                error={errors?.bname ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bname}
                                                onChange={(e) => { setBusinessDetails({ ...businessDetails, bname: e.target.value }) }}
                                            />
                                        </Box>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-10">
                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={building} alt='navigate back' className='mr-2' />
                                            <TextField
                                                id="bAdd"
                                                label="Address of business/shop"
                                                variant="standard"
                                                sx={{ width: '600px' }}
                                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bAdd")}
                                                helperText={errors.bAdd?.message}
                                                error={errors?.bAdd ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bAdd}
                                                onChange={(e) => { setBusinessDetails({ ...businessDetails, bAdd: e.target.value }) }}
                                            />
                                        </Box>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-10">
                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={whatsapp} alt='navigate back' className='mr-2' />
                                            <TextField
                                                id="bcontact"
                                                label="Contact"
                                                variant="standard"
                                                sx={{ width: '180px' }}
                                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bcontact")}
                                                helperText={errors.bcontact?.message}
                                                error={errors?.bcontact ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bcontact}
                                                onChange={(e) => { setBusinessDetails({ ...businessDetails, bcontact: e.target.value }) }}
                                            />
                                        </Box>
                                    </div>
                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={mail} alt='navigate back' className='mr-2' />
                                            <TextField
                                                id="bemail"
                                                label=" e.g. johndoe@gmail.com"
                                                variant="standard"
                                                sx={{ width: '250px' }}
                                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bemail")}
                                                helperText={errors.bemail?.message}
                                                error={errors?.bemail ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bemail}
                                                onChange={(e) => { setBusinessDetails({ ...businessDetails, bemail: e.target.value }) }}
                                            />

                                        </Box>
                                    </div>

                                </div>
                                <div className="flex flex-row gap-10">

                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={district} alt='navigate back' className='mr-2' />
                                            <TextField
                                                id="bdist"
                                                label="District"
                                                variant="standard"
                                                sx={{ width: '180px' }}
                                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bdist")}
                                                helperText={errors.bdist?.message}
                                                error={errors?.bdist ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bdist}
                                                onChange={(e) => { setBusinessDetails({ ...businessDetails, bdist: e.target.value }) }}
                                            />
                                        </Box>
                                    </div>
                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={city} alt='navigate back' className='mr-2' />
                                            <TextField
                                                id="bcity"
                                                label="City/Town/Village"
                                                variant="standard"
                                                sx={{ width: '180px' }}
                                                inputProps={{ style: { fontSize: 18, fontWeight: 'bold' } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bcity")}
                                                helperText={errors.bcity?.message}
                                                error={errors?.bcity ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bcity}
                                                onChange={(e) => { setBusinessDetails({ ...businessDetails, bcity: e.target.value }) }}
                                            />
                                        </Box>
                                    </div>
                                </div>

                            </div>
                            <div className='mt-10  fixed'>

                                <button type='submit' className=' flex justify-center gap-5 flex-row text-oswald -ml-1 w-[200px] p-2 accessButton align-items-flex-end ' >
                                    Next
                                    <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
                                </button>
                            </div>


                        </ThemeProvider>
                    </form>

                </FormControl>
            </div>
        </>
    );
}

export default Business;