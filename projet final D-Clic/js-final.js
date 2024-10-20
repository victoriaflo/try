// Sélection du bouton et de la div qui contient les liens
const button = document.getElementById("show-links");
const links = document.getElementById("links");

// Ajout d'un événement de clic au bouton
button.addEventListener("click", function() {
    // Si les liens sont cachés, on les affiche, sinon on les cache
    if (links.style.display === "none") {
        links.style.display = "block"; // Afficher les liens
    } else {
        links.style.display = "none"; // Cacher les liens
    }
});