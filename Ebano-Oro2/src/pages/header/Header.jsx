import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImage from "../../assets/logo-black.png"; // Replace with your logo image path
import "./header.css";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenu(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-logo-container">
        <h1>Ebano & Oro</h1>
      </div>
      <div className="header-nav-container">
        {isMobile && (
          <button className="menu-btn" onClick={() => setMenu(!menu)}>
            ☰
          </button>
        )}

        <motion.nav
          className="header-nav"
          initial={{ x: "100%" }}
          animate={{ x: menu ? "0%" : "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ display: menu || !isMobile ? "flex" : "none" }}
        >
          <ul className="header-nav-list">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservas</a>
            </li>
            <li>
              <a href="#">Testimonios</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div className="header-reserve-container">
            <button className="header-reserve-button">Reservar</button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};
