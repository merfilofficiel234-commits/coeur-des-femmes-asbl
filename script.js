
// ==========================================
// CŒUR DES FEMMES ASBL
// JAVASCRIPT PRINCIPAL
// ==========================================

document.addEventListener("DOMContentLoaded", function () {


    // ======================================
    // MENU DE NAVIGATION
    // ======================================

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        // Fermer le menu après un clic
        const menuLinks = navigation.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            });

        });


        // Fermer le menu avec Échap
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navigation.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            }

        });

    }


    // ======================================
    // AGRANDISSEMENT DES PHOTOS
    // ======================================

    const galleryImages = document.querySelectorAll(".gallery-item img");


    // Création de la fenêtre photo
    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    lightbox.setAttribute("aria-hidden", "true");

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Fermer">&times;</button>
        <img src="" alt="Photographie agrandie">
    `;

    document.body.appendChild(lightbox);


    const lightboxImage = lightbox.querySelector("img");

    const closeButton = lightbox.querySelector(".lightbox-close");


    // Ouvrir une photo
    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            lightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        });

    });


    // Fermer la photo
    function closeLightbox() {

        lightbox.classList.remove("active");

        lightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    closeButton.addEventListener("click", closeLightbox);


    // Fermer en cliquant à l'extérieur de la photo
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });


    // Fermer avec Échap
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    });

});
