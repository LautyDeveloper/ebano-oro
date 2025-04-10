import "./App.css";
import { AboutUs } from "./components/About Us/About-Us";
import { Contacto } from "./components/Contacto/Contacto";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Platos } from "./components/Platos/Platos";
import { Reservar } from "./components/Reservar/Reservar";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Platos />
      <Reservar />
      <Contacto />
    </div>
  );
}

export default App;
