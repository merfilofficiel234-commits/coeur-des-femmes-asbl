
// ======================================
// CŒUR DES FEMMES ASBL
// Script principal du site
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // Récupération des éléments du menu
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    // Vérification de leur présence
    if (menuToggle && navigation) {

        // Ouvrir et fermer le menu
        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Fermer le menu après avoir choisi une rubrique
        const menuLinks = navigation.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

        // Fermer le menu avec la touche Échap
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navigation.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }

});
