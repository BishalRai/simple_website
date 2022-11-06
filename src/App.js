import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer';

//API address has provided to fetch the data
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function App() {
  return (
    <>
      <Navbar />
      <Header /> 
      <div className='container'>
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
      </div>
      <Footer />
    </>

 
  );
}

export default App;
