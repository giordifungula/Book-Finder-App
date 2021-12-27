import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from 'components/About';
import Contact from 'components/Contact';
import Home from 'components/Home';
import Header from 'components/Layouts/Header';
import UseScrollToTop from 'hooks/useScrollToTop';
import ScrollToTop from 'components/utils/scrollToTop';
import Footer from 'components/Layouts/Footer';

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
