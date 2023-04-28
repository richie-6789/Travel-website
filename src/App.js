import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Select from "./components/Select";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Select />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
