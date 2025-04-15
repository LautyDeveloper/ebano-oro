import "./Contacto.css";
import { Target } from "./Targets/Target";
export const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-content">
        <div className="contacto-mapa-container"></div>
        <div className="contacto-targets-container">
          <Target image={null} title={"Instagram"} parragraph={"@noiretoro"} />
          <Target
            image={null}
            title={"Ubicación"}
            parragraph={"+54 11 4567-8901"}
          />
          <Target
            image={null}
            title={"Email"}
            parragraph={"contacto@noiretoro.com"}
          />
        </div>
      </div>
    </div>
  );
};
