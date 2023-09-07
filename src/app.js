import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route ,Navigate  } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import Projects from './components/Projects/Projects';
import About from './components/About/About';


const App = () => {


  return (
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />         
            <Route path="/projects" exact element={<Projects/>} />         
            <Route path="/about" exact element={<About/>} />         
          </Routes>
        </Container>
    </BrowserRouter>
  )
};

export default App;