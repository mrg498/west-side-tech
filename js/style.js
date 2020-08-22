window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const hamburger_icon = document.querySelector('.hamburger-icon');

    hamburger_icon.addEventListener('click', function(){
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('show-overlay');
    });

});

