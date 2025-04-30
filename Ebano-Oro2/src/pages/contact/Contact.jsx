import "./contact.css";
import { Target } from "./components/Targets/Target";
import { SectionTitle } from "../../components/section-title/SectionTitle";
export const Contact = () => {
  return (
    <div className="contacto-container" id="contacto">
      <SectionTitle
        phrase={"Un punto en el mapa"}
        title={"un viaje al sabor"}
      />

      <div className="contacto-content">
        <div className="contacto-mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.312273300251!2d-58.36263142986707!3d-34.61081577797033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335282ffd829d%3A0x3a1e4ae6db6becd6!2sOsaka!5e0!3m2!1sen!2sar!4v1745861986064!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
