import './App.css'
import { AboutUs } from './components/About Us/About-Us'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Platos } from './components/Platos/Platos'
function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Platos />
    </div>
  )
}

export default App
