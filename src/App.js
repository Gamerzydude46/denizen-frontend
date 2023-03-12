import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Access from './pages/Access'
function App() {
  return (
    <BrowserRouter>

      <Routes>
      <Route path='/' element={<Access />} />
        <Route path='/home' element={<Home />} />
        <Route path='/track-orders' />
        <Route path='/about-us' />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
