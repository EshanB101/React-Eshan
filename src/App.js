import './index.css'
import Navbar from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";

function App() {
  return (
      <div className={'container'}>
          <Navbar/>
          <section className={'body-container p-12 bg-gray-100'}>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about-me" element={<AboutMe />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
              </Routes>
          </section>
      </div>
      );
}

export default App;
