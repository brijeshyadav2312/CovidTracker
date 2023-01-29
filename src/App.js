import * as React from 'react';
import Navbar from './pages/Navbar';
import News from './pages/News';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './pages/Footer';
import {Routes, Route} from'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/News' element = {<News/>}/>
        <Route path='/About' element = {<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
