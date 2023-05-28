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
import Devlog from './components/devlog/Devlog';
import  secureLocalStorage  from  "react-secure-storage";




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

  const [devlog, setDevlog] = useState([]);
  const getDevlog = async () =>{
      try{
        const response = await api.get("api/devlog/all");
        setDevlog(response.data);
  
      }
      catch(err){
        console.log(err);
      }
    }

  useEffect(() => {
      getDevlog();
    }, [])

  const [user, setUser] = useState(null);

  useEffect(() => {
    const addSession = async () =>{
      try{
        const response = await api.get("api/user/session");
        secureLocalStorage.setItem("session", response.data.username);
      }
      catch(err){
        console.log(err);
      }
    }

    let initialUser;

    if(secureLocalStorage.getItem("session") === null){
      addSession();
    }
    if(secureLocalStorage.getItem("user") !== null){
      initialUser = secureLocalStorage.getItem("user");
    }
    else{
      initialUser = secureLocalStorage.getItem("session");
    }

    getUser(initialUser);
  }, []);


  const getUser = async (username) =>{
    try{
      const response = await api.get("api/user/" + username);
      console.log(response);
      setUser(response.data);
    }
    catch(err){
      console.log(err);
    }
  };

  

  return (
    <div className="App">
      <Header user={user} getUser={getUser}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home apparel={apparel} user={user} getUser={getUser} />} />
        </Route>
        <Route path="/form" element={<Form user={user} setUser={setUser} />} />
        <Route path="/cart" element={<Cart user={user} getUser={getUser} />} />
        <Route path="/orderHistory" element={<OrderHistory user={user} />} />
        <Route path="/dev" element={<Dev apparel={apparel} getApparel={getApparel} />} />
        <Route path="/devlog" element={<Devlog devlog={devlog} getDevlog={getDevlog} user={user}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
