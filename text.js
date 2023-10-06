document.addEventListener('DOMContentLoaded', function() {
    const sendStoryButton = document.querySelector('.send-story-button');

    if (sendStoryButton) {
        sendStoryButton.addEventListener('click', function() {
            window.location.href = "mailto:phculhub@gmail.com";
        });
    }
});
