const oops = document.getElementById('mobile-cta'),
    nav = document.querySelector('nav'),
    mobileBtnExit = document.getElementById('mobile-exit'),
    rpsBtn = document.getElementById('rps-button'),
    invoiceBtn = document.getElementById('invoice-button');

oops.addEventListener('click', () => {
    nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});

rpsBtn.addEventListener('click', () => {
    if (document.getElementById('rps-game').style.display !== 'block') {
        document.getElementById('rps-game').style.display = 'block';
    } else {
        document.getElementById('rps-game').style.display = 'none';
    }
});

invoiceBtn.addEventListener('click', () => {
    if (document.getElementById('invoice-app').style.display !== 'block') {
        document.getElementById('invoice-app').style.display = 'block';
    } else {
        document.getElementById('invoice-app').style.display = 'none';
    }
});