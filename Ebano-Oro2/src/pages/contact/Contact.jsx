import "./contact.css";
import { Target } from "./components/Targets/Target";
import { SectionTitle } from "../../components/section-title/SectionTitle";
export const Contact = () => {
  return (
    <div className="contacto-container">
      <SectionTitle
        phrase={"Un punto en el mapa"}
        title={"un viaje al sabor"}
      />

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
