import React, { useState } from 'react';
import './RegistrationForm.css';
import diamondOff from '../assets/registration/diamondOff.svg';
import diamondOn from '../assets/registration/diamondOn.svg';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    zipCode: '',
    uid: '',
    passport: false,
    legalAge: false,
    visa: true,
    availabilityToTravel: false,
    codmEventCompletion: true,
    termsAndConditions: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });

  const countries = [
    { value: 'MEX', label: 'México' },
    { value: 'ARG', label: 'Argentina' },
    { value: 'BRA', label: 'Brasil' },
    { value: 'COL', label: 'Colombia' },
    { value: 'CHL', label: 'Chile' },
    { value: 'PER', label: 'Perú' }
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.country) {
      newErrors.country = 'El país es requerido';
    }

    if (!formData.zipCode) {
      newErrors.zipCode = 'El código postal es requerido';
    }

    if (!formData.uid) {
      newErrors.uid = 'El UID es requerido';
    }

    if(!formData.termsAndConditions){
      newErrors.termsAndConditions = "Se necesita aceptar los terminos y condiciones";
    }

    if(!formData.legalAge) {
      newErrors.legalAge = "Debes ser mayor de edad para registrarte";
    }
      
    if(!formData.passport){
      newErrors.passport = "Se necesita cumplir con los requisitos para viajar en tu país";
    }

    if(!formData.availabilityToTravel){
      newErrors.availabilityToTravel = "Se necesita disponibilidad para viajar";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://138.197.232.79/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 200) {
        setPopup({
          show: true,
          type: 'success',
          message: '¡Registro exitoso! Tu información ha sido guardada correctamente.'
        });
        // Reset form
        setFormData({
          email: '',
          country: '',
          zipCode: '',
          uid: '',
          passport: false,
          legalAge: false,
          visa: true,
          availabilityToTravel: false,
          codmEventCompletion: true,
        });
      } else if (response.status === 400) {
        setPopup({
          show: true,
          type: 'error',
          message: 'Falta información requerida. Por favor verifica todos los campos.'
        });
      } else if (response.status === 409) {
        setPopup({
          show: true,
          type: 'error',
          message: 'Este email ya ha sido registrado anteriormente.'
        });
      } else if (response.status === 503) {
        setPopup({
          show: true,
          type: 'error',
          message: 'El servicio está temporalmente fuera de servicio. Intenta más tarde.'
        });
      } else {
        setPopup({
          show: true,
          type: 'error',
          message: 'Ocurrió un error inesperado. Intenta nuevamente.'
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        type: 'error',
        message: 'Error de conexión. Verifica tu conexión a internet.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setPopup({ show: false, type: '', message: '' });
  };

  return (
    <div className="registration-container">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Procesando registro...</p>
          </div>
        </div>
      )}

      {/* Result Popup */}
      {popup.show && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className={`popup-content ${popup.type}`} onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">
              {popup.type === 'success' ? '✓' : '✕'}
            </div>
            <p>{popup.message}</p>
            <button className="popup-button" onClick={closePopup}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>REGISTRO</h1>

                {/* UID */}
        <div className="form-group">
          <label htmlFor="uid">UID *</label>
          <input
            type="text"
            id="uid"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
            placeholder="Tu identificador único"
            className={errors.uid ? 'error' : ''}
          />
          {errors.uid && <span className="error-message">{errors.uid}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="country">País *</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? 'error' : ''}
          >
            <option value="">Selecciona un país</option>
            {countries.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        {/* Zip Code */}
        <div className="form-group">
          <label htmlFor="zipCode">Código Postal *</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="12345"
            className={errors.zipCode ? 'error' : ''}
          />
          {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
        </div>

        <h3>Requisitos de elegibilidad</h3>
        <p>Consulta los requisitos para tu país</p>

        {/* Checkboxes */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="passport"
              checked={formData.passport}
              onChange={handleChange}
              className='inputDiamond'
            />
            <span
              className="checkmark"
              style={{ backgroundImage: `url(${formData.passport ? diamondOn : diamondOff})` }}
            ></span>
            Requisitos para viajar cumplidos
          </label>
          {errors.passport && <span className="error-message" style={{marginBottom: "10px"}}>{errors.passport}</span>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="legalAge"
              checked={formData.legalAge}
              onChange={handleChange}
              className='inputDiamond'
              
            />
            <span
              className="checkmark"
              style={{ backgroundImage: `url(${formData.legalAge ? diamondOn : diamondOff})` }}
            ></span>
            Soy mayor de edad
          </label>
          {errors.legalAge && <span className="error-message" style={{marginBottom: "10px"}}>{errors.legalAge}</span>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="availabilityToTravel"
              checked={formData.availabilityToTravel}
              onChange={handleChange}
              className='inputDiamond'
            />
            <span
              className="checkmark"
              style={{ backgroundImage: `url(${formData.availabilityToTravel ? diamondOn : diamondOff})` }}
            ></span>
            Disponibilidad para viajar
          </label>
          {errors.availabilityToTravel && <span className="error-message" style={{marginBottom: "10px"}}>{errors.availabilityToTravel}</span>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
              className='inputDiamond'
            />
            <span
              className="checkmark"
              style={{
                marginBottom: "10px",
                backgroundImage: `url(${formData.termsAndConditions ? diamondOn : diamondOff})`
              }}
            ></span>
            He leído y acepto las Condiciones y Politícas de Privacidad
          </label>
          {errors.termsAndConditions && <span className="error-message">{errors.termsAndConditions}</span>}
        </div>

        <button type="submit" className="submit-button" disabled={isLoading}>
          Continuar
        </button>
        <p> No se solicitaan documentos en esta etapa</p>
      </form>
    </div>
  );
};

export default RegistrationForm;
