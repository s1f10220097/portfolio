document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);

    // 画像を複製してループを補完
    images.forEach(image => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });
});

