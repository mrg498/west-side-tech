window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const hamburger_icon = document.querySelector('.hamburger-icon');

    hamburger_icon.addEventListener('click', function(){
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('show-overlay');
        overlay.classList.toggle('hide-overlay');
        const mobile_nav = document.querySelector('.mobile-nav')
        mobile_nav.classList.toggle('show-mobile-nav');
        const bars = document.querySelector('.bars')
        bars.classList.toggle('transform-bars');
    });

});

