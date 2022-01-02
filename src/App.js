import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivetRoute/PrivetRoute';
import Admin from './components/Admin/Admin';


export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [show, setShow] = useState(false);
  return (
    <userContext.Provider className='App' value={[show, setShow, loggedInUser, setLoggedInUser]}>
     <Toaster />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<PrivateRoute>
          <Admin />
        </PrivateRoute>} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
