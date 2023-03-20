import React from "react";
import Box from '@mui/material/Box';
import Select  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import mail from '../../assets/icons/mail.svg';
import user from '../../assets/icons/user.svg';
import gender from '../../assets/icons/gender.svg';
import cal from '../../assets/icons/calendar.svg';
import pan from '../../assets/icons/panCard.svg';
import adhar from '../../assets/icons/adharCard.svg';
import nextNav from '../../assets/icons/nextNav.svg';
import dummyImg2 from '../../assets/images/dummyImg2.png';

import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";

    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });


    
    function imageHandler(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function() {
          const img = document.getElementById("img");
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      }


    function UserDocument(){
    
    return(
        
        <>
        <div className="flex gap-10">
         <FormControl variant="standard" >
            <form className='mt-5 ml-14'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10">
                    <div className='mt-2'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{
                        width:' 60%',minwidth: '450px',position: 'absolute',top:' 2%',
                        left: '15%',borderradius: '7px'}}>
                        <div className="img-holder" style={{width:'120px',heigth:'120px'}}>
						<img src={dummyImg2} alt="" id="img" className="img" style={{ width: '120px', height: '120px' }}/>
					    </div>

                        <input type="file" id="input" accept="image/*" name="image-upload" hidden="yes"  onChange={imageHandler} />
                        <label  for="input" className='flex justify-center  documentButton text-oswald w-[120px] mt-4  '>
                        
                            <i class="fas fa-upload"></i> &nbsp; Upload
                        </label>
                        </div>
                        </Box>
                    </div>
                    <div  className='mt-2 display-flex justify-content gap-20 ml-20'>
                       
                            <div style={{ display:'flex',marginLeft:'50px',gap:'31%'}} >
                            <label>Driver License</label>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-6 documentButton text-oswald w-[120px]   '>
                                
                            <i class="fas fa-upload"></i> &nbsp; Browse
                            </label>
                            </div>
                            <div style={{ display:'flex',marginLeft:'50px',marginTop:'12px',gap:'0%'}} >
                            <label>Vehicle Registration Document</label>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-4 documentButton text-oswald w-[120px]   '>
                                
                            <i class="fas fa-upload"></i> &nbsp; Browse
                            </label>
                            </div>
                           
                            <div style={{ display:'flex',marginLeft:'50px',marginTop:'12px',gap:'19%'}} >
                            <label>Resident Ceritificate</label>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-6 documentButton text-oswald w-[120px] h-  '>
                                
                            <i class="fas fa-upload"></i> &nbsp; Browse
                            </label>
                            </div>
                      
                    </div>
                    
                    </div> 
                    <div className="block mt-20">
                    <button type='button'
                        className='flex justify-center gap-5 flex-row accessButton text-oswald w-[200px] p-2  align-items-flex-end '>
                        Next
                        <img src={nextNav} alt='navigate back' className='mr-2 w-9' />

                    </button>
                    </div>  
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        </>
    );
}

export default UserDocument;
