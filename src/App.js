import logo from './logo.svg';
import React, {} from 'react';
import './App.css';
import NavBar from "./navbar";
import { Routes , Route } from "react-router-dom";
import Container from './conts';
import FormContainer from './forme';
import Account, { LasAct, SendMony } from './account';
import { Dcontainer ,HomeContainer } from './account';
import AboutUs from './abought';
import SimpleForm from './admin';




function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Container/>} />
      <Route path='signUp' element={<FormContainer sign='Sign up' ame='http://192.168.1.147:5000'/>}/>
      <Route path='SignIn' element={<FormContainer sign='Sign in' ame='http://192.168.1.147:5000/login' disable={true} />}/>
      <Route path='admin1977' element={<SimpleForm />}/>
      <Route path='about' element={<AboutUs/>}></Route>
      <Route path='account' element={<Account/>}>
        <Route path='' element={<HomeContainer/>}/>
        <Route path='wallet' element={<Dcontainer/>}/>
        <Route path='Sendmoney' element={<SendMony/>}/>
        <Route path='lastact' element={<LasAct/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
