import React from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
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

