import Header from './Components/Header';
import "./Stylesheets/App.css";
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
