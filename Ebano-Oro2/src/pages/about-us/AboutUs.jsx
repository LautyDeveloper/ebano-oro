import "./about-us.css";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="title-section">¿Quienes Somos?</h2>
      <div className="about-us-container">
        <div className="about-us-image-container first-image">
        </div>

        <div className="about-us-card-container">
          <div className="about-us-card">
            <div className="about-us-card-text">
              <p className="about-us-card-phrase phrase">momentos especiales</p>
              <h2 className="about-us-card-title">
                Sofisticado <br /> & Exclusivo
              </h2>
              <p className="about-us-card-parragraph parragraph">
                En Ebano & Oro, tradición y modernidad se combinan.
              </p>
            </div>
            <button className="about-us-card-button">Reserva Ya</button>
          </div>
        </div>

        <div
          className="about-us-image-container second-image"
          style={{ gridRow: 3 / 4 }}
        >
        </div>
      </div>
    </section>
  );
};
