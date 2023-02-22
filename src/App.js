import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/track-orders' />
          <Route path='/about-us' />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
