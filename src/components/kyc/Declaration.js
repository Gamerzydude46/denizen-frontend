import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import user from '../../assets/icons/user.svg';
import cal from '../../assets/icons/calendar.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate, useOutletContext } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { verified } from "../../services/user";
import load from '../../assets/icons/loader-white.svg';


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});

function Declaration(data) {
    const [activeStep,setActiveStep] = useOutletContext();
    const [loading, setLoading] = React.useState(false);

  

    React.useEffect(() => {
        setActiveStep(data.type === "seller" ? 4 : 3)
    }, [])

    const [curdate, setdate] = React.useState(new Date().toISOString().substr(0, 10));

    const handleChanges = (event) => {
        setdate(event.target.value);
    };

    const [name, setName] = useState(data.user.fname + ' ' + data.user.lname);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const navigate = useNavigate();

    const handleUpload = (e) => {
        e.preventDefault();
      
            setActiveStep(activeStep + 1)
            navigate("/home/kyc/processing")
        
    };

    return (

        <>
            <div className="flex ">
                <FormControl variant="standard" >
                    <form className='mt-5 ml-6' onSubmit={handleUpload}>
                        <ThemeProvider theme={CustomFontTheme}>
                            <div className="flex flex-row ">
                                <div className=' mt-6 '>
                                    <typography className=' font-semibold '>
                                        I hereby declare that the details furnished above are true
                                        and correct to the best of my knowledge and belief and I undertake
                                        to inform you of any changes therein, immediately. In case any of
                                        the above information is found to be false or untrue or misleading
                                        or misrepresenting, I am aware that I may be held liable for it.
                                    </typography>
                                </div>
                            </div>
                            <div className="flex flex-row gap-25 mt-8">
                                <div className='flex mt-2 '>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 0 }}>

                                        <img src={user} alt='navigate back' width="30px" className=' mr-4  ' style={{ width: "12%" }} />
                                        <input type="text" id="name" disabled value={data.user.fname +" " +data.user.lname} onChange={handleChange} />

                                    </Box>
                                </div>
                                <div className='mt-2 ml-20'>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 9 }}>
                                        <img src={cal} alt='navigate back' className='mr-4 ml-20' style={{ width: "12%" }} />
                                        <input type="date" disabled value={curdate} onChange={handleChanges} className='bg-none  border-none  '></input>
                                    </Box>
                                </div>

                            </div>
                            <section className='mt-10 font-maven font-sm'>
                                <div className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        id="userAgreement"
                                        name="conditions"
                                        className='w-5 h-5'
                                    />
                                    <label for="userAgreement" className='ml-3'>I agree to the terms and conditions as set out by the <span className='text-Primary_Red'>User agreement</span>.</label>
                                </div>
                                <div className='flex items-center mt-1'>
                                    <input
                                        type="checkbox"
                                        id="privacyPolicy"
                                        name="conditions"
                                        className='w-5 h-5 '
                                    />
                                    <label for="privacyPolicy" className='ml-3'>I state that I have read, understood and accept the <span className='text-Primary_Red'>Privacy Policy</span>.</label>
                                </div>
                            </section>

                            <div className="mt-[89px]">
                            <button type='submit' className=' flex justify-center gap-5 flex-row text-oswald -ml-1 w-[200px] p-2 accessButton align-items-flex-end ' >
                                        {loading ? <img src={load} alt='loading...' className='w-8 flex justify-center animate-spin' /> :
                                            <>
                                                Submit
                                                <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
                                            </>}
                                    </button>
                            </div>
                        </ThemeProvider>
                    </form>
                </FormControl>
            </div>
        </>
    );
}

export default Declaration;