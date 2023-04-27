import logoDark from '../assets/icons/logoDark.svg';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import load from '../../src/assets/icons/loader-white.svg';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '4px solid #EF233C',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const Header = (data) => {

    const [open, setOpen] = React.useState(false);
    const [user, setUser] = React.useState(false);
    React.useEffect( () => {
        userType();
    })
    function userType() {
        if (data.type === 'delivery') {
    
            setUser(false);
        }
        else {
            setUser(true);
        }
    }
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //logout
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const handleLogout = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:8081/user/logout",{},{ withCredentials: true })
            .then((data) => {
                //console.log(data)
                if (data.data.flag === true) {
                    window.alert(data.data.message)
                    navigate('/');
                }
                else {
                    window.alert(data.data.message)
                    setLoading(false);
                    handleClose();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            }).finally(() => {
                setLoading(false)
            })
    };

    return (
        <header className='bg-gradient-to-r h-24 from-Primary_Red to-Primary_Grey' >
            <div className='flex flex-row h-[90px] justify-between items-center bg-Base mb-3 p-8'>
                <div>
                    <img src={logoDark} alt='logo' className='h-12' />
                </div>
                <div className='flex flex-row gap-x-10'>
                    <NavLink to='/home' className='headerItems'>
                        <h1>Home</h1>
                    </NavLink>
                    <NavLink style={{pointerEvents: data.verified ? '' : 'none'}}  to='/my-orders' className={!user ? 'headerItems' : 'hidden'}>
                        <h1>My Orders</h1>
                    </NavLink>
                    <NavLink to='/post-orders' className={user ? 'headerItems' : 'hidden'}>
                        <h1>Post Orders</h1>
                    </NavLink>
                    <NavLink style={{pointerEvents: data.verified ? '' : 'none'}} to='/track-orders' className={user ? 'headerItems' : 'hidden'}>
                        <h1>Track Orders</h1>
                    </NavLink>
                    <NavLink to='/about-us' className='headerItems'>
                        <h1>About us</h1>
                    </NavLink>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <img
                            src={data.img}
                            alt='logo'
                            className='h-12 w-12 rounded-full border-4 border-Primary_Red '
                        />
                    </div>
                    <button
                        type='buton'
                        onClick={handleOpen}
                        className='flex flex-col justify-center pl-3 cursor-default'>

                        <h1 className='font-oswald font-bold'>
                            {data.user }
                        </h1>
                        <p className='font-maven font-medium'>
                            {user ? <h1>Seller</h1> : <h1>Delivery</h1>}
                        </p>
                    </button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" >
                                <div className='text-bold font-oswald text-xl'>
                                    Logout
                                </div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-maven'>
                                <div className='text-bold font-oswald text-lg'>
                                    {data.user}, you want to Logout ?
                                    <button 
                                        className='ml-5 border-spacing-2 bg-Primary_Red rounded px-2 text-Base w-14 hover:bg-Primary_Grey'
                                        onClick={handleLogout}
                                    >
                                        {loading ? <img src={load} alt='loading...' className='w-8 flex justify-center' /> : "Yes"}
                                    </button>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </header>
    );
}

export default Header;