import { Input } from "./Input";

export function ReservarForm() {
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
        <Input
          name={"Fecha"}
          type={"date"}
          placeholder={"Para cuando reservan"}
        />
        <Input
          name={"Hora"}
          type={"time"}
          placeholder={"Ingrese Su La hora de su reserva"}
        />
        <Input
          name={"Telefono"}
          type={"tel"}
          placeholder={"Ingrese Su Telefono"}
        />
      </form>
    </section>
  );
}
