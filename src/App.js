import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home'
import Product from './components/Product';
import Form from './components/Form';
import Navbar from './components/Navbar'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  // Callback function to receive data from the child
  const HandleDataFromChild = (data) => {
    setisAuthenticated(data);
  };
  return (
    <>
    {/* routing setup */}

      <Router>
        <div>
          <Routes>
            {isAuthenticated ? 
            <>
            <Route path="/" element={<Login  onDataFromChild={HandleDataFromChild} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/form" element={<Form />} />
            </>
            :
            <>
            <Route path="/" element={<Login onDataFromChild={HandleDataFromChild} />} />
            <Route path="/home" element={<Login onDataFromChild={HandleDataFromChild} />} />
            <Route path="/product" element={<Login onDataFromChild={HandleDataFromChild} />} />
            <Route path="/form" element={<Login onDataFromChild={HandleDataFromChild} />} />
            </>

          }
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;