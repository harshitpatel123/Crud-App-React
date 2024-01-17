import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx'
import Product from './components/Product.tsx';
import Form from './components/Form.tsx';


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

          <>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/form" element={<Form />} />
          </>

          {/* {isAuthenticated ? 
            <>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/form" element={<Form />} />
            </>
            :
            <>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Login />} />
            <Route path="/product" element={<Login />} />
            <Route path="/form" element={<Login />} />
            </>

          } */}
        </Routes>
      </div>
    </Router >
    </>
  );
}

export default App;