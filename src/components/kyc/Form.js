import { useState } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import {
  Box,  Stepper,  Step,  StepLabel,  Grid,  FormHelperText,
  Button,Typography
} from '@mui/material';
import  Declaration  from './Declaration';
import SellerDocument from './SellerDocument';
import Identity from './Identity';
import Business from './Business';
import Address from './Address';
import nextNav from '../../assets/icons/nextNav.svg';
import Processing from './Processing';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";





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
        width:120,
        
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    width:120,
    height: 7,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#FFFFFF',
    borderRadius: '1px',
    
    boxShadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'

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
    boxShadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    width:30,
    height:30,
  }),
  ...(completed && {
    backgroundColor: '#90C53F',
    boxShadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    width:30,
    height:30,
  }),
}));





const Form = ({steps}) => {
  const [activeStep, setActiveStep] = useState(0);
  const schema = yup.object({
    fname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
    mname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
    lname: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
    
    email: yup.string().email("*Enter a valid email").max(255).required("*required"),
    pan: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),
    adhar: yup.string().matches(/^[A-Za-z]+$/i, "*Numbers not allowed").required("*required"),

}).required();

//form validation + POST(createUser) data
const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

const onSubmit = (data) => {

    
};
  const formik = useFormik({

    initialValues: {
      fname: '',
      lname: '',
      email: '',
      pan: '',
      adhar: '',
      rAdd: '',
      state:'',
      dist:'',
      ctv:'',
      Cnum:'',
      pCode:'',
      bname:'',
      bAdd:'',
      bState:'',
      bCont:'',
      bemail:'',
      bdist:'',
      bctv:'',
      type:'',
  },
  
  
  onSubmit: () => {
    setActiveStep((prevStep) => prevStep + 1);
  },

    onChange: ()=>
    {
      setActiveStep((prevStep) => prevStep + 1);
    }
  
  });
  
  const formContent = (step) => {
        switch(step) {
          case 0:
            return <Identity formik={formik}  />;
          case 1:
            return <Address formik={formik} />;
          case 2:
            return <Business formik={formik} />;
          case 3:
            return <SellerDocument formik={formik}/>;
          case 4:
            return <Declaration formik={formik}/>;
          default:
            return <div><Processing/></div>
        }
};

  return (
    <Box
    sx={{
      width: '800px',
      height: '300px',
      padding: 0
    }}
    >
      
      <Stepper
        activeStep={activeStep}
        orientation="horizontal" alternativeLabel connector={<ColorlibConnector />}
        sx={{ width: '100%', maxWidth: '800px' ,height:'30px'}}>
        {steps.map((label, index) => (
          <Step key={index} >
           
            <StepLabel  StepIconComponent={ColorlibStepIcon}
            style={{
              
            }}
          >
            <Typography variant="body1" style={{fontSize:'20px',fontWeight:'bold' ,background: 'linear-gradient(90deg, #CF0A0A 0%, #2B2D42 140.91%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        color: '#FFFFFF'}}>
          {label}
        </Typography></StepLabel>
            
          </Step>
        ))}

      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            width: '800px',
            height: '380px',
            padding: 4
          }}
        >
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid
            item
            xs={12}
          >
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Grid>
        )}
        <Grid
          item
          xs={12} 
          
        >
          <div className='fixed block left-20 '>
            
          {activeStep === steps.length-1 ?  (
          <Button onClick={formik.handleSubmit} className='flex justify-center gap-5 flex-row accessButton text-oswald w-[200px] p-2  align-items-flex-end '>
            Submit
            <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
          </Button>
          ) : activeStep > steps.length-1 ? 
             (
              <div></div>
            ) : ( 
            <Button type='submit' onClick={formik.handleSubmit} className=' flex justify-center gap-5 flex-row text-oswald ml-10 w-[200px] p-2 accessButton align-items-flex-end ' >
              Next
              <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
            </Button>
          ) 
            }
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form;