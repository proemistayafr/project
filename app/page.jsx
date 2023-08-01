 import React from 'react';


import Homepage from "./components/Homepage";
import NewWay from './components/NewWay';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import End from './components/End';
import Footer from './components/Footer';
import Beta from './components/Beta';

const Home = () => {
  return (
    <div>
      <Beta/>
      <Homepage/>
      
        <NewWay/>
        <Gallery/>
        <Quote/>
        <End/>
        <Footer/>
    </div>
  )

};

export default Home;
