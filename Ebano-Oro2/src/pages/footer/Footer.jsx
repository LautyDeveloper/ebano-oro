import { Red } from "./components/Red/Red.jsx";
import { Redes } from "../../data/redes.js";
import logoImage from "../../assets/media/logo/logo-blue.png";
import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logoImage} alt="" />
        <div className="footer-data">
          <div className="footer-links-container">
            <a href="">Inicio</a>
            <a href="">Sobre Nosotros</a>
            <a href="">Menu</a>
            <a href="">Testimonios</a>
            <a href="">Galeria</a>
            <a href="">Contacto</a>
          </div>
          <div className="footer-redes-container">
            {Redes.map((red, index) => {
              return <Red key={index} name={red.name} url={red.url} />;
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            nesciunt ut harum laborum, aliquid ab blanditiis animi impedit
            numquam corrupti, eius quo repellendus ea tempora unde id modi magni
            molestiae!
          </p>
        </div>
      </div>
    </footer>
  );
};
