import React, { useEffect } from "react";

import "./Terms.css";

const pdfFile = `https://codmbarrioslatinos.com/static/media/CODM_Rulebook.pdf`;


const RulesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function openPdf() {
    window.open(pdfFile, "_blank");
  }

  return (
    <>
      <button onClick={openPdf} className="footer-link-btn">Reglamento</button>
    </>
  );
};

export default RulesPage;
