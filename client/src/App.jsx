import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import DecorPortfolio from "./pages/DecorPortfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import { BackToTop } from "./components/BackToTop";
import SocialMediaButtons from "./components/SocialMediaButtons";
import { Destination } from "./pages/service/Destination";
import { Ancestor } from "./pages/service/Ancestor";
import { Restaurant } from "./pages/service/Restaurant";
import { Event } from "./pages/service/Event";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/ancestor" element={<Ancestor />} />
          <Route path="/services/destination" element={<Destination />} />
          <Route path="/services/restaurant-wedding" element={<Restaurant />} />
          <Route path="/services/event" element={<Event />} />
          <Route path="/portfolio" element={<DecorPortfolio />} />
          <Route path="/portfolio/:endpoint" element={<PortfolioDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <BackToTop />
      <SocialMediaButtons />
    </>
  )
}

export default App