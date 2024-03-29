import React from "react";
import manonphone from '../../assets/images/manonphone.png';
import { useNavigate } from "react-router";
import { insertSeller } from "../../services/seller";
import { insertDelData } from "../../services/delData";

const Welcome = (data) =>{
    const [loading, setLoading] = React.useState(false);

    const register=(e)=>{
        setLoading(true);

        e.preventDefault();
        if(data.type==="seller"){
        insertSeller().then((response)=>{
            
            console.log(response);
            navigate("/home/kyc"); 
            setLoading(false);

        }).catch(error => {
            console.log(error);
        })
        }
        else{

            insertDelData(data.email).then((response)=>{
                console.log(response);
                navigate("/home/kyc"); 
                setLoading(false);

            }).catch(error => {
                console.log(error);
                window.alert("Dependecy Collection <DeliveryData> Error occured !")
            })
        }
    };
    const navigate=useNavigate()
    return(
        <main className="h-full flex flex-row justify-between p-10 ">
            <div className="z-30">
            <h1 className="font-maven font-semibold text-[30px] mt-14">
                    Hii, {data.user.fname + ' ' + data.user.lname}
                </h1>
                <h1 className="font-oswald font-bold text-[70px] mt-1">
                    Welcome
                </h1>
                <p className="font-maven font-bold text-xl w-1/2 mt-6">
                From restaurants serving the most incredible food to a book-store selling their best seller books, Denizen covers it all. 
                <br></br>
                Denizen is a provider of choice for its customers, whether you are a seller or a delivery agent, due to its customer centric approach 
                and aims to further strengthen this partnership.
                </p>
                <div className="flex flex-row mt-10 gap-x-10">
                    <button className="bg-Primary_Red buttonWelcome" onClick={register}>
                        {loading?"Loading..":"Register"}</button>
                    <button className="bg-Primary_Grey buttonWelcome">Know More</button>
                </div>
            </div>
            <div className="fixed  z-10 bottom-0 right-0">

                <div className="bg-White rounded-t-full h-[430px] w-[900px] ">
                    <div>
                        <img src={manonphone} alt="man on the bike" className="h-[560px] w-[350px] bottom-[150px] left-[320px] relative" />
                    </div>
                </div>
            </div>
        </main>

    );

}

export default Welcome;