import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Studies from './pages/Studies';
import Notifications from './pages/Notifications';

function App() {
  return (
    <>
    <SideBar/>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/studies' element={<Studies/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
