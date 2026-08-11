import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/studies' element={}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
