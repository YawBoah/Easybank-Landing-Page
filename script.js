 function toggleNavbar() {
        var navbarMain = document.querySelector('.navbar-main');
        var hamburgerIcon = document.querySelector('.hamburger-icon');
        var closeIcon = document.querySelector('.close-icon');

        if (navbarMain.style.display === 'none' || navbarMain.style.display === '') {
            // If navbar-main is hidden, show it and hide the hamburger icon
            navbarMain.style.display = 'flex';
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            // If navbar-main is visible, hide it and show the hamburger icon
            navbarMain.style.display = 'none';
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }

    // Wait for the DOM content to be fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        var navbarMain = document.querySelector('.navbar-main');
        var hamburgerIcon = document.querySelector('.hamburger-icon');
        var closeIcon = document.querySelector('.close-icon');

        // Initially hide the close icon
        closeIcon.style.display = 'none';

        // Check the initial screen width
        if (window.innerWidth <= 950) {
            // Initially hide navbar-main and show the hamburger icon
            navbarMain.style.display = 'none';
            hamburgerIcon.style.display = 'block';
        }
    });

    // Add a resize event listener to handle changes in screen width
    window.addEventListener('resize', function () {
        var navbarMain = document.querySelector('.navbar-main');
        var hamburgerIcon = document.querySelector('.hamburger-icon');
        var closeIcon = document.querySelector('.close-icon');

        // Check the screen width on resize
        if (window.innerWidth <= 950) {
            // If the screen width is less than or equal to 950px, hide navbar-main and show the hamburger icon
            navbarMain.style.display = 'none';
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            // If the screen width is greater than 950px, show navbar-main and hide the hamburger icon
            navbarMain.style.display = 'flex';
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        }
    });

