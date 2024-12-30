const GalleryButton = document.getElementById("galleryBtn");
const GallerySection = document.getElementById("gallery");
const closeGalleryButton =
document.getElementById("closeGallery");

GalleryButton.addEventListener("click",()=> {
    GallerySection.classList.remove("hidden");
});

closeGalleryButton.addEventListener("click",()=> {
    GallerySection.classList.add("hidden");
});


const images = document.querySelectorAll('gallery-section img');
images.forEach(image => {
    image.addEventListener('mouseenter',() => {
        console.log('Hovering over:$(image.alt}');
    })
});
image.addEventListener('mouseleave',() => {
    console.log('Stopped hovering over:$(image.alt}');
});