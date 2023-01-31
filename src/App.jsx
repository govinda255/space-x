import React from 'react'
import  Header  from "./Components/Header/Header";
import LaunchList from './Components/Launch/LaunchList/LaunchList';
import LaunchView from './Components/LaunchView/LaunchView';
import {BrowserRouter, Routes, Route } from "react-router-dom";

 

function App() {
  return (
    
    <div>
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path='/launch/:flight_number' element={<LaunchView />}/>
            <Route path='/' element={<LaunchList />}/>
          </Routes>
      </BrowserRouter>

    </div>
   
  )
}

export default App
