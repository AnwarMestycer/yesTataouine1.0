import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import ContactUs from './pages/Contact-us';
import Home from './pages/Home';
import AboutUs from './components/About';
import FestivalDeRobotique from './components/Festival';
import Mission from './components/Mission';

const App: React.FC = () => {
  return (
    <Router>

<div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/bg-home.jpg')" }}
    >
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/"  Component={Home} />
            <Route path="/mission" Component={Mission} />

            <Route path="/about" Component={AboutUs} />
            <Route path="/festival" Component={FestivalDeRobotique} />

            <Route path="/contact" Component={ContactUs} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
