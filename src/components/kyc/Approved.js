import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import done from '../../assets/icons/newCheck.svg';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import { useNavigate,useOutletContext } from 'react-router-dom';

const userData = {
    user: 'Anna Marie',
    type: 'Seller',
    verified: false,
    img: dummyImg2,
}

    const CustomFontTheme = createTheme({
        typography: {

            fontFamily: ["Maven Pro"].join(",")
        }
    });

    function Approved(){
       const navigate=useNavigate()
       const [activeStep, setActiveStep]=useOutletContext();

       React.useEffect(()=>{
        setActiveStep(userData.type==="Seller"?4:3)
    },[])
    return(
        
                <ThemeProvider theme={CustomFontTheme}>
                   <div className="flex flex-col justify-center items-center h-auto">
                    <div className="mt-20  h-10">
                        <typography className='font-3xl'>You KYC Application has been Approved !</typography>
                    </div>
                    <div  className=" flex items-center justify-center mt-2 h-300 w-300 ">
                        <img src={done} className="w-fit h-32" ></img>
                    </div>
                    <div>
                        <button onClick={()=>navigate('/home')}
                            className='accessButton text-oswald w-[200px] '>
                            Proceed
                        </button>
                    </div>
                   </div>
        
         </ThemeProvider>
    
        
    );
}

export default Approved;
