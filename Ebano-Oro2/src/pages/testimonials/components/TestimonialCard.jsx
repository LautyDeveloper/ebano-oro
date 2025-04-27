import "./testimonial-card.css";
export const TestimonialCard = ({ testimonio }) => {
  if (!testimonio) return null;

  const { name, date, text, rating, scores } = testimonio;

  return (
    <div className="testimonial-card">
      <div className="testimonial-card-content">
        <div className="testimonial-card-header">
          <h3>{name}</h3>
          <div className="testimonial-card-header-data">
            <p className="testimonial-date">{date}</p>
            <p>Dato de Color</p>
            <p>Dato de Color</p>
          </div>
          <p className="testimonial-card-header-rating">⭐ {rating}/5</p>
        </div>

        <p className="testimonial-card-text">"{text}"</p>

        <div className="testimonial-scores">
          <p>
            <b>🍽️ Comida:</b> {scores.comida}/5
          </p>
          <p>
            <b>🤵 Atención:</b> {scores.atencion}/5
          </p>
          <p>
            <b>🎶 Ambiente:</b> {scores.ambiente}/5
          </p>
          <p>
            <b>🪑 Mobiliario:</b> {scores.mobiliario}/5
          </p>
        </div>
      </div>
    </div>
  );
};
