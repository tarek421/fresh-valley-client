import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivetRoute/PrivetRoute';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import Order from './components/Order/Order';
import { getDecodedUser } from './components/Login/LoginManager';


export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  return (
    <userContext.Provider className='App' value={[loggedInUser, setLoggedInUser]}>
     <Toaster />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:id" element={<CheckOut />} />
        <Route path="/" element={<PrivateRoute>
          <Admin />
        </PrivateRoute>} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
