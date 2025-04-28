import "./reserve-button.css";

export const ReserveButton = ({ style }) => {
  return (
    <button
      className="reserve-button"
      style={style}
      onClick={() =>
        window.scrollTo({
          top: document.getElementById("reservas").offsetTop,
          behavior: "smooth",
        })
      }
    >
      Reserva Ya
    </button>
  );
};
