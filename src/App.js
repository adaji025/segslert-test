import './styles/index.scss'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Property from './components/Property/Property';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Property />
    </div>
  );
}

export default App;
