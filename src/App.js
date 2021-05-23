import Header from './Components/Header';
import "./Stylesheets/App.css";
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
