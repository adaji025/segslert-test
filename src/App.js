import './styles/index.scss'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
