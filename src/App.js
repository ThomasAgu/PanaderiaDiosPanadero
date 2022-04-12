import LandingHero from "./components/landingHero";
import NavBar from "./components/navBar";
import AboutUs from "./components/AboutUs";
import Productos from './components/ProductosList'
import Contacto from "./components/Contacto";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";
import './sass/App.scss'

function App() {
  return (
    <div className="App">
      <LandingHero />
      <NavBar/>
      <AboutUs/>
      <Productos/>
      <Contacto/>
      <Ubicacion />
      <Footer/>
    </div>
  );
}

export default App;
