// Texte de présentation
const presentationText = "EBBH est une entreprise artisanale à Paris spécialisée dans la plomberie, le chauffage et l'électricité. Grâce à un savoir-faire reconnu et des années d'expérience, nous proposons des prestations sur-mesure pour vos rénovations, dépannages et installations. Notre priorité : un travail de qualité et une satisfaction client optimale.";
document.getElementById("presentation-text").textContent = presentationText;

// Services
const services = [
  {
    titre: "Plomberie",
    description: "Installation de salles de bain, remplacement de robinetterie, recherche de fuites, débouchage et dépannage en urgence."
  },
  {
    titre: "Chauffage",
    description: "Installation et entretien de chaudières gaz, radiateurs, planchers chauffants et désembouage de circuit."
  },
  {
    titre: "Électricité",
    description: "Mise aux normes, rénovation complète, ajout de prises, tableau électrique, éclairage intérieur et extérieur."
  }
];

const servicesContainer = document.getElementById("services-container");
services.forEach(service => {
  const div = document.createElement("div");
  div.className = "carte-service";
  div.innerHTML = `<h3>${service.titre}</h3><p>${service.description}</p>`;
  servicesContainer.appendChild(div);
});

// Galerie (tu peux remplacer par des vraies images plus tard)
const galerie = [
  "Avant / Après cuisine",
  "Salle de bain rénovée",
  "Installation électrique récente"
];

const galerieContainer = document.getElementById("galerie-container");
galerie.forEach(item => {
  const div = document.createElement("div");
  div.className = "photo";
  div.textContent = item;
  galerieContainer.appendChild(div);
});
