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
            <a href="" className="link">
              Inicio
            </a>
            <a href="" className="link">
              Sobre Nosotros
            </a>
            <a href="" className="link">
              Menu
            </a>
            <a href="" className="link">
              Testimonios
            </a>
            <a href="" className="link">
              Galeria
            </a>
            <a href="" className="link">
              Contacto
            </a>
          </div>
          <div className="footer-redes-container">
            {Redes.map((red, index) => {
              return <Red key={index} name={red.name} url={red.url} />;
            })}
          </div>
          <p className="parragraph">
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
