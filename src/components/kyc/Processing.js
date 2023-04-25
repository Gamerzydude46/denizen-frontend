import React from "react";
import FormControl from '@mui/material/FormControl';
import transac from '../../assets/images/syncUpdate.png';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate, useOutletContext } from 'react-router-dom';

const CustomFontTheme = createTheme({
    typography: {
        fontFamily: ["Maven Pro"].join(",")
    }
});

function Processing(data) {
    const [activeStep, setActiveStep] = useOutletContext();

    const navigate = useNavigate();
    React.useEffect(() => {
        setActiveStep(data.type === "seller" ? 4 : 3)
        setTimeout(() => navigate('/home/kyc/approved'), 3000);
    }, []);
    return (

        <>
            <div className="flex">
                <FormControl variant="standard" >
                    <form className='mt-5 ml-12'>
                        <ThemeProvider theme={CustomFontTheme}>
                            <div className="flex flex-col  items-center justify-center ml-[120px]">
                                <div className="mt-20 ">
                                    <Typography sx={{ mt: 1, fontSize: 18 }} >Your Application has been submitted successfully !</Typography>
                                </div>
                                <div className="">
                                    <Typography sx={{ mt: 1, fontSize: 16 }} >We will Notify you once your KYC being Verified</Typography>
                                </div>
                                <div className=" mr-[180px] w-100%">
                                    <img src={transac} alt="loading" className="  h-[200px] w-[200px]  absolute mt-5 animate-spin " />
                                </div>
                            </div>

                        </ThemeProvider>
                    </form>
                </FormControl>
            </div>
        </>
    );
}

export default Processing;
