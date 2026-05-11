import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <Portfolio />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}
