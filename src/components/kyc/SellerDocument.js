import React from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import dummyImg2 from '../../assets/images/dummyImg2.png';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import nextNav from '../../assets/icons/nextNav.svg';
import { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { uploadImage, getFiles,getFileName} from '../../services/web3.storages';
import { sellerResident } from "../../services/seller";
import load from '../../assets/icons/loader-white.svg';


const CustomFontTheme = createTheme({
    typography: {

        fontFamily: ["Maven Pro"].join(",")
    }
});

function SellerDocument() {
    const [sellerDocDetails, setSellerDocDetails] = useState({ profile: '', bregdoc: '', blease: '', register: '' });

    const [activeStep, setActiveStep] = useOutletContext();
    
    const schema = yup.object({
    }).required();

    React.useEffect(() => {
        setActiveStep(3)
    }, [])
    const [loading, setLoading] = React.useState(false);

    const imageHandler = (event) => {
        // setUserDocDetails({ ...userDocDetails, profile: event.target.value })

        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            const img = document.getElementById("img");
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
        

    }

    const { handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();

    const handleUpload = async (e) => {console.log("start")
        e.preventDefault();
        setLoading(true);

        // profile picture
        const profileFilePointer = getFiles('.input');
        const profileFileName = getFileName('.input');
        const profileImageURL = await uploadImage(profileFilePointer);

        // business registration  
        const bregFilePointer = getFiles('.bregdoc');
        const bregFileName = getFileName('.bregdoc');
        const bregDocURL = await uploadImage(bregFilePointer);
        
        // business lease 
        const bleaseFilePointer = getFiles('.blease');
        const bleaseFileName = getFileName('.blease');
        const bleaseURL = await uploadImage(bleaseFilePointer);
        
        // resident doc 
        const residentFilePointer = getFiles('.resident');
        const residentFileName = getFileName('.resident');
        const residentURL = await uploadImage(residentFilePointer);


        sellerResident(profileFileName,profileImageURL,bregFileName,bregDocURL,bleaseFileName,bleaseURL,residentFileName,residentURL).then((response) => {
            console.log(response);

            setActiveStep(activeStep + 1);
            navigate("/home/kyc/declaration");
            if (response.data.flag === false) {
                window.alert("document already uploaded !")
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            window.alert("seller document successfull !")
            setLoading(false)
        })   ;
        
    };
    return (

        <>
            <div className="flex gap-10 mt-4">
                <FormControl variant="standard" >
                    <form className='mt-5 ml-8 ' onSubmit={handleUpload}>
                        <ThemeProvider theme={CustomFontTheme}>
                            <div className="flex flex-col gap-10 ">
                                <div className="flex flex-row gap-10 ">
                                    <div className='mt-2'>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <div className="w-6 min-w-fit absolute top-12 left-8 rounded-lg">
                                                <div className='img-holder w-full h-full'>
                                                    <img src={dummyImg2} alt="" id="img" className="img" style={{ width: '120px', height: '120px' }} />
                                                </div>
                                                <input type="file" id="input" accept="image/*" className="input" name="image-upload" hidden="yes"  onChange={imageHandler}/>
                                                <label for="input" className='flex justify-center  documentButton text-oswald w-[120px] mt-4  '>Browse</label>
                                            </div>
                                        </Box>
                                    </div>
                                    <div className='mt-8 display-flex justify-content gap-15 ml-20'>
                                        <div className="flex ml-12  gap-14"  >
                                            <typography className="font-bold!important">Business/Shop Registration Documents</typography>
                                            <input type="file" id="bregdoc" hidden="yes" className="bregdoc"
                                                 />
                                            <label for='bregdoc' className='flex justify-center  documentButton text-oswald w-[120px]   '>Browse</label>
                                        </div>
                                        <div className="flex ml-12 mt-3 gap-20"  >
                                            <typography className="font-mfont-bold!important">Registered Lease/Rent  Agreement</typography>
                                            <input type="file" id="blease" hidden="yes"  className="blease"
                                                 />
                                            <label for='blease' className='flex justify-center ml-3  documentButton text-oswald w-[120px]   '>Browse</label>
                                        </div>
                                        <div className="flex ml-12 mt-3 gap-20" >
                                            <typography className="font-extrabold!important mr-8" >Resident Ceritificate</typography>
                                            <input type="file" id="resident" hidden="yes" className="resident"
                                                 />
                                            <label for='resident' className=' flex justify-center ml-20 documentButton text-oswald w-[120px]  '>Browse</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[144px]">
                                <button type='submit' className=' flex justify-center gap-5 flex-row text-oswald -ml-1 w-[200px] p-2 accessButton align-items-flex-end ' >
                                        {loading ? <img src={load} alt='loading...' className='w-8 flex justify-center animate-spin' /> :
                                            <>
                                                Next
                                                <img src={nextNav} alt='navigate back' className='mr-2 w-9' />
                                            </>}
                                    </button>
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