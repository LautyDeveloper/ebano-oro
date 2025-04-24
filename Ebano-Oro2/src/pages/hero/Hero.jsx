import "./hero.css";
import { ReserveButton } from "../../components/reserve-button/ReserveButton.jsx";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-phrase phrase">
          La excelencia en cada bocado, el lujo en cada detalle.
        </p>
        <div className="hero-content-princ">
          <h1 className="hero-title logo">Ebano & Oro</h1>
          <p className="hero-subtitle parragraph">
            Un rincón de sofisticación y sabores únicos. Reservá tu mesa y viví
            la experiencia.
          </p>
        </div>
        <div className="hero-button-container">
          <ReserveButton
            style={{ width: "30%", height: "100%", fontSize: "1.8rem" }}
          />
        </div>
      </div>
    </div>
  );
};
