import "./Input.css";
export function Input({ name, type, placeholder }) {
  return (
    <div className="reservar-form-input-container">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id="nombre"
        name="nombre"
        required
        placeholder={placeholder}
      />
    </div>
  );
}
