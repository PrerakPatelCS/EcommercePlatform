import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import OrderHistory from './components/orderHistory/OrderHistory';
import Dev from './components/dev/Dev';
import Form from './components/login/Form';

function App() {
  const [apparel, setApparel] = useState();

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

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/EcommercePlatform/" element={<Layout />}>
          <Route path="/EcommercePlatform/" element={<Home apparel={apparel} />} />
        </Route>
        <Route path="/EcommercePlatform/form" element={<Form />} />
        <Route path="/EcommercePlatform/cart" element={<Cart apparel={apparel} />} />
        <Route path="/EcommercePlatform/orderHistory" element={<OrderHistory apparel={apparel} />} />
        <Route path="/EcommercePlatform/dev" element={<Dev />} />

      </Routes>
    </div>
  );
}

export default App;
