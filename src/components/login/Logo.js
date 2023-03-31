import logoDark from '../../assets/icons/logoDark.svg';
import { NavLink } from 'react-router-dom';
import * as React from 'react';


const Logo = (nav,setNav,loc) => {
    
    return (
        <section className="flex flex-col w-[450px]">
            <div className='border-b-4 pb-4 px-3'>
                <img src={logoDark} alt='logo' className='h-[197px] w-[387px]' />
            </div>
            {nav.nav ? 
                <div className='font-maven font-medium leading-[18px] p-2 text-center text-xl'>
                    Don't have an account yet? 
                    <NavLink 
                        to='sign-up' 
                        className='text-Primary_Red font-bold ml-2 mr-2'>
                        <button 
                            className='hover:translate-x-2 hover:animate-pulse'
                            onClick={() => nav.setNav(false)}>
                            Sign Up
                        </button>
                    </NavLink>
                    and start your journey with Us.
                </div> :
                <div className='font-maven font-medium leading-[18px] p-2 text-center text-xl'>
                    Check if you already have a Account with us, Just incase you had forgotten. Login
                </div>}    
        </section>);
}

export default Logo;