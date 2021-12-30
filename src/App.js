import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
