import './About-Us.css'

export const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-container">
                <div className="about-us-image-container" style={{gridRow: 1 / 2}}>
                    <img src="" alt="" className="about-us-image" />
                </div>

                <div className="about-us-card-container">
                    <div className="about-us-card">
                        <div className="about-us-card-text">
                            <p className="about-us-card-phrase">momentos especiales</p>
                            <h2 className="about-us-card-title">Sofisticado & Exclusivo</h2>
                            <p className="about-us-card-parragraph">En Noir & Or, tradición y modernidad se fusionan en cada plato.</p>
                        </div>
                        <button className="about-us-card-button">Reserva Ya</button>
                    </div>
                </div>

                <div className="about-us-image-container" style={{gridRow: 3/4  }}>
                    <img src="" alt="" className="about-us-image" />
                </div>
            </div>
        </section>
    )
}