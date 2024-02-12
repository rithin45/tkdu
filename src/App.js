
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Adminpanel/Home';
import Sidebar from './components/Adminpanel/Sidebar';
import Topbar from './components/Adminpanel/Topbar';
import React, { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Busdetails from './components/Busdetails/Busdetails';
import Bus from './components/Busdetails/Bus';
import Routedetails from './components/Routedetails/Routedetails';
import Routee from './components/Routedetails/Routee';


  function App() {
    
  
  return (
    <div className='App'>
            
      
      <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/Home'}element={<Home />}></Route>
        <Route path={'/viewdetails'}element={<Busdetails method='get'/>}></Route>
        <Route path={'/sview'}element={<Routedetails method='get'/>}></Route>
        
       <Route path='/s'element={<Routee method='post'/>}/>
      <Route path='/c'element={<Bus method='post'/>}/>
      
      </Routes>
     </BrowserRouter>
     <Footer/>
    
    </div>
  );
}

export default App; 
