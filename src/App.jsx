import Navbar from "./components/Navbar"
import Hero from "./pages/Single_smooth_page/Hero"
import React,{useEffect,useState} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./pages/Single_smooth_page/Services";
import Banner from "./pages/Single_smooth_page/Banner";
import AppStore from "./components/AppStore";
import Testimonial from "./pages/Single_smooth_page/Testimonial";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    
    })
  })

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App
