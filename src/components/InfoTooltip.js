import trazado767 from ".././assets/registration/Icon_tooltip.webp";
import "./tooltip.css";

function InfoTooltip({text}) {
  let imgHelper = trazado767
  let classDark = "tooltipImage"
  return (
    <>
      <div className="tooltip-container">
        <div className= {classDark} style={{paddingBottom: "20px"}}>
          <img loading="lazy" className= {classDark} src={imgHelper} alt="tooltip"></img>
        </div>
      <div role="tooltip" id="help-tooltip" className="tooltip">
        <pre className="toolTipText">{text} </pre>
        <div className="tooltip-tip"></div>
      </div>
    </div>
    </>
  );
}

export default InfoTooltip;
