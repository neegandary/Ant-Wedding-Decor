import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import DecorPortfolio from "./pages/DecorPortfolio";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import { BackToTop } from "./components/BackToTop";
import { Detination } from "./pages/service/Destination";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/ancestor" element={<Service />} />
          <Route path="/services/destination" element={<Detination />} />
          <Route path="/services/restaurant-wedding" element={<Service />} />
          <Route path="/services/event" element={<Service />} />
          <Route path="/portfolio" element={<DecorPortfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <BackToTop />
    </>
  )
}

export default App