import React from 'react';
import About from '../components/About';
import Mission from '../components/Mission';
import ContactUs from '../components/Contact-us';

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
  
    >
      
      <section className="relative z-10 text-center p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Welcome to Youth Vision</h1>
        <p className="mt-4 text-lg md:text-xl font-light max-w-xl mx-auto">
          Empowering the youth for a better future.
        </p>
      </section>
      
      <div className="relative z-10 w-full px-8">
        <About />
        <Mission />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
