import "./reserve.css";
import { ReserveForm } from "./components/reserve-form/ReserveForm";

export function Reserve() {
  return (
    <section className="reservar-container">
      <div className="reservar-content">
        <img src={null} alt="" />
        <ReserveForm />
      </div>
    </section>
  );
}
