import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import diamondOff from "../assets/registration/diamondOff.svg";
import diamondOn from "../assets/registration/diamondOn.svg";
import { Captcha } from "recaptz";
import buttonlayout from "../assets/registration/Button_Continuar.png";
import PopUp from "./PopUp";
import icon from "../assets/registration/Icon_Importante.png";
import InfoTooltip from "./InfoTooltip";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    zipCode: "",
    uid: "",
    passport: false,
    legalAge: false,
    visa: true,
    availabilityToTravel: false,
    codmEventCompletion: true,
    termsAndConditions: false,
  });
  const [forceReloadCaptcha, setForceReloadCaptcha] = useState(0);
  const [captchaError, setCaptchaError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const firstRender = React.useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      setCaptchaError(false);
      setTimeout(changeText, 100);
    }
  }, [isVerified]);

  const countries = [
    { value: "MEX", label: "México" },
    { value: "ARG", label: "Argentina" },
    { value: "BRA", label: "Brasil" },
    { value: "COL", label: "Colombia" },
    { value: "CHL", label: "Chile" },
    { value: "PER", label: "Perú" },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.country) {
      newErrors.country = "El país es requerido";
    }

    if (!formData.zipCode) {
      newErrors.zipCode = "El código postal es requerido";
    }

    if (!formData.uid) {
      newErrors.uid = "El UID es requerido";
    }

    if (!formData.termsAndConditions) {
      newErrors.termsAndConditions =
        "Se necesita aceptar los terminos y condiciones";
    }

    if (!formData.legalAge) {
      newErrors.legalAge = "Debes ser mayor de edad para registrarte";
    }

    if (!formData.passport) {
      newErrors.passport =
        "Se necesita cumplir con los requisitos para viajar en tu país";
    }

    if (!formData.availabilityToTravel) {
      newErrors.availabilityToTravel = "Se necesita disponibilidad para viajar";
    }
    if (!isVerified) {
      setCaptchaError(true);
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeText = () => {
    const successElement = document.querySelector(
      "h3.text-lg.font-semibold.mb-1.text-green-700",
    );
    if (
      successElement &&
      successElement.textContent === "Verification Successful!"
    ) {
      successElement.textContent = "Verificación Exitosa";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const actualSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    setForceReloadCaptcha((prev) => prev + 1);
    setIsLoading(true);
    try {
      const response = await fetch("http://138.197.232.79/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setPopup({
          show: true,
          type: "success",
          message:
            "¡Registro exitoso! Tu información ha sido guardada correctamente.",
        });
        // Reset form
        setFormData({
          email: "",
          country: "",
          zipCode: "",
          uid: "",
          passport: false,
          legalAge: false,
          visa: true,
          availabilityToTravel: false,
          codmEventCompletion: true,
        });
      } else if (response.status === 400) {
        setPopup({
          show: true,
          type: "error",
          message:
            "Falta información requerida. Por favor verifica todos los campos.",
        });
      } else if (response.status === 409) {
        setPopup({
          show: true,
          type: "error",
          message: "Este email ya ha sido registrado anteriormente.",
        });
      } else if (response.status === 503) {
        setPopup({
          show: true,
          type: "error",
          message:
            "El servicio está temporalmente fuera de servicio. Intenta más tarde.",
        });
      } else {
        setPopup({
          show: true,
          type: "error",
          message: "Ocurrió un error inesperado. Intenta nuevamente.",
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message:
          error.message || "Ocurrió un error de red. Intenta nuevamente.",
      });
    } finally {
      setIsFormCompleted(false);
      setIsLoading(false);
      setCaptchaError(false);
    }
  };

  const handleSubmit = async (e) => {
    if (isVerified) {
      setIsFormCompleted(true);
      return;
    }
    e.preventDefault();

    const captchaButton = document.querySelector(
      ".my-custom-captcha button.bg-blue-600",
    );
    if (captchaButton) {
      captchaButton.click();
    }

    if (!validateForm()) {
      return;
    }
    setIsFormCompleted(true);
  };

  const closePopup = () => {
    setPopup({ show: false, type: "", message: "" });
  };

  return (
    <>
      <div className="registration-container">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p className="inter-font">Procesando registro...</p>
            </div>
          </div>
        )}

        {/* Result Popup */}
        {popup.show && (
          <div className="popup-overlay" onClick={closePopup}>
            <div
              className={`popup-content ${popup.type}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-icon">
                {popup.type === "success" ? "✓" : "✕"}
              </div>
              <p className="inter-font">{popup.message}</p>
              <button className="popup-button" onClick={closePopup}>
                Cerrar
              </button>
            </div>
          </div>
        )}

        <div className="registration-form" onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <p
              className="guild-font"
              style={{
                fontSize: "20px",
                textAlign: "center",
                paddingBottom: "30px",
              }}
            >
              REGISTRO
            </p>

            {/* UID */}
            <div className="form-group">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label className="inter-font" htmlFor="uid">
                  UID de CODM
                </label>
                <InfoTooltip
                  text={
                    "El UID es un número único que\nidentifica tu cuenta de Call of Duty Mobile."
                  }
                />
              </div>

              <input
                type="text"
                id="uid"
                name="uid"
                value={formData.uid}
                onChange={handleChange}
                placeholder=""
                className={errors.uid ? "error" : ""}
              />
              <p
                className="inter-font"
                style={{
                  color: "grey",
                  textDecoration: "underline",
                  fontSize: "14px",
                  paddingTop: "10px",
                }}
              >
                ¿Dónde está el UID?
              </p>
              {errors.uid && (
                <span className="error-message">{errors.uid}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="inter-font" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Country */}
            <div className="form-group">
              <label className="inter-font" htmlFor="country">
                País
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? "error" : ""}
              >
                <option className="inter-font" style={{ color: "grey" }}>
                  Selecciona país
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              {errors.country && (
                <span className="error-message">{errors.country}</span>
              )}
            </div>

            {/* Zip Code */}
            <div className="form-group">
              <label className="inter-font" htmlFor="zipCode">
                Código Postal
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="12345"
                className={errors.zipCode ? "error" : ""}
              />
              {errors.zipCode && (
                <span className="error-message">{errors.zipCode}</span>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                className="inter-font"
                style={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Requisitos de elegibilidad
              </p>
              <InfoTooltip
                text={
                  "El UID es un número único que\nidentifica tu cuenta de\nCall of Duty Mobile."
                }
              />
            </div>

            <p
              className="inter-font"
              style={{
                color: "grey",
                textDecoration: "underline",
                paddingTop: "10px",
                fontSize: "14px",
              }}
            >
              Consulta los requisitos para tu país
            </p>

            {/* Checkboxes */}
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="passport"
                  checked={formData.passport}
                  onChange={handleChange}
                  className="inputDiamond"
                />
                <span
                  className="checkmark"
                  style={{
                    backgroundImage: `url(${formData.passport ? diamondOn : diamondOff})`,
                  }}
                ></span>
                <p className="inputDiamond">Requisitos para viajar cumplidos</p>
              </label>
              {errors.passport && (
                <span
                  className="error-message"
                  style={{ marginBottom: "10px" }}
                >
                  {errors.passport}
                </span>
              )}

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="legalAge"
                  checked={formData.legalAge}
                  onChange={handleChange}
                  className="inputDiamond"
                />
                <span
                  className="checkmark"
                  style={{
                    backgroundImage: `url(${formData.legalAge ? diamondOn : diamondOff})`,
                  }}
                ></span>
                <p className="inputDiamond">Soy mayor de edad</p>
              </label>
              {errors.legalAge && (
                <span
                  className="error-message"
                  style={{ marginBottom: "10px" }}
                >
                  {errors.legalAge}
                </span>
              )}

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="availabilityToTravel"
                  checked={formData.availabilityToTravel}
                  onChange={handleChange}
                  className="inputDiamond"
                />
                <span
                  className="checkmark"
                  style={{
                    backgroundImage: `url(${formData.availabilityToTravel ? diamondOn : diamondOff})`,
                  }}
                ></span>
                <p className="inputDiamond">Disponibilidad para viajar</p>
              </label>
              {errors.availabilityToTravel && (
                <span
                  className="error-message"
                  style={{ marginBottom: "10px" }}
                >
                  {errors.availabilityToTravel}
                </span>
              )}

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  checked={formData.termsAndConditions}
                  onChange={handleChange}
                  className="inputDiamond"
                />
                <span
                  className="checkmark"
                  style={{
                    marginBottom: "10px",
                    backgroundImage: `url(${formData.termsAndConditions ? diamondOn : diamondOff})`,
                  }}
                ></span>
                <p className="inputDiamond">
                  He leído y acepto las Condiciones y Politícas de Privacidad
                </p>
              </label>
              {errors.termsAndConditions && (
                <span className="error-message">
                  {errors.termsAndConditions}
                </span>
              )}
            </div>
          </form>

          <Captcha
            key={forceReloadCaptcha}
            type="mixed"
            className="my-custom-captcha"
            length={6}
            onValidate={setIsVerified}
            showSuccessAnimation
            enableAudio={false}
            i18n={{
              securityCheck: "Verificación de seguridad",
              listenToCaptcha: "Escuchar CAPTCHA",
              refreshCaptcha: "Actualizar CAPTCHA ",
              inputPlaceholder: "Ingrese el código",
              verifyButton: "Verificar",
              verificationSuccessful: "¡Éxito!",
              captchaRequired: "Por favor ingrese el CAPTCHA",
              captchaDoesNotMatch: "El CAPTCHA no coincide",
              error: " Error al cargar el CAPTCHA",
              pressSpaceToHearCode: "",
              enterToValidate: "",
              escToClear: "",
            }}
            onError={() => setCaptchaError(true)}
            onFail={() => setCaptchaError(true)}
          />

          {captchaError && (
            <span className="error-message">
              Por favor complete la verificación CAPTCHA
            </span>
          )}

          <button
            disabled={isLoading}
            onClick={handleSubmit}
            style={{
              height: "64px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "20px",
            }}
          >
            <img
              src={buttonlayout}
              style={{ height: "64px" }}
              alt="Continuar"
            />

            <p
              className="guild-font"
              style={{
                fontSize: "12px",
                color: "#EDCC00",
                position: "relative",
                bottom: "45px",
              }}
            >
              CONTINUAR
            </p>
          </button>

          <div style={{ minHeight: "30px" }}></div>

          {Object.keys(errors).length > 0 && (
            <span className="error-message">Porfavor revisa sus datos</span>
          )}
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img
              src={icon}
              alt="Importante"
              style={{ height: "12px", marginTop: "5px" }}
            />
            <p className="inter-font">
              No se solicitan documentos en esta etapa
            </p>
          </div>
        </div>
      </div>
      {isFormCompleted && (
        <PopUp
          action={() => {
            actualSubmit();
          }}
          closePopUp={() => {
            setIsFormCompleted(false);
          }}
          text={"Porfavor revisa tu información antes de continuar"}
        ></PopUp>
      )}
    </>
  );
};

export default RegistrationForm;
