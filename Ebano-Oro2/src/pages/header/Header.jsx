import { useEffect, useState } from "react";
import { ReserveButton } from "../../components/reserve-button/ReserveButton.jsx";
import { motion } from "framer-motion";
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
        <h1 className="logo">Ebano & Oro</h1>
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
              <a href="#about-us" className="link">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#platos" className="link">
                Menu
              </a>
            </li>
            <li>
              <a href="#reservas" className="link">
                Reservas
              </a>
            </li>
            <li>
              <a href="#testimonios" className="link">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Galeria
              </a>
            </li>
            <li>
              <a href="#contacto" className="link">
                Contacto
              </a>
            </li>
          </ul>
          <div className="header-reserve-container">
            <ReserveButton
              style={{ width: "100%", height: "70%", fontSize: "1.2rem" }}
            />
          </div>
        </motion.nav>
      </div>
    </header>
  );
};
