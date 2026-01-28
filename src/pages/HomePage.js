import React from 'react';
import Navbar from '../components/HomePage/Navbar';
import BarriosLatinos from '../components/HomePage/BarriosLatinos';
import Partners from '../components/HomePage/Partners';
import LosBarrios from '../components/HomePage/LosBarrios';
import Participate from '../components/HomePage/Participate';
import Prize from '../components/HomePage/Prize';
import Calendary from '../components/HomePage/Calendary';
import Location from '../components/HomePage/Location';
import Footer from '../components/HomePage/Footer';
import CountryBanner from '../components/HomePage/CountryBanner';
import MainHost from "../components/HomePage/MainHost";

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <BarriosLatinos />
      <Partners />
      <LosBarrios />
      <MainHost />
      <CountryBanner />
      <Participate />
      <Prize />
      <Calendary />
      <Location />
      <Footer />
    </div>
  );
};

export default HomePage;
