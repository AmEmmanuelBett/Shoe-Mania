import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Announcements from './../components/Announcements';
import { Slider } from './../components/Slider';

const Home = () => {
  return (
  <div className='container'>
    <Announcements />
      <NavBar /> 
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
  </div>
  );
};

export default Home;