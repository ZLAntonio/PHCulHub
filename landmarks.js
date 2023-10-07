var currentImageIndex = 0;

function changeImage(num) {
    var mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0';

    setTimeout(function() {
        mainImage.src = [
            'https://blog.sharemoney.com/wp-content/uploads/2018/11/Famous-Historical-Sites-In-The-Philippines.jpg',
            'https://www.thepoortraveler.net/wp-content/uploads/2010/06/Mt.-Mayon-Albay.jpg',
            'https://image.vigattin.com/box/optimize/85/495_9903384602009818012.jpg',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/51/9d/8d/best-island-in-the-philippines.jpg?w=500&h=300&s=1',
            'https://a.cdn-hotels.com/gdcs/production5/d320/a0c5a994-d99a-4278-a1b1-8a3b652461ac.jpg',
            'https://a.cdn-hotels.com/gdcs/production23/d1313/7cf8e4c8-6785-48d6-b6ae-491827835bb1.jpg',
            'https://theculturetrip.com/wp-content/uploads/2018/03/17107690389_adee6d5cd2_k-e1520301888910.jpg'
        ][num - 1];

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
    if (currentImageIndex < 6) { // Adjusted the limit to match the number of images
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

    if (currentImageIndex === 6) { // Adjusted the limit to match the number of images
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}
