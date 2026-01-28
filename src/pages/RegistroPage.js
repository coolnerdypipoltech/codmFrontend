import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import './RegistroPage.css';

const RegistroPage = () => {
  return (
    <div className="registro-page">
      <div className="registro-header">
        <Link to="/" className="back-link">
          <i className="pi pi-arrow-left"></i> Volver a Inicio
        </Link>
        <h1>Registro</h1>
      </div>
      <div className="registro-container">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistroPage;
