import { Red } from "./Red/Red";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src="" alt="" />
        <div className="footer-links-container">
          <a href="">Inicio</a>
          <a href="">Sobre Nosotros</a>
          <a href="">Menu</a>
          <a href="">Testimonios</a>
          <a href="">Galeria</a>
          <a href="">Contacto</a>
        </div>
        <div className="footer-redes-container">
          <Red name={"Instagram"} url={"htpps://instagram.com"} />
          <Red name={"Instagram"} url={"htpps://instagram.com"} />
          <Red name={"Instagram"} url={"htpps://instagram.com"} />
          <Red name={"Instagram"} url={"htpps://instagram.com"} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          nesciunt ut harum laborum, aliquid ab blanditiis animi impedit numquam
          corrupti, eius quo repellendus ea tempora unde id modi magni
          molestiae!
        </p>
      </div>
    </footer>
  );
};
