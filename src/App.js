import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'
import Product from './components/Product';
import Form from './components/Form';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
