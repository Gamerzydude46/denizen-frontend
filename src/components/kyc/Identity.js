import React from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Typography } from "@mui/material";

function Identity(){
    return(
        <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <div className="flex items-center gap-5 pb-5">  
            <div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Anna</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
        </div>
            
        <div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Middlename</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div>
            <div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Marie</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div>
            <div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Gender</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div><div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >DateofBirth</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div>
            <div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Email</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div><div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Pan Card Number</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div><div>
            <FormControl variant="standard">
                
                <Input
                id="input-with-icon-adornment" 
                startAdornment={
                    <InputAdornment  position="start" >
                    <div className="flex items-center m-1 gap-5 pb-5">
                        <AccountCircle />
                        <Typography >Aadhar Card Number</Typography>
                        </div>
                    </InputAdornment>
                }
                />
            </FormControl>
            </div>
        </div>  
    
      
      
        </Box>
        </>
    );
}

export default Identity;

