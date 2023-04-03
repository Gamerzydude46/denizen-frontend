import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Access from './pages/Access';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import ResetPassword from './components/login/ResetPassword';
import Otp from './components/login/Otp';
import SetPassword from './components/login/SetPassword';
import Identity from './components/kyc/Identity';
import Business from './components/kyc/Business';
import Address from './components/kyc/Address';
import SellerDocument from './components/kyc/SellerDocument';
import Declaration from './components/kyc/Declaration';
import Processing from './components/kyc/Processing';
import Approved from './components/kyc/Approved';
import UserDocument from './components/kyc/UserDocument';
import Kyc from './pages/kyc/Kyc';
import dummyImg2 from './assets/images/dummyImg2.png'

const data = {
  user: 'Anna Marie',
  type: 'delivery',
  verified: false,
  img: dummyImg2,
}


function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route path='/home' element={<Home />} />
        <Route exact path="/kyc" element={<Kyc {...data} />}>
          <Route path="/kyc" element={<Identity />} />
          <Route path="/kyc/address" element={<Address {...data} />} />
          <Route path="/kyc/business" element={<Business />} />
          <Route path="/kyc/sellerdocument" element={<SellerDocument {...data} />} />
          <Route path="/kyc/userdocument" element={<UserDocument {...data} />} />
          <Route path="/kyc/declaration" element={<Declaration {...data} />} />
          <Route path="/kyc/processing" element={<Processing />} />
          <Route path="/kyc/approved" element={<Approved />} />
        </Route>
        <Route path='/' element={<Access />} >
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Route>

        <Route path='/track-orders' />
        <Route path='/about-us' />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
