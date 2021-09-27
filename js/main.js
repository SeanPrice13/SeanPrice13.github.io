const oops = document.getElementById('mobile-cta'),
    nav = document.querySelector('nav'),
    mobileBtnExit = document.getElementById('mobile-exit');

oops.addEventListener('click', () => {
    nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});