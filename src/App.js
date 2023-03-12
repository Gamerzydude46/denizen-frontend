import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SellerKyc from './pages/kyc/SellerKyc';
import SignUp from './pages/SignUp,';

function App() {
  return (

   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/track-orders' />
        <Route path='/about-us' />
        <Route exact path="/kyc" element={<SellerKyc/>} />
      </Routes> 
  </BrowserRouter>
  );
}



export default App;
