import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export const Header = ( ) => {
    const [menu, setMenu] = useState(false);
  return (
    <header className="header">
        <div className="header-logo-container">
            <img src="" alt="" />
        </div>
        <div className="header-nav-container">
            <button className="menu-btn" onClick={() => setMenu(!menu)}>
                ☰
            </button>
            
            <motion.nav
                className='header-nav'
                initial={{ x: "100%" }} // Empieza fuera de la pantalla (derecha)
                animate={{ x: menu ? "0%" : "100%" }} // Se mueve a la izquierda cuando abre
                transition={{ duration: 0.3, ease: "easeOut" }} // Animación más suave
                style={{ display: menu ? "block" : "none" }}>
                <ul className="header-nav-list">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservas</a></li>
                    <li><a href="#">Testimonios</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="header-reserve-container">
                    <button className="header-reserve-button"></button>
                </div>
                </motion.nav>
        </div>

    </header>
  );
};