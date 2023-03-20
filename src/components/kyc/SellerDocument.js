import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

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


    function SellerDocument(){
    
    return(
        
        <>
        <div className="flex gap-10">
         <FormControl variant="standard" >
            <form className='mt-5 ml-14'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10 ">
                    <div className='mt-2'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{
                        width:' 60%',minwidth: '450px',position: 'absolute',top:' 40%',
                        left: '10%',borderradius: '7px'}}>
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
                    <div  className='mt-16 display-flex justify-content gap-15 ml-20'>
                       
                            <div style={{ display:'flex',marginLeft:'50px',gap:'-1%'}} >
                            <Typography sx={{fontWeight:'550' }}>Business/Shop Registration Documents</Typography>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-5 documentButton text-oswald w-[120px]   '>
                                
                            <i class="fas fa-upload"></i> &nbsp; Browse
                            </label>
                            </div>
                            <div style={{ display:'flex',marginLeft:'50px',marginTop:'12px',gap:'9.3%'}} >
                            <Typography sx={{fontWeight:'550' }}>Registered Lease/Rent  Agreement</Typography>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-4 documentButton text-oswald w-[120px]   '>
                                
                            <i class="fas fa-upload"></i> &nbsp; Browse
                            </label>
                            </div>
                           
                            <div style={{ display:'flex',marginLeft:'50px',marginTop:'12px',gap:'18.5%'}} >
                            <Typography  sx={{fontWeight:'550' }} >Resident Ceritificate</Typography>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-20 documentButton text-oswald w-[120px]  '>
                                
                            <i class="fas fa-upload"></i> &nbsp; Browse
                            </label>
                            </div>
                      
                    </div>
                    
                    </div> 
                    
                </ThemeProvider>
            </form>

        </FormControl>
        </div>
        </>
    );
}

export default SellerDocument;
