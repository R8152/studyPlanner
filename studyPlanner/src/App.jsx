import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Studies from './pages/Studies';
import Notifications from './pages/Notifications';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/cadastro' element={<RegisterPage/>}/>
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
