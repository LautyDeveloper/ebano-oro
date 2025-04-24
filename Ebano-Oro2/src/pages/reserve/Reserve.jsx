import "./reserve.css";
import { ReserveForm } from "./components/reserve-form/ReserveForm";
import { SectionTitle } from "../../components/section-title/SectionTitle";

export function Reserve() {
  return (
    <section className="reservar-container">
      <SectionTitle phrase={"Reserva tu mesa en"} title={"Ebano & Oro"} />
      <div className="reservar-content">
        <div className="reservar-content-image"></div>
        <ReserveForm />
      </div>
    </section>
  );
}
