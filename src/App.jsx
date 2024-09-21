import "./App.css"; 
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Service from "./components/Service/Service";
import Project from "./components/Project/Project";
import Testimonials from "./components/Testimonials/Testimonials";
import Conatct from "./components/Contact/Conatct";
import ErrorPage from "./components/ErrorPage/ErrorPage";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/About" element={<About />}/>
      <Route path="/Services" element={<Service />}/>
      <Route path="/Projects"  element={<Project />} />
      <Route path="/Testimonials" element={<Testimonials />}/>
      <Route path="/Contact" element={<Conatct />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
