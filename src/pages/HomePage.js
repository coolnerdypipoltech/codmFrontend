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
import MainHost from "../components/HomePage/MainHost";
import Register from '../components/HomePage/Register';
import './HomePage.css';
import BuyTickets from '../components/HomePage/BuyTickets';
const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <BarriosLatinos />
      <BuyTickets />
      <LosBarrios />
      <MainHost />

      <Participate />
      <Prize />
      <Calendary />
      <Partners />
      <Location />
      <BuyTickets />
      <Register />
      <Footer />
    </div>
  );
};

export default HomePage;
