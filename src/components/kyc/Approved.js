import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import done from '../../assets/icons/newCheck.svg';
import { useNavigate, useOutletContext } from 'react-router-dom';
import load from '../../assets/icons/loader-white.svg';
import { verified } from "../../services/user";


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});

function Approved(data) {
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = useOutletContext();

    React.useEffect(() => {
        setActiveStep(data.type === "seller" ? 4 : 3)
    }, [])
    const [loading, setLoading] = React.useState(false);

    const handleUpload = (e) => {
        e.preventDefault();
        setLoading(true);
        verified().then((response) => {
            console.log(response);
            setActiveStep(activeStep + 1)
            navigate("/home/kyc/processing")
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            // window.alert("Business Details info successful !")
            setLoading(false)
        })


    };

    return (

        <ThemeProvider theme={CustomFontTheme}>
            <div className="flex flex-col justify-center items-center h-auto">
                <div className="mt-20  h-10">
                    <typography className='font-3xl'>Your KYC Application has been Approved !</typography>
                </div>
                <div className=" flex items-center justify-center mt-2 h-300 w-300 ">
                    <img src={done} className="w-fit h-32" ></img>
                </div>
                <div>
                    <button onClick={handleUpload}
                        className='accessButton text-oswald w-[200px] '>
                        {loading ? <img src={load} alt='loading...' className='w-8 flex justify-center animate-spin' /> :
                            
                                "Proceed"}
                          
                    </button>
                </div>
            </div>

        </ThemeProvider>


    );
}

export default Approved;
