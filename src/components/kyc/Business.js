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
import { updateSellerDetails } from '../../services/seller';
import load from '../../assets/icons/loader-white.svg';
import { getGeoLocations } from "../../services/map-utils";
import { useEffect } from 'react';

const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});

function Business() {
    const [businessDetails, setBusinessDetails] = useState({ bname: '', bAdd: '',longitude:'',latitude:'', bcontact: '', bemail: '', bdist: '', bcity: '' });
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

    const [geoLocationQuery, setGeoLocationQuery] = useState(undefined);
    const [geoLocationResult, setGeoLocationResult] = useState([]);
    const [geoLocationLoading, setGeoLocationLoading] = useState(false);

    //gets location based on text
    useEffect(() => {
        try {
            if (geoLocationQuery) {
                (async () => {
                    setGeoLocationLoading(true);
                    let res = await getGeoLocations(geoLocationQuery);
                    setGeoLocationLoading(false);
                    setGeoLocationResult(res);
                })();
            }
        } catch (err) {
            console.log(err)
        }
    }, [geoLocationQuery]);



    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();
    const [msg,setMsg] = React.useState(true);
    const [loading, setLoading] = React.useState(false);


    const onSubmit = (data) => {
        setLoading(true);
        updateSellerDetails(data.bname, data.bAdd,data.longitude,data.latitude, data.bcontact, data.bemail, data.bdist,data.bcity).then((response) => {
            console.log(response);
            setMsg(true);
            setActiveStep(activeStep + 1)
            setMainDetails({ ...mainDetails, businessDetails: businessDetails })
            navigate("/home/kyc/sellerdocument")
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            window.alert("Business Details info successfull !")
            setLoading(false)
        })        
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
                                            <img src={businessAddress} alt='navigate back' className={errors?.bname ? 'mb-6 mr-2 h-[25px]' : 'mr-2 h-[25px]'} />
                                            <TextField
                                                id="bname"
                                                label="Registered  Name of Business/Shop"
                                                variant="standard"
                                                sx={{ width: '600px' }}
                                                inputProps={{ style: { fontSize: 18} }}
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
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="custom-form-wrap group relative">
                                            <img src={building} alt='navigate back' className={errors?.bAdd ? 'mb-6 mr-2 h-[20px]' : 'mr-2 h-[20px]'} />
                                            <TextField
                                                id="bAdd"
                                                placeholder='Location'
                                                label="Address of business/shop"
                                                variant="standard"
                                                sx={{ width: '600px' }}
                                                inputProps={{ style: { fontSize: 18 } }}
                                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                                {...register("bAdd")}
                                                helperText={errors.bAdd?.message}
                                                error={errors?.bAdd ? true : false}
                                                FormHelperTextProps={{
                                                    style: { fontSize: 10 }
                                                }}
                                                value={businessDetails.bAdd}
                                                onChange={(e) => setGeoLocationQuery(e.target.value)}

                                                // onChange={(e) => { setBusinessDetails({ ...businessDetails, bAdd: e.target.value }) }}
                                            />
                                             <div className="absolute z-10 h-fit w-full bg-White text-black top-[50px] rounded-xl shadow-md group-hover:block hidden p-4 space-y-2">
                                                {geoLocationLoading
                                                    ? "Loading..."
                                                    : geoLocationResult.length === 0
                                                        ? "No result"
                                                        : geoLocationResult.map((d) => {
                                                            return (
                                                                <button
                                                                    className="w-full py-2 px-1 text-black text-left hover:bg-Grad_Blue/10"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        //set selected location
                                                                        setBusinessDetails((prev) => ({
                                                                            ...prev,
                                                                            bAdd: d.place,
                                                                            latitude: d.cordinates[0],
                                                                            longitude: d.cordinates[1],

                                                                        }));
                                                                        window.alert(d.place)
                                                                        
                                                                    }}
                                                                >
                                                                    {d.place}
                                                                </button>
                                                            );
                                                        })}
                                            </div>
                                        </Box>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-10">
                                    <div className='mt-4'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <img src={whatsapp} alt='navigate back' className={errors?.bcontact ? 'mb-6 mr-2 h-[25px]' : 'mr-2 h-[25px]'} />
                                            <TextField
                                                id="bcontact"
                                                label="Contact"
                                                variant="standard"
                                                sx={{ width: '180px' }}
                                                inputProps={{ style: { fontSize: 18 } }}
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
                                            <img src={mail} alt='navigate back' className={errors?.bemail ? 'mb-6 mr-2 h-[18px]' : 'mr-2 h-[18px]'} />
                                            <TextField
                                                id="bemail"
                                                label=" e.g. johndoe@gmail.com"
                                                variant="standard"
                                                sx={{ width: '250px' }}
                                                inputProps={{ style: { fontSize: 18} }}
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
                                            <img src={district} alt='navigate back' className={errors?.bdist ? 'mb-6 mr-2 h-[25px]' : 'mr-2 h-[25px]'} />
                                            <TextField
                                                id="bdist"
                                                label="District"
                                                variant="standard"
                                                sx={{ width: '180px' }}
                                                inputProps={{ style: { fontSize: 18 } }}
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
                                            <img src={city} alt='navigate back' className={errors?.bcity ? 'mb-6 mr-2 h-[25px]' : 'mr-2 h-[25px]'} />
                                            <TextField
                                                id="bcity"
                                                label="City/Town/Village"
                                                variant="standard"
                                                sx={{ width: '180px' }}
                                                inputProps={{ style: { fontSize: 18 } }}
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
                            { loading ? <img src={load} alt='loading...' className='w-8 flex justify-center animate-spin'/> : 
                            <>
                             Next
                             <img src={nextNav} alt='navigate back' className='mr-2 w-9' /> 
                            </>}    
                            </button>
                            </div>


                        </ThemeProvider>
                        <div className={!msg ? 'animate-pulse font-medium font-maven mt-3 border-2 p-1 w-[535px] border-Green rounded-lg flex justify-center bg-Light_Green' : 'hidden'}>
                        {msg ? 'Account created Succefully !' : 'User already exist go back & Login !'}
                    </div>
                    </form>

                </FormControl>
            </div>
        </>
    );
}

export default Business;