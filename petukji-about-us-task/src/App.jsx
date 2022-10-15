import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import NavMenu from './Component/NavMenu/NavMenu'
import './Component/scroll'

function App() {

  return (
    <div className="App" >
        <div className='my-3'>
          <NavMenu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div >

  )
}

export default App
