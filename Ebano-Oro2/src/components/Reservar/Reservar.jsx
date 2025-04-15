import "./Reservar.css";
import { ReservarForm } from "./Reservar-Form/Reservar-Form";

export function Reservar() {
  return (
    <section className="reservar-container">
      <div className="reservar-content">
        <img src={null} alt="" />
        <ReservarForm />
      </div>
    </section>
  );
}
