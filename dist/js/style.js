window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const hamburger_icon = document.querySelector('.hamburger-icon');

    hamburger_icon.addEventListener('click', function(){
        const overlay = document.querySelector('.overlay');
        if(overlay.classList.contains('show-overlay')){
            overlay.classList.add('hide-overlay');
            overlay.classList.remove('show-overlay');
        }
        else{
            overlay.classList.add('show-overlay');
            overlay.classList.remove('hide-overlay');
        }
        
        const mobile_nav = document.querySelector('.mobile-nav')
        mobile_nav.classList.toggle('show-mobile-nav');
        const bars = document.querySelector('.bars')
        bars.classList.toggle('transform-bars');
    });

});

