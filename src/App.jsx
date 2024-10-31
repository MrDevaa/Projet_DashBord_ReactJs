import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav';
import DashboardContainer from '../src/components/Dashbord/DashboardContainer';
import "./styles/reset.css";
import './styles/global.css';


function App() {
  return (
    <div>
 <BrowserRouter>
    <Nav />
  
  <Routes>
    <Route path="/" element={<DashboardContainer />}/>
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App



