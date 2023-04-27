import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import lock from '../../assets/icons/lock.svg'
import { NavLink } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/userSlice';
import load from '../../assets/icons/loader-white.svg';


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const Otp = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [message, setMessage] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [key, setKey] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const otp = useSelector((state) => state.user);

    React.useEffect(() => {
        setEmail(otp.email);
    }, [otp])
    
    const handleClick = (e) =>{
        if(key == otp.otp){
            setMessage(false);
            navigate('/set-password');
        }
        else{
            setMessage(true);
        }
    }
    
    const handleResend = () =>{
        
        setLoading(true);
        fetch("http://localhost:8081/user/otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        })
            .then((res) => res.json())
            .then((data) => {
                window.alert(data.message);
                dispatch(setUser({ email: email, otp: data.key, fname: null, _id: null }))
                setLoading(false);

            })
            .catch((error) => {
                console.error("Error:", error);
            }).finally(() =>  setLoading(false) );

    }

    return (
        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/reset-password' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-4 text-5xl font-oswald font-bold'>Check Your Email</h1>
            </div>
            <h1 className='font-maven font-medium text-lg mt-6 ml-3'>We have sent <span className='font-bold text-xl'>OTP</span> to your email.</h1>
            <form className='mt-4 ml-3'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={lock} alt='navigate back' className='mr-2' />
                            <TextField
                                id="otp"
                                label="Enter One Time Password"
                                variant="standard"
                                type='number'
                                sx={{ width: '355px' }}
                                inputProps={{ style: { fontSize: 18 } }}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                            />
                        </Box>
                    </div>
                    <div className='flex flex-row justify-between mt-4 ml-1'>
                        <h1 className='font-maven font-medium  '>Didn’t  receive email? </h1>
                        <button
                            type='button'
                            onClick={handleResend}
                            className='font-bold text-Primary_Red hover:text-Primary_Grey hover:-translate-y-1 hover:duration-100'>
                            Click to Resend
                        </button>
                    </div>
                    <button 
                        type='button'
                        onClick={handleClick}
                        className='w-[392px] accessButton text-oswald ml-1 flex justify-center items-center'>
                        {loading ? <img src={load} alt='loading...'  className='w-8 flex justify-center animate-spin'/> : "Procced" }
                    </button>
                    <h1 className={message ? 'accessWarn bg-Warn ' : 'hidden'}>
                        You have entered incorrect OTP!
                    </h1>
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default Otp;