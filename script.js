// Texte de présentation
const presentationText = "EBBH est une entreprise familiale spécialisée dans la plomberie, le chauffage et l'électricité. Avec plus de 20 ans d'expérience, nous garantissons des interventions rapides et un travail de qualité.";
document.getElementById("presentation-text").textContent = presentationText;

// Services
const services = [
  {
    titre: "Plomberie",
    description: "Installation, rénovation, dépannage de vos équipements sanitaires."
  },
  {
    titre: "Chauffage",
    description: "Pose et entretien de chaudières, radiateurs, planchers chauffants."
  },
  {
    titre: "Électricité",
    description: "Mises aux normes, installations, dépannage électrique domestique."
  }
];

const servicesContainer = document.getElementById("services-container");
services.forEach(service => {
  const div = document.createElement("div");
  div.className = "carte-service";
  div.innerHTML = `<h3>${service.titre}</h3><p>${service.description}</p>`;
  servicesContainer.appendChild(div);
});

// Galerie (tu peux remplacer les noms par des <img src="..."> plus tard)
const galerie = ["Photo 1", "Photo 2", "Photo 3"];
const galerieContainer = document.getElementById("galerie-container");
galerie.forEach(item => {
  const div = document.createElement("div");
  div.className = "photo";
  div.textContent = item;
  galerieContainer.appendChild(div);
});
