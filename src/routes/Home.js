import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/HeroImg/HeroImg';
import Work from '../components/Work/Work';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home