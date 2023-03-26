import { useEffect } from 'react';
import React from 'react'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BuySell from './components/BuySell';
import Designs from './components/Designs';
import scrollreveal from 'scrollreveal';

export default function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: 'bottom',
        distance: '90px',
        duration: 2000,
        reset: false
      });
      sr.reveal(
        `nav,#home,#buySell1,#buySell2,#buySell3,#blogs,footer`,
        { opacity: 0, interval: 200}
      )
    };
    registerAnimations();
  }, [])
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Designs />
        <BuySell />
        <Blogs />
        <Footer />
    </div>
  )
}