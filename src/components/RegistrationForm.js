import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    zipCode: '',
    uid: '',
    passport: false,
    legalAge: false,
    visa: false,
    availabilityToTravel: false,
    codmEventCompletion: false
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
          visa: false,
          availabilityToTravel: false,
          codmEventCompletion: false
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
        <h1>Registro CODM</h1>

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

        {/* Checkboxes */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="passport"
              checked={formData.passport}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Tengo pasaporte
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="legalAge"
              checked={formData.legalAge}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Soy mayor de edad
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="visa"
              checked={formData.visa}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Tengo visa
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="availabilityToTravel"
              checked={formData.availabilityToTravel}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Disponibilidad para viajar
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="codmEventCompletion"
              checked={formData.codmEventCompletion}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Evento CODM completado
          </label>
        </div>

        <button type="submit" className="submit-button" disabled={isLoading}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
