import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import backArrow from '../../assets/icons/backArrow.svg'
import user from '../../assets/icons/user.svg'
import mail from '../../assets/icons/mail.svg'
import key from '../../assets/icons/key.svg'
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});


const SignUp = (nav,setNav,outlet) => {
    
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const schema = yup.object({
        fname: yup.string().matches(/^[A-Za-z]+$/i,"*Numbers not allowed").required("*required"),
        lname: yup.string().matches(/^[A-Za-z]+$/i,"*Numbers not allowed").required("*required"),
        email: yup.string().email("*Enter a valid email").max(255).required("*required"),
        password: yup
            .string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "*Enter a valid password"),
        confirmpassword: yup.string().label('Confirmpassword').required("*required").oneOf([yup.ref('password'), null], 'Password must be same'),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = data => console.log(data);

    return (

        <FormControl variant="standard">
            <div className='flex flex-row items-center'>
                <NavLink to='/' className='bg-Primary_Red rounded-full w-12 h-12 flex justify-center items-center' onClick={()=> nav.setNav(true)} >
                    <img src={backArrow} alt='navigate back'/>
                </NavLink>
                <h1 className='ml-3 text-5xl font-oswald font-bold'>Create Account</h1>
            </div>
            <h1 className='font-maven font-medium text-lg mt-6 ml-3'>Hii, Welcome to Denizen Family !</h1>
            <form  onSubmit={handleSubmit(onSubmit)} className='mt-4 ml-2'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className='flex flex-row gap-9'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end',flexDirection: 'column'}} className=''>
                            <div className='flex flex-row'>
                                <div className='flex  items-end'>
                                    <img src={user} alt='user' className={errors?.fname? 'mb-6 mr-2 h-[35px]' : 'mr-2 h-[35px]'} />
                                </div>
                                <TextField
                                    id="fname"
                                    error={errors?.fname? true : false}
                                    label="Firstname"
                                    variant="standard"
                                    className='w-full'
                                    inputProps={{ style: { fontSize: 18} }}
                                    InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE', } }}
                                    {...register("fname")}
                                    helperText={errors.fname?.message}
                                />
                            </div>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end',flexDirection: 'column'}} className=''>
                            <div className='flex flex-row'>
                                <div className='flex  items-end'>
                                    <img src={user} alt='user' className={errors?.lname? 'mb-6 mr-2 h-[35px]' : 'mr-2 h-[35px]'} />
                                </div>
                                <TextField
                                    id="lname"
                                    error={errors?.lname? true : false}
                                    label="Lastname"
                                    variant="standard"
                                    className='w-full'
                                    sx={{width:'246px'}}
                                    inputProps={{ style: { fontSize: 18} }}
                                    InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE', } }}
                                    {...register("lname")}
                                    helperText={errors.lname?.message}
                                />
                            </div>
                        </Box>
                    </div>
                    <section className='mt-4'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end',flexDirection: 'column' }}>
                            <div className='flex flex-row w-full'>
                                <div className='flex  items-end'>
                                    <img src={mail} alt='mail' className={errors?.email? 'mb-6 mr-2 ml-1 h-[25px]' : 'ml-1 mr-2 h-[25px]' } />
                                </div>
                                <TextField
                                    id="email"
                                    error={errors?.email? true : false}
                                    label="Email Address"
                                    variant="standard"
                                    sx={{ width:'532px' }}
                                    InputProps={{ style: { fontSize: 18 }}}
                                    InputLabelProps={{ style: { fontSize: 18, color: '#8D99AE' } }}
                                    {...register("email")}
                                    helperText={errors.email?.message}
                                />
                            </div>
                        </Box>
                    </section>
                    <section className='flex flex-row gap-7'>
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
                            <FormControl sx={{ width: '27ch', alignItems: 'flex-start' }} variant="standard">
                                <InputLabel htmlFor="password" sx={{ fontSize: 18, color: '#8D99AE' }}>Enter your password</InputLabel>
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18 } }}
                                    {...register("password")}
                                    error={errors?.password? true : false}
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
                                        errors?.confirmpassword ? 'ml-1 mb-5 mr-2 h-[28px]' :
                                            errors?.password ? 'ml-1 mb-5 mr-2 h-[27px]' : 'ml-1 mr-2 h-[28px]'
                                    } />
                            </div>
                            <FormControl sx={{ width: '27ch', alignItems:'flex-start' }} variant="standard">
                                <InputLabel htmlFor="confirmpassword" sx={{ fontSize: 18, color: '#8D99AE' }}>Confirm your password</InputLabel>
                                <Input
                                    id="confirmpassword"
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{ style: { fontSize: 18 } }}
                                    {...register("confirmpassword")}
                                    error={errors?.confirmpassword? true : false}
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
                                <FormHelperText id="password"><p className='formError'>{errors.confirmpassword?.message}</p></FormHelperText>
                            </FormControl>
                        </div>
                    </section>
                    <section className='mt-7 font-maven font-medium'>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                id="userAgreement"
                                name="conditions"
                                className= 'w-5 h-5'
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
                    <button type='submit'
                        className='accessButton text-oswald w-[585px] '>
                        Sign Up
                    </button>
        
                </ThemeProvider>
            </form>

        </FormControl>
    );
}

export default SignUp;