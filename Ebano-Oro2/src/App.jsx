import "./App.css";
import { AboutUs } from "./pages/about-us/AboutUs.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Footer } from "./pages/footer/Footer.jsx";
import { Header } from "./pages/header/Header.jsx";
import { Hero } from "./pages/hero/Hero.jsx";
import { Plates } from "./pages/plates/Plates.jsx";
import { Reserve } from "./pages/reserve/Reserve.jsx";
import "./assets/fonts/fonts.js";
import { Testimonials } from "./pages/testimonials/Testimonials.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Plates />
      <Reserve />
      <Testimonials />
      <Contact />
      <Footer />

      <div className="developed-by">
        <p>Desarrollado con ♥ por LautyDev☀</p>
      </div>
    </div>
  );
}

export default App;
