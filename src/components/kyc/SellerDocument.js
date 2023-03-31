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
            <form className='mt-5 ml-7'>
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="flex flex-row gap-10 ">
                    <div className='mt-2'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div className="w-6 min-w-fit absolute top-12 left-8 rounded-lg">
                        <div className= 'img-holder w-full h-full'>
						<img src={dummyImg2} alt="" id="img" className="img" style={{ width: '120px', height: '120px' }}/>
					    </div>

                        <input type="file" id="input" accept="image/*" name="image-upload" hidden="yes"  onChange={imageHandler} />
                        <label  for="input" className='flex justify-center  documentButton text-oswald w-[120px] mt-4  '>
                        
                            <i class="fas fa-upload"></i> Upload
                        </label>
                        </div>
                        </Box>
                    </div>
                    <div  className='mt-8 display-flex justify-content gap-15 ml-20'>
                       
                            <div className="flex ml-12  gap-14"  >
                            <typography className="font-bold!important">Business/Shop Registration Documents</typography>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center  documentButton text-oswald w-[120px]   '>
                                
                            <i class="fas fa-upload"></i>  Browse
                            </label>
                            </div>
                            <div className="flex ml-12 mt-3 gap-20"  >
                            <typography className="font-mfont-bold!important">Registered Lease/Rent  Agreement</typography>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-3  documentButton text-oswald w-[120px]   '>
                                
                            <i class="fas fa-upload"></i> Browse
                            </label>
                            </div>
                           
                            <div className="flex ml-12 mt-3 gap-20" >
                            <typography  className="font-extrabold!important mr-8" >Resident Ceritificate</typography>
                         
                            <input type="file" id="id1" hidden="yes" />
                            <label for='id1' className='flex justify-center ml-20 documentButton text-oswald w-[120px]  '>
                                
                            <i class="fas fa-upload"></i>  Browse
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
