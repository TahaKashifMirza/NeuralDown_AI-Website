import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import UseCases from './components/UseCases'
import Risk from './components/Risk'
import Future from './components/Future'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};  

const MainPage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="usecases">
        <UseCases />
      </section>
      <section id="risk">
        <Risk />
      </section>
      <section id="future">
        <Future />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;