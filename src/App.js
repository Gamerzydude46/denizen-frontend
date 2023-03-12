import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Access from './pages/Access'
import SellerKyc from './pages/kyc/SellerKyc';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Access />} >
          <Route path="/" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='/track-orders' />
        <Route path='/about-us' />
        <Route exact path="/kyc" element={<SellerKyc />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
