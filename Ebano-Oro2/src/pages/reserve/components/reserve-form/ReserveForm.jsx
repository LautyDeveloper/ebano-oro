import { Input } from "./Input";
import "./reserve-form.css";

export function ReserveForm() {
  return (
    <section className="reservar-form-section">
      <form action="">
        <Input
          name={"Nombre y Apellido"}
          type={"text"}
          placeholder={"Ingrese Su Nombre y Apellido"}
        />
        <Input
          name={"Cantidad de Personas"}
          type={"number"}
          placeholder={"Cuantos seran en la Mesa"}
        />
        <div className="reservar-form-section-fecha-hora-container">
          <Input
            name={"Fecha"}
            type={"date"}
            placeholder={"Para cuando reservan"}
          />
          <Input
            name={"Hora"}
            type={"time"}
            placeholder={"Ingrese Su La hora de su reserva"}
            style={{ marginLeft: "auto" }}
          />
        </div>
        <Input
          name={"Telefono"}
          type={"tel"}
          placeholder={"Ingrese Su Telefono"}
        />
        <Input type={"submit"} placeholder={"Ingrese Su Email"} />
      </form>
    </section>
  );
}
