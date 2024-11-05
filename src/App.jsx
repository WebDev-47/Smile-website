import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import "./App.css";
import NavItems from './Components/NavItems';

function App() {


  return (
    <>
    <NavItems />
     <Outlet />
    </>
  )
}

export default App
