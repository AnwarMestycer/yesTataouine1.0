import React, { useState } from "react";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

const FestivalDeRobotique: React.FC = () => {
  const [teamInfos, setTeamInfos] = useState({
    nomequipe: "",
    categorie: "",
    membres: [{ nom: "", dateNaissance: "" }],
    responsable: { nom: "", telephone: "", email: "" },
    description: "",
  });

  // Function to toggle the second member
  const toggleSecondMember = () => {
    setTeamInfos((prevState) => {
      if (prevState.membres.length === 1) {
        return {
          ...prevState,
          membres: [...prevState.membres, { nom: "", dateNaissance: "" }],
        };
      } else {
        return {
          ...prevState,
          membres: prevState.membres.slice(0, 1),
        };
      }
    });
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("nommembre")) {
      const memberIndex = parseInt(name.slice(-1)) - 1;
      const newMembres = [...teamInfos.membres];
      newMembres[memberIndex] = { ...newMembres[memberIndex], nom: value };
      setTeamInfos({ ...teamInfos, membres: newMembres });
    } else if (name.startsWith("date_naissancemembre")) {
      const memberIndex = parseInt(name.slice(-1)) - 1;
      const newMembres = [...teamInfos.membres];
      newMembres[memberIndex] = { ...newMembres[memberIndex], dateNaissance: value };
      setTeamInfos({ ...teamInfos, membres: newMembres });
    } else if (name === "nomresponsable") {
      setTeamInfos({ ...teamInfos, responsable: { ...teamInfos.responsable, nom: value } });
    } else if (name === "telresponsable") {
      setTeamInfos({ ...teamInfos, responsable: { ...teamInfos.responsable, telephone: value } });
    } else if (name === "mailresponsable") {
      setTeamInfos({ ...teamInfos, responsable: { ...teamInfos.responsable, email: value } });
    } else if (name === "description") {
      setTeamInfos({ ...teamInfos, description: value });
    } else {
      setTeamInfos({ ...teamInfos, [name]: value });
    }
    console.log(teamInfos)
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = Object.values(teamInfos).every((field) => {
      if (typeof field === "string") return field.trim() !== "";
      if (Array.isArray(field)) return field.every((member) => member.nom && member.dateNaissance);
      return true;
    });

    if (isValid) {
        alert("Team information saved successfully!");
      try {
        const docRef = await addDoc(collection(db, "yesTeams"), teamInfos);
   
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    } else {
      alert("Please fill in all required fields.");
    }

    // Inside handleSubmit function


  };

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <label className="block text-gray-700 font-semibold">
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <div className="min-h-screen py-12 px-2 sm:px-8 lg:px-24">
      <div className="container mx-auto shadow-lg rounded-lg overflow-hidden bg-white bg-opacity-60 backdrop-blur-md p-8 md:p-12 lg:p-4 lg:w-screen">
      <section
          className="mb-2 relative bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('src/bg.jpeg')" }}
        >
          <div className="bg-grey-100 bg-opacity-75 p-8 rounded-lg mb-4">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">
              Présentation du festival
            </h1>
            <p className="mb-2 text-lg leading-relaxed text-gray-800">
              La compétition robotique YES 1.0, première édition inspirée des
              Reliefs Lunairesسطح القمر de la magique Ain Charchara à Tataouine,
              nous plonge dans un univers où la technologie rencontre
              l'imagination. Entre des équipes créatives, des défis
              technologiques passionnants et des destins entremêlés, cette
              compétition explore la nature ludique de la robotique. Chaque
              équipe aspire à exceller dans des missions variées, cherchant à
              remporter la victoire avec des performances exceptionnelles. Les
              ajustements magiques de dernière minute et les rebondissements
              inattendus mettent en lumière des alliances robotiques, des
              stratégies créatives et des thèmes universels tels que la
              persévérance, l'ingéniosité et les conséquences surprenantes des
              choix technologiques. Dans ce monde compétitif inspiré de reliefs
              spectaculaires aux couleurs changeantes, marbrés, les jeunes
              concepteurs explorent des possibilités infinies, apprennent à
              résoudre des problèmes complexes et vivent des moments palpitants.
              La compétition devient ainsi une aventure fantastique où
              l'honneur, l'esprit d'équipe et la découverte de nouvelles
              technologies se mêlent pour créer une expérience inoubliable,
              rappelant les péripéties magiques de l’incroyable paysage minéral
              d’Aïn Charchara.{" "}
            </p>
          </div>
        </section>

        {/* Dates and Location Section */}
        <section
          className="mb-2 relative bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/assets/dates-bg.jpg')" }}
        >
          <div className="bg-grey-100 bg-opacity-75 p-8 rounded-lg mb-2">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              Dates et lieu du prochain festival
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              YES 1.0, qui se déroulera à la salle sportive Kamel Abdeltif le
              29-30 Décembre 2024.
            </p>
          </div>
        </section>

        {/* Competition Categories Section */}
        <section
          className="mb-2 relative bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: "url('/assets/categories-bg.jpg')" }}
        >
          <div className="bg-grey-100 bg-opacity-75 p-8 rounded-lg mb-4">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              Catégories de compétition
            </h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-gray-800 space-y-2">
              <li>Junior</li>
              <li>Senior</li>
            </ul>
          </div>
        </section>
        <section className="mb-4 bg-white p-8 rounded-lg shadow-lg">
        
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Inscription d'une Équipe</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-2">Informations de l'Équipe</h3>
            <RequiredLabel>Nom de l'Équipe:</RequiredLabel>
            <input
              type="text"
              name="nomequipe"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              value={teamInfos.nomequipe}
              onChange={handleChange}
            />

            <RequiredLabel>Catégorie:</RequiredLabel>
            <select
              name="categorie"
              required
              className="w-full p-3 border border-gray-300 text-black rounded-lg"
              value={teamInfos.categorie}
              onChange={handleChange}
            >
                <option value="" disabled>Categorie</option>
              <option value="Junior">Junior (moins de 14 ans)</option>
              <option value="Senior">Senior (14-18 ans)</option>
            </select>

            {teamInfos.membres.map((member, index) => (
              <div key={index}>
                <h3 className="text-xl text-black  font-semibold mb-2">Informations du Membre {index + 1}</h3>
                <RequiredLabel>Nom du Membre {index + 1}:</RequiredLabel>
                <input
                  type="text"
                  name={`nommembre${index + 1}`}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-black mb-4"
                  value={member.nom}
                  onChange={(e) => handleChange(e, index)}
                />
                <RequiredLabel>Date de Naissance:</RequiredLabel>
                <input
                  type="date"
                  name={`date_naissancemembre${index + 1}`}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  value={member.dateNaissance}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={toggleSecondMember}
              className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {teamInfos.membres.length === 1 ? "Ajouter un 2ème membre" : "Supprimer le 2ème membre"}
            </button>

            {/* Remaining form for team leader's information */}
            <h3 className="text-xl font-semibold mt-4 mb-2">Informations du Responsable</h3>
            <RequiredLabel>Nom Complet:</RequiredLabel>
            <input
              type="text"
              name="nomresponsable"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              value={teamInfos.responsable.nom}
              onChange={handleChange}
            />
            <RequiredLabel>Numéro de Téléphone:</RequiredLabel>
            <input
              type="tel"
              name="telresponsable"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              value={teamInfos.responsable.telephone}
              onChange={handleChange}
            />
            <RequiredLabel>Email:</RequiredLabel>
            <input
              type="email"
              name="mailresponsable"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              value={teamInfos.responsable.email}
              onChange={handleChange}
            />

            <RequiredLabel>Description:</RequiredLabel>
            <textarea
              name="description"
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
              value={teamInfos.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              S'inscrire
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FestivalDeRobotique;
