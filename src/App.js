
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
import Adopt from './components/Adopt';
import Reho from './components/Reho';
import Editdetails from './components/Editdetails';
import { useContext } from 'react';
import { isauthtokencontext } from './context/Contextshare';
import Adminpage from './components/Adminpage';
import { Pie } from 'recharts';


function App() {
  const {authtoken,setauthtoken}=useContext(isauthtokencontext)
  return (
    
    <div>
     <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/home' element=  {authtoken? <Home />:<Landing/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth register/>}></Route>
     <Route path='/adopt' element= {authtoken?<Adopt/>:<Landing/>}></Route>
     <Route path='/rehome'element={authtoken?<Reho/>:<Landing/>}></Route>
     <Route path='/edit' element={authtoken?<Editdetails/>:<Landing/>}></Route>
     {/* <Route path='/admin' element={<Adminpage/>}></Route> */}
     <Route path='/admin' element=  {authtoken? <Adminpage/>:<Landing/>}></Route>
     
         </Routes>
         
    </div>
  );
}

export default App;
