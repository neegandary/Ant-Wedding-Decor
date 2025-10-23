import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import DecorPortfolio from "./pages/DecorPortfolio";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";


const App = () => {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<DecorPortfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App