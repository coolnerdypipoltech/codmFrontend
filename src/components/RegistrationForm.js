import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import diamondOff from "../assets/registration/diamondOff.svg";
import diamondOn from "../assets/registration/diamondOn.svg";
import { Captcha } from "recaptz";
import buttonlayout from "../assets/registration/Button_Continuar.webp";
import PopUp from "./PopUp";
import icon from "../assets/registration/Icon_Importante.webp";
import InfoTooltip from "./InfoTooltip";
import { useNavigate } from "react-router";
import semaforo_of from "../assets/main/STICKER BOCA.webp";
import semaforo_on from "../assets/main/STICKERS_CODM_03.webp";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    uid: "",
    name: "",
    last_name: "",
    legalAge: false,
    question: "",
  });
  const navigate = useNavigate();
  const [forceReloadCaptcha, setForceReloadCaptcha] = useState(0);
  const [captchaError, setCaptchaError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });
  const firstRender = React.useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      setCaptchaError(false);
      setTimeout(changeText, 100);
    }
    if (isVerified && Object.keys(errors).length === 0 && !isFormCompleted) {
      setIsFormCompleted(true);
    }
  }, [isVerified]);

  useEffect(() => {
    const navbarElement = document.querySelector(".navbar-container");

    if (navbarElement) {
      if (isFormCompleted) {
        navbarElement.style.zIndex = "0";
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navbarElement.style.zIndex = "1000";
      }
    }
  }, [isFormCompleted]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "El correo es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El correo no es válido";
    }
    
    if (!formData.question) {
      newErrors.question = "La respuesta es requerida";
    }

    if (!formData.name) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.last_name) {
      newErrors.last_name = "El apellido es requerido";
    }

    if (!formData.uid) {
      newErrors.uid = "El UID es requerido";
    }
    console.log(formData.legalAge)

    if(!formData.legalAge){
      newErrors.legalAge = "Debe ser mayor de edad";
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
      successElement.textContent = "Captcha completado con éxito!";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updatedValue = type === "checkbox" ? checked : value;
      return {
        ...prev,
        [name]: updatedValue,
      };
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const actualSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    // Google Analytics: track form submission attempt
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "Registration",
        event_label: "Registro Form Submit",
        country: formData.country,
      });
    }

    setForceReloadCaptcha((prev) => prev + 1);
    setIsLoading(true);

    const dataToSend = {
      email: formData.email,
      uid: formData.uid,
      name: formData.name,
      last_name: formData.last_name,
    };

    try {
      const response = await fetch(
        "https://api.codmbarrioslatinos.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        },
      );

      if (response.status === 200) {
        // Google Analytics: track successful registration
        if (window.gtag) {
          window.gtag("event", "registration_success", {
            event_category: "Registration",
            event_label: "Registro Exitoso",
            country: formData.country,
          });
        }
        setPopup({
          show: true,
          type: "success",
        });
        // Reset form
        setFormData({
          name: "",
          last_name: "",
          uid: "",
          legalAge: false,
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
      } else if (response.status === 410) {
        setPopup({
          show: true,
          type: "error",
          message: "Este UID ya ha sido registrado anteriormente.",
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
    e.preventDefault();

    if (isVerified && !validateForm()) {
      setIsFormCompleted(false);
      return;
    }

    if (!isVerified) {
      const captchaButton = document.querySelector(
        ".my-custom-captcha button.bg-blue-600",
      );
      if (captchaButton) {
        captchaButton.click();
      }
    }

    if (!validateForm()) {
      return;
    }
    if (isVerified) {
      setIsFormCompleted(true);
    }
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
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={popup.type === "success" ? semaforo_on : semaforo_of}
                  alt="img"
                  style={{
                    height: popup.type === "success" ? "180px" : "150px",
                    rotate: popup.type === "success" ? "45deg" : "0deg",
                  }}
                ></img>
              </div>
              {popup.type === "success" ? (
                <div>
                  <p className="inter-font" style={{ fontSize: "18px" }}>
                    <strong>¡Registro listo! 🔥</strong>
                  </p>
                  <p className="inter-font">
                    Te enviamos un correo que
                    <strong> confirma tu registro oficial.</strong>
                  </p>
                  <p className="inter-font">
                    ¿No lo ves? Revisa spam o correo no deseado. <br></br>{" "}
                    Guárdalo. Lo necesitarás si avanzas a la siguiente etapa.
                  </p>
                </div>
              ) : (
                <p className="inter-font">{popup.message}</p>
              )}
              <div
                onClick={closePopup}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={buttonlayout}
                  style={{ height: "64px" }}
                  alt="Cerrar"
                />
                ´
                <p
                  className="guild-font"
                  style={{
                    fontSize: "12px",
                    color: "#EDCC00",
                    position: "absolute",
                    marginTop: "20px",
                  }}
                >
                  CERRAR
                </p>
              </div>
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
                  UID de CODM*
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
                onClick={() => navigate("/instructions")}
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

            {/* name */}
            <div className="form-group">
              <label className="inter-font" htmlFor="name">
                Nombre(s)*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                className={errors.name ? "error" : ""}
                autoComplete="off"
                spellCheck="false"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* Surname */}
            <div className="form-group">
              <label className="inter-font" htmlFor="last_name">
                Apellidos*
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder=""
                className={errors.last_name ? "error" : ""}
              />
              {errors.last_name && (
                <span className="error-message">{errors.last_name}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="inter-font" htmlFor="email">
                Correo Electrónico*
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

            {/* Surname */}
            <div className="form-group">
              <label className="inter-font" htmlFor="last_name">
                Response esta pregunta*
              </label>
              <input
                type="text"
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder=""
                className={errors.last_name ? "error" : ""}
              />
              {errors.last_name && (
                <span className="error-message">{errors.question}</span>
              )}
            </div>

            {/* Checkboxes */}
            <div className="checkbox-group">
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
                <p className="inputDiamond">
                  Confirmo que soy mayor de edad (18)
                </p>
              </label>
              {errors.legalAge && (
                <span
                  className="error-message"
                  style={{ marginBottom: "10px" }}
                >
                  {errors.legalAge}
                </span>
              )}
              {captchaError && (
                <span className="error-message">
                  Por favor completa la verificación CAPTCHA
                </span>
              )}

              {Object.keys(errors).length > 0 && (
                <span className="error-message">
                  Por favor completa los campos obligatorios marcados con * para
                  completar tu registro
                </span>
              )}
            </div>
          </form>

          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Captcha
              key={forceReloadCaptcha}
              type="mixed"
              className="my-custom-captcha"
              length={6}
              onValidate={setIsVerified}
              showSuccessAnimation
              enableAudio={false}
              autoFocus={false}
              disableSpaceToHear={true}
              i18n={{
                securityCheck: "Verificación de seguridad",
                listenToCaptcha: "Escuchar CAPTCHA",
                refreshCaptcha: "Actualizar CAPTCHA ",
                inputPlaceholder: "Ingrese el código",
                verifyButton: "Verificar",
                verificationSuccessful: "¡Éxito!",
                captchaRequired: "",
                captchaDoesNotMatch: "El CAPTCHA no coincide",
                error: " Error al cargar el CAPTCHA",
                pressSpaceToHearCode: "",
                enterToValidate: "",
                escToClear: "",
              }}
              onError={() => setCaptchaError(true)}
              onFail={() => setCaptchaError(true)}
            />
          </div>

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
              loading="lazy"
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
        >
          <div style={{ marginBottom: "15px" }}>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Por favor revisa tu información:
            </p>
            <p>
              <strong>UID:</strong> {formData.uid}
            </p>
            <p>
              <strong>Nombres:</strong> {formData.name}
            </p>
            <p>
              <strong>Apellidos:</strong> {formData.last_name}
            </p>
            <p>
              <strong>Correo:</strong> {formData.email}
            </p>

          </div>
        </PopUp>
      )}
    </>
  );
};

export default RegistrationForm;
