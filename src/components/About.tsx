import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto shadow-lg rounded-lg overflow-hidden">
        {/* Background image section with overlay */}
        <section 
          className="relative bg-cover bg-center h-64 sm:h-80 md:h-96" 
          style={{ backgroundImage: "url('/bg.jpeg')" }}
        >
          {/* Semi-transparent dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center">
              À propos de Youth Vision
            </h1>
          </div>
        </section>
        
        {/* Transparent card section with backdrop blur */}
        <div className="p-8 md:p-12 lg:p-16 bg-white bg-opacity-60 backdrop-blur-md rounded-lg">
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            L’association Youth Vision est une association Tunisienne à but non lucratif créée en février 2011. Organisation de droit Tunisien régie par les dispositions du décret-loi 88/2011 portant organisation des associations. L’avis de constitution de l’Association a été publié au JORT sous le N° 2011200058APSF1 en date du 02/02/2011.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Contactez-nous</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            <strong>Adresse postale :</strong> Bureau N°.3 immeuble Khanjari, rue Mosbah Jarbouh 3200 Tataouine.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            <strong>Tel :</strong> 28348142
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            <strong>Fax :</strong> 75624168
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            <strong>Email :</strong> <a href="mailto:youth.vision.tataouine@gmail.com" className="text-blue-600 hover:underline">youth.vision.tataouine@gmail.com</a>
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            <strong>Facebook :</strong> <a href="https://www.facebook.com/Youth.Vision.Tataouine" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Youth Vision Tataouine</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
