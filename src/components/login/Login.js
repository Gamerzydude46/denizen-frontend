import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import mail from '../../assets/icons/mail.svg'
import key from '../../assets/icons/key.svg'
import { NavLink } from 'react-router-dom';
import load from '../../assets/icons/loader-white.svg';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    
    function cookie () {
        axios.get("http://localhost:8080/user/auth", { withCredentials: true }).then((data) => {
            //console.log(data)
            if (data.data.authData.loggedIn === true) {
                window.alert("User session exist ! Auto logging....");
                navigate('/home');
            }else{
                window.alert("User session expired ! Login again.")
            }
        })
    }
    //session handeling
    React.useEffect(() => {
        cookie();
    },)

    //user/login integration
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState({ flag: false, msg: "" });
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message === 'Authentication Successful') {
                    window.alert(data.message)
                    navigate('/home');
                }
                else {
                    setMessage({ flag: true, msg: data.message });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            }).finally(() => {
                setLoading(false)
            })
    };

    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <h1 className='ml-1 text-5xl font-oswald font-bold'>Login</h1>
            </div>
            <h1 className='font-maven font-medium text-lg mt-6 ml-1'>Welcome, let’s get started</h1>
            <form className='mt-1 ml-2' onSubmit={handleLogin}>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <img src={mail} alt='navigate back' className='mr-2' />
                            <TextField
                                id="email"
                                label="Email"
                                variant="standard"
                                sx={{ width: '325px' }}
                                inputProps={{ style: { fontSize: 18 } }}
                                InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </div>
                    <div className='flex flex-row gap-9'>
                        <div className=' flex flex-row mt-4'>
                            <img src={key} alt='navigate back' className='mr-2 mt-6' />
                            <FormControl sx={{ width: '38ch' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Password</InputLabel>
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18 } }}
                                    sx={{ width: '325px' }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff sx={{ color: '#8D99AE' }} /> : <Visibility sx={{ color: '#8D99AE' }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className='mt-4 font-maven font-medium flex flex-row justify-between w-[369px]'>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                id="userAgreement"
                                name="userAgreement"
                                className='w-5 h-5'
                            />
                            <label for="userAgreement" className='ml-3 font-bold text-oswald text-Primary_Grey'>Remember Me</label>
                        </div>
                        <div className='flex items-center mt-1'>
                            <NavLink
                                to='/reset-password'
                                className='ml-3 font-bold text-oswald text-Primary_Red  hover:text-Primary_Grey hover:-translate-y-1 hover:duration-100'>
                                Forgot Password?
                            </NavLink>
                        </div>
                    </div>
                    <button type='submit'
                        className='accessButton text-oswald w-[369px] flex justify-center items-center'>
                        {loading ? <img src={load} alt='loading...' className='w-8 flex justify-center' /> : "Login"}
                    </button>
                    <h1 className={message.flag ? 'accessWarn bg-Warn' : 'hidden'}>
                        {message.msg}
                    </h1>
                </ThemeProvider>
            </form>
        </FormControl>
    );
}

export default Login;