import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-60 backdrop-blur-md p-8 md:p-12 lg:p-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Notre Mission</h1>
        
        <p className="mb-6 text-lg leading-relaxed text-gray-800">
          Youth Vision a pour mission d’apporter le soutien nécessaire aux personnes vulnérables et aux communautés fragilisées afin qu’elles puissent améliorer leurs conditions de vie et réaliser le bien-être.
        </p>
        
        <p className="mb-6 text-lg leading-relaxed text-gray-800">
          À cet égard, nous avons trois missions principales :
        </p>
        
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-800 space-y-4">
          <li>
            <strong>M 1:</strong> Contribuer à la formation des titulaires de diplômes supérieurs, des diplômés de formation professionnelle et accompagner les demandeurs d'emploi.
          </li>
          <li>
            <strong>M 2:</strong> Contribuer à l'autonomisation économique et l'inclusion sociale des jeunes et des femmes.
          </li>
          <li>
            <strong>M 3:</strong> Consolider les orientations nationales en : Economie verte, économie sociale et solidaire et les changements climatiques.
          </li>
        </ul>
        
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Notre Vision</h2>
        
        <p className="text-lg leading-relaxed text-gray-800">
          Youth Vision vise à « Consolider sa position d’acteur de développement fort, stable, financièrement viable, solidement implanté en Tunisie, reconnu au niveau international et fédérateur autour des idéaux de partage, de solidarité, d’équité et de justice sociale ».
        </p>
      </div>
    </section>
  );
};

export default Mission;
