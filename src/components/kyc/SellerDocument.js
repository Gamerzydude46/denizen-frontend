import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import nextNav from '../../assets/icons/nextNav.svg';
import { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from 'react-router-dom';

const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});





function SellerDocument() {
    const [sellerDocDetails, setSellerDocDetails] = useState({ profile: '', bregdoc: '', blease: '', register: '' });
    const [activeStep, setActiveStep] = useOutletContext();

    const schema = yup.object({
    }).required();

    React.useEffect(() => {
        setActiveStep(3)
    }, [])
    const imageHandler = (event) => {
        setSellerDocDetails({ ...sellerDocDetails, profile: event.target.value })
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            const img = document.getElementById("img");
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    }

    const { handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        setActiveStep(activeStep + 1)
        navigate("/kyc/declaration")
    };
    return (

        <>
            <div className="flex gap-10">
                <FormControl variant="standard" >
                    <form className='mt-5 ml-7' onSubmit={handleSubmit(onSubmit)}>
                        <ThemeProvider theme={CustomFontTheme}>
                            <div className="flex flex-col gap-10 ">
                                <div className="flex flex-row gap-10 ">
                                    <div className='mt-2'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <div className="w-6 min-w-fit absolute top-12 left-8 rounded-lg">
                                                <div className='img-holder w-full h-full'>
                                                    <img src={dummyImg2} alt="" id="img" className="img" style={{ width: '120px', height: '120px' }} />
                                                </div>
                                                <input type="file" id="input" accept="image/*" name="image-upload" hidden="yes" onChange={imageHandler} />
                                                <label for="input" className='flex justify-center  documentButton text-oswald w-[120px] mt-4  '>Upload</label>
                                            </div>
                                        </Box>
                                    </div>
                                    <div className='mt-8 display-flex justify-content gap-15 ml-20'>
                                        <div className="flex ml-12  gap-14"  >
                                            <typography className="font-bold!important">Business/Shop Registration Documents</typography>
                                            <input type="file" id="bregdoc" hidden="yes"
                                                value={sellerDocDetails.bregdoc}
                                                onChange={(e) => { setSellerDocDetails({ ...sellerDocDetails, bregdoc: e.target.value }) }} />
                                            <label for='bregdoc' className='flex justify-center  documentButton text-oswald w-[120px]   '>Browse</label>
                                        </div>
                                        <div className="flex ml-12 mt-3 gap-20"  >
                                            <typography className="font-mfont-bold!important">Registered Lease/Rent  Agreement</typography>
                                            <input type="file" id="blease" hidden="yes"
                                                value={sellerDocDetails.blease}
                                                onChange={(e) => { setSellerDocDetails({ ...sellerDocDetails, blease: e.target.value }) }} />
                                            <label for='blease' className='flex justify-center ml-3  documentButton text-oswald w-[120px]   '>Browse</label>
                                        </div>
                                        <div className="flex ml-12 mt-3 gap-20" >
                                            <typography className="font-extrabold!important mr-8" >Resident Ceritificate</typography>
                                            <input type="file" id="resident" hidden="yes"
                                                value={sellerDocDetails.resident}
                                                onChange={(e) => { setSellerDocDetails({ ...sellerDocDetails, register: e.target.value }) }} />
                                            <label for='resident' className='flex justify-center ml-20 documentButton text-oswald w-[120px]  '>Browse</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-20">
                                    <button type='submit' className=' flex justify-center gap-5 flex-row text-oswald -ml-1 w-[200px] p-2 accessButton align-items-flex-end ' >
                                        Next
                                        <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
                                    </button>
                                </div>
                            </div>

                        </ThemeProvider>
                    </form>

                </FormControl>
            </div>
        </>
    );
}

export default SellerDocument;