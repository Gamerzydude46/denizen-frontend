import * as React from 'react';
import Logo from '../components/login/Logo';
import { Outlet } from "react-router-dom";

function Access() {
    
    const outletContext = React.createContext();
    const outlet = React.useContext(outletContext);
    const [nav, setNav] = React.useState(true);

    return (
        <>
            <div className="flex flex-row w-screen h-screen justify-between bg-Base">
                <div className='bg-White w-1/2 flex justify-center items-center'>
                    <div className="w-full h-full flex justify-center items-center bg-Base rounded-br-[300px]">
                        <Logo nav={nav} setNav={setNav} />
                    </div>
                </div>

                <div className="bg-White w-1/2 h-screen rounded-tl-[300px] flex justify-center items-center">
                    <outletContext.Provider nav={nav} setNav={setNav} outlet={outlet}>
                        <Outlet />
                    </outletContext.Provider>
                    
                </div>
            </div>
        </>
    );
}

export default Access;