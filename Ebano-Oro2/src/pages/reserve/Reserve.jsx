import "./reserve.css";
import { ReserveForm } from "./components/reserve-form/ReserveForm";

export function Reserve() {
  return (
    <section className="reservar-container">
      <div className="reservar-content">
        <div className="reservar-content-image"></div>
        <ReserveForm />
      </div>
    </section>
  );
}
