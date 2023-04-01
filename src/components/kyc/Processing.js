import React from "react";
import FormControl from '@mui/material/FormControl';
import transac from '../../assets/images/syncUpdate.png';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const CustomFontTheme = createTheme({
    typography: {
        fontFamily: ["Maven Pro"].join(",")
    }
});

function Processing() {
    const navigate = useNavigate();
    React.useEffect(() => {
        setTimeout(() => navigate('/kyc/approved'), 3000);
    }, []);
    return (

        <>
            <div className="flex">
                <FormControl variant="standard" >
                    <form className='mt-5 ml-7'>
                        <ThemeProvider theme={CustomFontTheme}>
                            <div className="flex flex-row gap-10"></div>

                            <Typography sx={{ mt: 10, fontSize: 20, ml: 8 }} >You Application has been submitted successfully !</Typography>
                            <div >
                                <Typography sx={{ mt: 1, fontSize: 16, ml: 15 }}>We will Notify you once your KYC being Verified</Typography>
                            </div>
                            <div className="ml-20 w-100%">
                                <img src={transac} alt="man on the bike" className="loading  h-[200px] w-[200px] ml-20  absolute mt-5 " />
                            </div>

                        </ThemeProvider>
                    </form>
                </FormControl>
            </div>
        </>
    );
}

export default Processing;
