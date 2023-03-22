import React from 'react'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BuySell from './components/BuySell';

export default function App() {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Home />
        <BuySell />
        <Blogs />
        <Footer />
    </div>
  )
}