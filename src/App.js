import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx'
import Product from './components/Product.tsx';
import Form from './components/Form.tsx';


function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there is any data named 'username' in local storage
    const username = JSON.parse(localStorage.getItem('username'));
    setisAuthenticated(Boolean(username));
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('username', JSON.stringify(username));
    setisAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setisAuthenticated(false);
  };

  return (
    <>
      {/* routing setup */}

      <Router>
        <div>
          <Routes>

          {isAuthenticated ? 
            <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home onLogout={handleLogout} />} />
            <Route path="/product" element={<Product />} />
            <Route path="/form" element={<Form />} />
            </>
            :
            <>
            <Route path="*" element={<Login onLogin={handleLogin} />} />
            </>

          }
        </Routes>
      </div>
    </Router >
    </>
  );
}

export default App;