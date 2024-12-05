import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FoodAnalysis from './pages/projects/FoodAnalysis';
import TransportationAnalysis from './pages/projects/TransportationAnalysis';
import CommunityAnalysis from './pages/projects/CommunityAnalysis';
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects/food-analysis" element={<FoodAnalysis />} />
              <Route path="/projects/transportation-analysis" element={<TransportationAnalysis />} />
              <Route path="/projects/community-analysis" element={<CommunityAnalysis />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;