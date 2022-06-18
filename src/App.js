import "./styles/index.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Property from "./components/Property/Property";
import Featured from "./components/Featured/Featured";
import Blog from "./components/Blog/Blog";
import Testimonial from "./components/Testimonial/Testimonial";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <Property />
      </div>
      <Featured />
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default App;
