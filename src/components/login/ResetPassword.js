import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import mail from '../../assets/icons/mail.svg'
import { NavLink } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.svg'
import { useNavigate } from 'react-router-dom';
import load from '../../assets/icons/loader-white.svg';
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/user/userSlice';

const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const ResetPassword = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [message, setMessage] = React.useState({ flag: false, msg: "" });
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const password = '';

    
    

    const handleSubmit =(e) =>{
        e.preventDefault();
        setLoading(true);
        setMessage({flag: false, msg: ""});
        fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email ,password}),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.flag === true){
        
                    fetch("http://localhost:8080/user/otp", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email }),
                    })
                        .then((res) => res.json())
                        .then((otp) => {
                            window.alert(otp.message);
                            dispatch(setUser({ email: email, otp:otp.key, fname: null, _id: null }))
                            setLoading(false);
                            navigate('/otp');

                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        })
                }
                else{
                    setLoading(false);
                    setMessage({flag: true, msg: data.message});
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            
    }
    return (
        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-4 text-5xl font-oswald font-bold'>Reset Password</h1>
            </div>
            <form className='mt-4 ml-3' onSubmit={handleSubmit}>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={mail} alt='navigate back' className='mr-2' />
                            <TextField
                                id="email"
                                label="Email Address"
                                variant="standard"
                                sx={{ width: '325px' }}
                                inputProps={{ style: { fontSize: 18} }}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </div>
                    <button 
                        type='submit'
                        onClick={handleSubmit}
                        className='w-[369px] accessButton text-oswald flex justify-center items-center'>
                            {loading ? <img src={load} alt='loading...' className='w-8 flex justify-center animate-spin'/> : "Send One Time Password" }
                    </button>
                </ThemeProvider>
                <h1 className={message.flag ? 'accessWarn bg-Warn ' : 'hidden'}>
                    {message.msg}
                </h1>
            </form>
        </FormControl>
    );
}

export default ResetPassword;