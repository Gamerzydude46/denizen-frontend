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
import Welcome from './pages/kyc/Welcome';
import SellerFeed from './pages/home/SellerFeed';
import dummyImg2 from './assets/images/dummyImg2.png'

const data = {
  user: 'Anna Marie',
  type: 'seller',
  verified: false,
  img: dummyImg2,
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route exact path='/home' element={<Home {...data}/>} >
          <Route path='/home' element={<Welcome {...data}/>}/>
          <Route exact path="/home/kyc" element={<Kyc {...data} />}>
            <Route path="/home/kyc" element={<Identity />} />
            <Route path="/home/kyc/address" element={<Address {...data} />} />
            <Route path="/home/kyc/business" element={<Business />} />
            <Route path="/home/kyc/sellerdocument" element={<SellerDocument {...data} />} />
            <Route path="/home/kyc/userdocument" element={<UserDocument {...data} />} />
            <Route path="/home/kyc/declaration" element={<Declaration {...data} />} />
            <Route path="/home/kyc/processing" element={<Processing />} />
            <Route path="/home/kyc/approved" element={<Approved />} />
          </Route>
        </Route>
        <Route path='/' element={<Access />} >
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Route>
        <Route exact path="/seller-feed" element={<SellerFeed/>} />       

        <Route path='/track-orders' />
        <Route path='/about-us' />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
