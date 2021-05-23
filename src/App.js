import Header from './Components/Header';
import "./Stylesheets/App.css";
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
