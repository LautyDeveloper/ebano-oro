import './Hero.css';
export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-phrase">La excelencia en cada bocado, el lujo en cada detalle.</p>
                    <h1 className="hero-title">Ebano Oro</h1>
                    <p className="hero-subtitle">"Un rincón de sofisticación y sabores únicos. Reservá tu mesa y viví la experiencia."</p>
                </div>
                <div className="hero-button-container">
                    <button className="hero-button">RESERVA YA</button>
                </div>
            </div>
        </div>
    );
}