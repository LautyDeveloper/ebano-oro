export const TestimonialCard = ({ testimonio }) => {
  if (!testimonio) return null;

  const { name, date, text, rating, scores } = testimonio;

  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <p className="testimonial-date">{date}</p>
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-rating">⭐ {rating}/5</p>

      <div className="testimonial-scores">
        <p>🍽️ Comida: {scores.comida}/5</p>
        <p>🤵 Atención: {scores.atencion}/5</p>
        <p>🎶 Ambiente: {scores.ambiente}/5</p>
        <p>🪑 Mobiliario: {scores.mobiliario}/5</p>
      </div>
    </div>
  );
};
