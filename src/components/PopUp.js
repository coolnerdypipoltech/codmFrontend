import React from 'react';


const PopUp = ({text, closePopUp, action}) => {
  return (
    <div className="popup-overlay" onClick={closePopUp}>
          <div
            className={`popup-content`}
            onClick={(e) => e.stopPropagation()}
          >
            <p>{text}</p>
            <button className="popup-button" onClick={closePopUp}>
              Cerrar
            </button>
            <button onClick={action} style={{padding: "10px", backgroundColor: "lightblue", cursor: "pointer"}}>Aceptar</button>
          </div>
        </div>
  );
};

export default PopUp;

        
