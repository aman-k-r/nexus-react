import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Contactus from "./components/Contactus";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Tc from "./components/Tc";
import "boxicons/css/boxicons.min.css";
import Form from "./components/Form";

function App() {
  const location = useLocation();

  return (
    <>
    {/* Conditionally render Navbar */}
    {location.pathname === "/" && <Navbar />}
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Insights />
          <Events />
          <Sponsors />
          <Contactus />
          <FAQs />
          <Footer />
        </>
      } />
      <Route path="/register" element={<Tc />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  </>
  );
}

export default App;
