import React from "react";
import Layout from "../../components/Layout";
import officepaper from '../../assets/images/officepaper.png';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Box, Stepper, Step, Typography, StepLabel, Grid } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import backArrow from '../../assets/icons/backArrow.svg';
import { useNavigate } from "react-router-dom";

const data = {
    user: 'Anna Marie',
    type: 'user',
    verified: false,
    img: dummyImg2,
}

const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});
const sellersteps = ['Identity', 'Address', 'Business', 'Documents', 'Declaration'];
const usersteps = ['Identity', 'Address', 'Documents', 'Declaration'];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 12,
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
                '#90C53F',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
                '#90C53F',
            width: 120,

        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        width: 120,
        height: 7,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#FFFFFF',
        borderRadius: '1px',

        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'

    },
}));

const ColorlibStepIcon = styled('div')(({ theme, active, completed }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    color: '#fff',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    ...(active && {
        backgroundColor: '#90C53F',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: 30,
        height: 30,
    }),
    ...(completed && {
        backgroundColor: '#90C53F',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: 30,
        height: 30,
    }),
}));


function Kyc() {

    const [mainDetails,setMainDetails] = useState({identityDetails:{},addressDetails:{},businessDetails:{},sellerDetails:{},userDetails:{}});

    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate();
    
    const handleChange = () => {
        setActiveStep((prevStep) => prevStep - 1);
        navigate(-1)
    };


    return (

        <Layout >
            <ThemeProvider theme={CustomFontTheme}>
                <main className=" w-screen flex flex-row justify-between padding-right-10 padding-top-5">
                    <div className="   relative">
                        <div className="z-40 flex justify-start items-center w-70% h-auto  absolute left-30 top-100">

                            <Box
                                sx={{
                                    width: '800px',
                                    height: '300px',
                                    padding: 0
                                }}
                            >
                                <div className="flex items-center gap-4 m-6  ">
                                    {activeStep === 0 ? (<div></div>) :
                                        activeStep > (data.type === "Seller"?sellersteps: usersteps).length - 1 ?
                                            (
                                                <div></div>
                                            ) : (
                                                <button onClick={handleChange} className=" flex justify-center items-center bg-Primary_Red rounded-full h-[35px] w-[35px] ">
                                                    <img src={backArrow} alt="back button" className=" mr-1" />
                                                </button>
                                            )}

                                    <typography className="font-maven-Pro font-weight-500 font-style-bold line-height-59px text-[40px] mt-0">
                                        KYC Application
                                    </typography>
                                </div>

                                <Stepper
                                    activeStep={activeStep}
                                    orientation="horizontal" alternativeLabel connector={<ColorlibConnector />}
                                    sx={{ width: '100%', maxWidth: '800px', height: '30px' }}>
                                    
                                    {(data.type === "Seller"?sellersteps: usersteps).map((label, index) => {
                                        return <Step key={index} >

                                            <StepLabel StepIconComponent={ColorlibStepIcon} style={{}}>
                                                <Typography variant="body1" style={{
                                                    fontSize: '20px', fontWeight: 'bold', background: 'linear-gradient(90deg, #CF0A0A 0%, #2B2D42 140.91%)',
                                                    '-webkit-background-clip': 'text',
                                                    '-webkit-text-fill-color': 'transparent',
                                                    backgroundClip: 'text',
                                                    textFillColor: 'transparent',
                                                    color: '#FFFFFF'
                                                }}>
                                                    {label ||"c"}
                                                </Typography>
                                            </StepLabel>

                                        </Step>
})}
                                </Stepper>
                                <Grid container>
                                    <Grid
                                        item
                                        xs={12} sx={{
                                            width: 800, maxHeight: 500,
                                            paddingTop: 2,
                                            paddingLeft: 4
                                        }}>
                                        <Outlet context={[activeStep, setActiveStep,mainDetails,setMainDetails]}/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <div className="fixed z-0 w-1/2 h-fit   bottom-0 right-0">
                            <div className="-z-50  bg-White rounded-t-full h-[430px] w-[900px] ">
                                <div>
                                    <img src={officepaper} alt="man on the bike" className="h-[550px] w-[550px] bottom-[140px] left-[290px] relative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </ThemeProvider>
        </Layout>


    );
}

export default Kyc;