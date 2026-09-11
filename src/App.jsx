import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WeOffer from './pages/WeOffer';

// Scroll to the top whenever the user navigates to a new page.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// App owns the global page shell. Navbar/Footer therefore stay consistent on every route.
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/we-offer" element={<WeOffer />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}