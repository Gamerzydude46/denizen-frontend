import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import key from '../../assets/icons/key.svg'
import { NavLink, Navigate } from 'react-router-dom';
import backArrow from '../../assets/icons/backArrow.svg';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import load from '../../assets/icons/loader-white.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const SetPassword = () => {
    //validationschema
    const schema = yup.object({
        password: yup
            .string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/!@#$%^&*])(?=.{8,})/, "*Enter a valid password"),
        confirmpassword: yup.string().label('Confirmpassword').required("*required").oneOf([yup.ref('password'), null], 'Password must be same'),
    }).required();

    //form validation + POST(createUser) data
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const [showPassword, setShowPassword] = React.useState(false);
    

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    
    //backend
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const otp = useSelector((state) => state.user);

    React.useEffect(() => {
        setEmail(otp.email);
    }, [otp])

    const onSubmit = (data) => {

        setPassword(data.password);
        setLoading(true);
        fetch("http://localhost:8080/user/password-reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email , password }),
        })
            .then((res) => res.json())
            .then((object) => {
                window.alert(object.message);
                setLoading(false);
                navigate('/');

            })
            .catch((error) => {
                console.error("Error:", error);
            }).finally(() => setLoading(false));
    };

    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/otp' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' >
                    <img src={backArrow} alt='navigate back' className='' />
                </NavLink>
                <h1 className='ml-4 text-5xl font-oswald font-bold'>Set New Password</h1>
            </div>
            <form className='mt-4 ml-3' onSubmit={handleSubmit(onSubmit)}>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='flex  flex-col'>
                        <div className=' flex flex-row mt-4'>
                            <div className='flex  items-end'>
                                <img
                                    src={key}
                                    alt='key'
                                    className={
                                        errors?.password ? 'ml-1 mb-5 mr-2 h-[28px]' :
                                            errors?.confirmpassword ? 'ml-1 mb-5 mr-2 h-[27px]' : 'ml-1 mr-2 h-[28px]'
                                    } />
                            </div>
                            <FormControl sx={{ width: '42ch' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Enter your New password</InputLabel>
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18} }}
                                    {...register("password")}
                                    error={errors?.password? true : false}
                                    helperText={errors.password?.message}
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
                                <FormHelperText id="password"><p className='formError'>{errors.password?.message}</p></FormHelperText>
                            </FormControl>
                        </div>
                        <div className=' flex flex-row mt-4'>
                            <div className='flex  items-end'>
                                <img
                                    src={key}
                                    alt='key'
                                    className={
                                        errors?.password ? 'ml-1 mb-5 mr-2 h-[28px]' :
                                            errors?.confirmpassword ? 'ml-1 mb-5 mr-2 h-[27px]' : 'ml-1 mr-2 h-[28px]'
                                    } />
                            </div>
                            <FormControl sx={{ width: '42ch' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Confirm your New password</InputLabel>
                                <Input
                                    id="confirmpassword"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18 } }}
                                    {...register("confirmpassword")}
                                    error={errors?.confirmpassword ? true : false}
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
                                <FormHelperText id="confirmpassword"><p className='formError'>{errors.confirmpassword?.message}</p></FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <button 
                        type='submit'
                        className='w-[401px] accessButton text-oswald ml-1 flex justify-center items-center'>
                        {loading ? <img src={load} alt='loading...'  className='w-8 flex justify-center animate-spin'/> : "Set New Password" }
                    </button>
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default SetPassword;