import React from "react";
import manonphone from '../../assets/images/manonphone.png'
const Welcome = (data) =>{
    return(
        <main className="h-full flex flex-row justify-between p-10 ">
            <div className="z-30">
            <h1 className="font-maven font-semibold text-[30px] mt-14">
                    Hii, {data.user}
                </h1>
                <h1 className="font-oswald font-bold text-[70px] mt-1">
                    Welcome
                </h1>
                <p className="font-maven font-bold text-2xl w-1/2 mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                </p>
                <div className="flex flex-row mt-10 gap-x-10">
                    <button className="bg-Primary_Red buttonWelcome">Register</button>
                    <button className="bg-Primary_Grey buttonWelcome">Know More</button>
                </div>
            </div>
            <div className="fixed  z-10 bottom-0 right-0">
                
                <div className="bg-White rounded-t-full h-[400px] w-[900px] ">
                    <div>
                       <img src={manonphone} alt="man on the bike" className="h-[550px] w-[350px] bottom-[190px] left-[320px] relative"/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Welcome;