import {React , useEffect} from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from "./components/Header"
import CheckOut from "./components/CheckOut"
import Home from "./components/Home"
import Login from './components/Login';
import { useAuth } from './context/GlobalState';

import { auth } from "./firebase";
const App = () => {
  const {dispatch}= useAuth()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  

  return <div className='app' >

       <Routes>


           <Route path='/checkOut' element={<>
           <Header/>
           <CheckOut/>
            </>} />

        <Route path='/' element={<>
          <Header/>
          <Home/>

        </>} />
        <Route path='*' element={<h1>not found</h1>} />
        <Route path='/login' element={<Login/>} />
       </Routes>
    
  </div>
}

export default App;
