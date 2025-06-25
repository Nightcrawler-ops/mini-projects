// Get all gallery item elements (the thumbnail images)
const galleryItems = document.querySelectorAll('.gallery-item');
// Get the lightbox container element
const lightbox = document.querySelector('.lightbox');
// Get the image element inside the lightbox where the full-size image will be shown
const lightboxImage = document.getElementById('lightbox-image');
// Get the close button element
const closeBtn = document.getElementById('close-btn');

/**
 * Handles the click event on gallery items.
 * Displays the lightbox and loads the full-size image.
 * @param {Event} event - The click event object.
 */
galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // Set the .lightbox element's display property to flex to make it visible.
        lightbox.style.display = 'flex';

        // Set the #lightbox-image element's src to a full-size version.
        // This is done by replacing '-thumbnail' with an empty string in the original src.
        const thumbnailSrc = event.target.src;
        const fullSizeSrc = thumbnailSrc.replace('-thumbnail', '');
        lightboxImage.src = fullSizeSrc;
    });
});

/**
 * Handles the click event on the close button.
 * Hides the lightbox.
 */
closeBtn.addEventListener('click', () => {
    // Set the .lightbox element's display back to none.
    lightbox.style.display = 'none';
    lightboxImage.src = ''; // Clear the image source to save memory/prevent flicker
});

/**
 * Handles the click event on the lightbox background.
 * Hides the lightbox only if the click target is the lightbox itself, not its children.
 * This prevents closing when clicking on the image or close button.
 * @param {Event} event - The click event object.
 */

lightbox.addEventListener('click', (event) => {
    // Check if the clicked element is the lightbox itself (not its child).
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImage.src = ''; // Clear the image source
    }
});