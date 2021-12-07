console.log("test1");

const lightboxBG = document.createElement('div');
lightboxBG.id="lightboxBG";
document.body.appendChild(lightboxBG);

// pull up light box
// select images from for loop
const images = document.querySelectorAll('.zoom-img');
images.forEach(image => {
    // add an event listener for click event
    image.addEventListener('click', cl => {
        const room_id = image.id;
        // create the lightbox effect by adding image to gray background
        lightboxBG.classList.add('active');
        // img
        const lightboxIMG = document.createElement('img');
        lightboxIMG.src=image.src;
        lightboxIMG.style.width = '50%';
        lightboxIMG.style.cursor = 'pointer';
        lightboxIMG.id = "lightboxIMG";
        // if there is already a child to the background, get rid of it
        while (lightboxBG.firstChild) {
            lightboxBG.removeChild(lightboxBG.firstChild)
        }
        lightboxIMG.addEventListener('click', e => {
            window.location.href = `/room/${room_id}`;
        });
        lightboxBG.appendChild(lightboxIMG);
    })
})

lightboxBG.addEventListener('click', e => {
    lightboxBG.classList.remove('active');
})
