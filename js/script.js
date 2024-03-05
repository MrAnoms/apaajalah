document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.querySelector(".lightbox-container");
    const lightboxImage = document.querySelector(".lightbox-image");
    const caption = document.querySelector(".caption");
    const close = document.querySelector(".close");
    const galleryItems = document.querySelectorAll(".lightbox-trigger");

    galleryItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const imgSrc = item.getAttribute("data-src");
            const imgAlt = item.getAttribute("alt");
            const imgCaption = item.getAttribute("data-caption");

            lightboxImage.setAttribute("src", imgSrc);
            lightboxImage.setAttribute("alt", imgAlt);
            caption.textContent = imgCaption;
            lightbox.style.display = "flex";
        });
    });

    close.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
