import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Access from './pages/Access'
import SellerKyc from './pages/kyc/SellerKyc';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import ResetPassword from './components/login/ResetPassword';
import Otp from './components/login/Otp';
import SetPassword from './components/login/SetPassword';
import PostOrders from './pages/home/PostOrders';
import Module from './pages/Module';
import Card from './pages/Card';
// import { Card } from '@mui/material';
 

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Access />} >
          <Route path="/" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='/track-orders' />
        <Route path='/about-us' />
        <Route exact path="/kyc" element={<SellerKyc />} />
        <Route exact path="/post-orders" element={<PostOrders />} />
        <Route exact path="/card" element={<Card/>}/>
        <Route exact path="/module" element={<Module />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
