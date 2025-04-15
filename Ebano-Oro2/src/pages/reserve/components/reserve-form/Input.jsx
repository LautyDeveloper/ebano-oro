import "./Input.css";
export function Input({ name, type, placeholder, style }) {
  return (
    <div className="reservar-form-input-container">
      <label htmlFor={name} style={style}>
        {name}
      </label>
      <input
        type={type}
        id="nombre"
        name={name}
        required
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
}
