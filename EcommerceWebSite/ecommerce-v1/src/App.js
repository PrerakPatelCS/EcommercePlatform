import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import OrderHistory from './components/orderHistory/OrderHistory';
import Dev from './components/dev/Dev';
import Form from './components/login/Form';

function App() {
  const [apparel, setApparel] = useState([]);

  const getApparel = async () =>{
    try{
      const response = await api.get("api/apparel/all");
      setApparel(response.data);

    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getApparel();
  }, [])

  document.title = "Ecommerce Platform";



  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home apparel={apparel} />} />
        </Route>
        <Route path="/form" element={<Form />} />
        <Route path="/cart" element={<Cart apparel={apparel} />} />
        <Route path="/orderHistory" element={<OrderHistory apparel={apparel} />} />
        <Route path="/dev" element={<Dev apparel={apparel} getApparel={getApparel} />} />

      </Routes>
    </div>
  );
}

export default App;
