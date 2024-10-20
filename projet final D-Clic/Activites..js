// Sélectionner toutes les cartes de projet
const projectCards = document.querySelectorAll('.project-card');

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter l'animation si les éléments sont visibles
function animateProjects() {
    projectCards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('animate');
        }
    });
}

// Exécuter l'animation lors du défilement
window.addEventListener('scroll', animateProjects);

// Exécuter l'animation au chargement de la page
window.addEventListener('load', animateProjects);