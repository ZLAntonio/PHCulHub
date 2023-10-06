var currentImageIndex = 1;

function changeImage(num) {
    var mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0';

    setTimeout(function() {
        mainImage.src = 'landmarkimages/landmark (' + num + ').jpg';
        mainImage.style.opacity = '1';
    }, 500);

    currentImageIndex = num;
    updateNavButtons();
}

function prevImage() {
    if (currentImageIndex > 1) {
        changeImage(currentImageIndex - 1);
    }
}

function nextImage() {
    if (currentImageIndex < 9) {
        changeImage(currentImageIndex + 1);
    }
}

function updateNavButtons() {
    var prevButton = document.querySelector('.navButton.prev');
    var nextButton = document.querySelector('.navButton.next');

    if (currentImageIndex === 1) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentImageIndex === 9) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}
