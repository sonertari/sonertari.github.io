/*
 * UTMFW
 * Copyright (C) 2025 Soner Tari <sonertari@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        // Ensure the menu is hidden by default on mobile
        // The 'hidden' class is already in HTML, this is a safe re-enforcement
        mobileMenu.classList.add('hidden');

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image Carousel functionality
    const carouselSlides = document.querySelector('.carousel-slides');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const slides = document.querySelectorAll('.carousel-slide');
    const carouselContainer = document.getElementById('image-carousel'); // Get the main carousel container

    let currentIndex = 0;
    let autoScrollInterval; // Variable to hold the interval ID
    const autoScrollDelay = 5000; // 5 seconds

    // Function to start auto-scrolling
    function startAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval); // Clear any existing interval
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, autoScrollDelay);
    }

    // Function to stop auto-scrolling
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Function to restart auto-scrolling after a brief pause
    let autoScrollTimeout;
    function resetAutoScrollTimeout() {
        clearTimeout(autoScrollTimeout);
        stopAutoScroll(); // Stop immediately on interaction
        autoScrollTimeout = setTimeout(startAutoScroll, autoScrollDelay * 2); // Resume after a longer pause
    }

    if (carouselSlides && prevButton && nextButton && dotsContainer && slides.length > 0) {
        // Create dots
        dotsContainer.innerHTML = ''; // Clear existing dots to prevent duplicates
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot', 'w-3', 'h-3', 'bg-gray-400', 'rounded-full', 'hover:bg-gray-600', 'transition-colors', 'duration-300');
            if (index === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                moveToSlide(index);
                resetAutoScrollTimeout(); // Reset timer on dot click
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.dot');

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselSlides.style.transform = `translateX(${offset}%)`;
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                    dot.style.backgroundColor = '#2563eb'; // Tailwind blue-600
                } else {
                    dot.classList.remove('active');
                    dot.style.backgroundColor = '#9ca3af'; // Tailwind gray-400
                }
            });
        }

        function moveToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateCarousel();
            resetAutoScrollTimeout(); // Reset timer on arrow click
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
            resetAutoScrollTimeout(); // Reset timer on arrow click
        });

        // Add event listeners to pause/resume auto-scroll on hover
        carouselContainer.addEventListener('mouseenter', stopAutoScroll);
        carouselContainer.addEventListener('mouseleave', startAutoScroll);

        // Initialize carousel position and dots and start auto-scroll
        updateCarousel();
        startAutoScroll();


        // --- Image Zoom Functionality ---
        const imageModal = document.getElementById('image-modal');
        const closeModalButton = document.getElementById('close-modal');
        const zoomedImage = document.getElementById('zoomed-image');
        const zoomedImageContainer = document.getElementById('zoomed-image-container');
        const zoomInButton = document.getElementById('zoom-in');
        const zoomOutButton = document.getElementById('zoom-out');
        const resetZoomButton = document.getElementById('reset-zoom');

        let currentZoom = 1;
        let panX = 0; // Current translation X
        let panY = 0; // Current translation Y
        let isDragging = false;
        let dragStartX = 0; // Mouse X when drag started
        let dragStartY = 0; // Mouse Y when drag started
        let initialPanX = 0; // panX value when drag started
        let initialPanY = 0; // panY value when drag started

        // Variables for pinch-to-zoom
        let initialPinchDistance = null;
        let lastTouchX = null;
        let lastTouchY = null;

        // Open modal - updated selector to target img tags directly
        document.querySelectorAll('.zoomable-image-link').forEach(imgElement => {
            imgElement.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default link behavior (though there's no href anymore)
                const imgSrc = this.getAttribute('data-img-src'); // Get src from data-img-src attribute on the img tag
                if (imgSrc) {
                    zoomedImage.src = imgSrc;
                    imageModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling background
                    resetZoom(); // Reset zoom and position when opening
                }
            });
        });

        // Close modal
        closeModalButton.addEventListener('click', closeModal);
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) { // Only close if clicking the overlay, not the content
                closeModal();
            }
        });

        function closeModal() {
            imageModal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Zoom functionality
        function updateZoomAndPan() {
            // Apply scale first, then translate. Transform origin is set to center by default in CSS.
            zoomedImage.style.transform = `scale(${currentZoom}) translate(${panX}px, ${panY}px)`;
        }

        function zoom(factor) {
            const newZoom = currentZoom * factor;
            // Limit zoom to a reasonable range
            if (newZoom >= 0.5 && newZoom <= 5) {
                currentZoom = newZoom;
                updateZoomAndPan();
            }
        }

        zoomInButton.addEventListener('click', () => zoom(1.2));
        zoomOutButton.addEventListener('click', () => zoom(0.8));

        resetZoomButton.addEventListener('click', resetZoom);

        function resetZoom() {
            currentZoom = 1;
            panX = 0;
            panY = 0;
            updateZoomAndPan();
        }

        // Panning functionality (drag) - Mouse events
        zoomedImageContainer.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent browser's default image drag behavior
            if (currentZoom > 1) { // Only allow panning if zoomed in
                isDragging = true;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
                initialPanX = panX; // Store current pan before dragging starts
                initialPanY = panY;
                zoomedImageContainer.style.cursor = 'grabbing';
            }
        });

        zoomedImageContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return; // Only pan if dragging is active
            panX = initialPanX + (e.clientX - dragStartX);
            panY = initialPanY + (e.clientY - dragStartY);
            updateZoomAndPan();
        });

        // Listen for mouseup on the document to ensure drag stops even if mouse leaves the container
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                zoomedImageContainer.style.cursor = 'grab';
            }
        });

        // Listen for mouseleave on the document, to stop dragging if mouse leaves the browser window
        document.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                zoomedImageContainer.style.cursor = 'grab';
            }
        });

        // Mobile touch events for panning and pinch-to-zoom
        zoomedImageContainer.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default scrolling/zooming behavior on touch

            if (e.touches.length === 1) {
                // Single touch for panning
                if (currentZoom > 1) {
                    isDragging = true;
                    dragStartX = e.touches[0].clientX;
                    dragStartY = e.touches[0].clientY;
                    initialPanX = panX;
                    initialPanY = panY;
                    zoomedImageContainer.style.cursor = 'grabbing';
                }
                lastTouchX = e.touches[0].clientX;
                lastTouchY = e.touches[0].clientY;
                initialPinchDistance = null; // Reset pinch on single touch
            } else if (e.touches.length === 2) {
                // Two touches for pinch-to-zoom
                isDragging = false; // Disable panning if pinching starts
                initialPinchDistance = Math.hypot(
                    e.touches[1].clientX - e.touches[0].clientX,
                    e.touches[1].clientY - e.touches[0].clientY
                );
                // Store the midpoint of the initial pinch for centered zooming
                lastTouchX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                lastTouchY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            }
        });

        zoomedImageContainer.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent scrolling the page while panning or zooming

            const containerRect = zoomedImageContainer.getBoundingClientRect();

            if (e.touches.length === 1 && isDragging) {
                // Single-finger panning (after initial zoom or if currentZoom > 1)
                panX = initialPanX + (e.touches[0].clientX - dragStartX);
                panY = initialPanY + (e.touches[0].clientY - dragStartY);
                updateZoomAndPan();
            } else if (e.touches.length === 2 && initialPinchDistance !== null) {
                // Pinch-to-zoom
                const newDistance = Math.hypot(
                    e.touches[1].clientX - e.touches[0].clientX,
                    e.touches[1].clientY - e.touches[0].clientY
                );

                const scaleFactor = newDistance / initialPinchDistance;
                let newZoom = currentZoom * scaleFactor;

                // Clamp newZoom to a reasonable range
                newZoom = Math.max(0.5, Math.min(newZoom, 5));

                if (newZoom !== currentZoom) {
                    const zoomRatio = newZoom / currentZoom;
                    
                    // Midpoint of the current touches
                    const currentMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                    const currentMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

                    // Calculate translation needed to keep the midpoint centered during zoom
                    // This is relative to the image container
                    const imgCurrentCenterX = containerRect.width / 2 + panX;
                    const imgCurrentCenterY = containerRect.height / 2 + panY;

                    const mouseX_relative_img_center = currentMidX - containerRect.left - imgCurrentCenterX;
                    const mouseY_relative_img_center = currentMidY - containerRect.top - imgCurrentCenterY;

                    panX = panX + mouseX_relative_img_center * (1 - zoomRatio);
                    panY = panY + mouseY_relative_img_center * (1 - zoomRatio);

                    currentZoom = newZoom;
                    initialPinchDistance = newDistance; // Update initial distance for next move event
                    updateZoomAndPan();
                }
            }
        });

        // Listen for touchend on the document for robustness
        document.addEventListener('touchend', (e) => {
            isDragging = false;
            initialPinchDistance = null; // Reset pinch state
            zoomedImageContainer.style.cursor = 'grab'; // Restore cursor
            // If all fingers are lifted, reset lastTouchX/Y to null for next gesture start
            if (e.touches.length === 0) {
                lastTouchX = null;
                lastTouchY = null;
            }
        });

        // Mouse wheel zoom - Corrected logic for zooming towards cursor
        zoomedImageContainer.addEventListener('wheel', (e) => {
            e.preventDefault(); // Prevent page scrolling
            const scaleAmount = 0.1;
            const containerRect = zoomedImageContainer.getBoundingClientRect();

            // Mouse position relative to the zoomedImageContainer's top-left corner
            const mouseClientX = e.clientX - containerRect.left;
            const mouseClientY = e.clientY - containerRect.top;

            let newZoom;
            if (e.deltaY < 0) { // Zoom in
                newZoom = currentZoom + scaleAmount;
            } else { // Zoom out
                newZoom = currentZoom - scaleAmount;
            }

            // Clamp newZoom to a reasonable range
            newZoom = Math.max(0.5, Math.min(newZoom, 5));

            if (newZoom !== currentZoom) {
                const scaleFactor = newZoom / currentZoom; // Ratio of new zoom to old zoom

                // Calculate where the mouse pointer is relative to the image's center, considering current pan and zoom
                // Image's center relative to container's top-left:
                const imgCurrentCenterX = containerRect.width / 2 + panX;
                const imgCurrentCenterY = containerRect.height / 2 + panY;

                // Mouse position relative to image's current center
                const mouseX_relative_img_center = mouseClientX - imgCurrentCenterX;
                const mouseY_relative_img_center = mouseClientY - imgCurrentCenterY;

                // Adjust pan to keep the point under the mouse fixed relative to the image center.
                // The new pan offset is the old pan offset scaled by the zoom factor change, plus the difference
                // in the mouse's relative position caused by the zoom change.
                panX = panX + mouseX_relative_img_center * (1 - scaleFactor);
                panY = panY + mouseY_relative_img_center * (1 - scaleFactor);

                currentZoom = newZoom; // Update currentZoom
                updateZoomAndPan();
            }
        });

    } else {
        console.error('Carousel elements not found. Zoom functionality disabled.');
    }
});
