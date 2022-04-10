import React from 'react';
import Blog from '../component/Blog';
import Hero from '../component/Hero';
import Incentives from '../component/Incentives';
import Products from '../component/Products';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Products />
      <Incentives />
      <Blog />
    </div>
  );
};

export default Home;
