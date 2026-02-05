import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import './RegistroPage.css';
import Navbar from '../components/HomePage/Navbar';
const RegistroPage = () => {
  return (
    <div className="registro-page">
      <Navbar />
      <div className="registro-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistroPage;
