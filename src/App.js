import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer';
import SearchLetter from './components/SearchByLetter';
import SearchName from './components/SearchByName';

function App() {
  return (
    <>
      <Navbar />
      <Header /> 
      <div className='container'>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/SearchByName" element = {<SearchName />} />
          <Route path="/SearchByLetter" element = {<SearchLetter />} />
        </Routes>
      </div>
      <Footer />
    </>

 
  );
}

export default App;
