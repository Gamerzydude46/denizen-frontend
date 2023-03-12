import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import Access from './pages/Access'
=======
import SellerKyc from './pages/kyc/SellerKyc';
import SignUp from './pages/SignUp,';

>>>>>>> 2835253d6817349d341c85986564fb5d712de08a
function App() {
  return (

<<<<<<< HEAD
      <Routes>
      <Route path='/' element={<Access />} />
        <Route path='/home' element={<Home />} />
        <Route path='/track-orders' />
        <Route path='/about-us' />
      </Routes>

    </BrowserRouter>
=======
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/track-orders' />
        <Route path='/about-us' />
        <Route exact path="/kyc" element={<SellerKyc/>} />
      </Routes> 
  </BrowserRouter>
>>>>>>> 2835253d6817349d341c85986564fb5d712de08a
  );
}



export default App;
