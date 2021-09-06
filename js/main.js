const oops = document.getElementById('mobile-cta'),
    nav = document.querySelector('nav'),
    mobileBtnExit = document.getElementById('mobile-exit'),
    rpsBtn = document.getElementById('rps-button');

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

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "105564381866924");
chatbox.setAttribute("attribution", "install_email");
chatbox.setAttribute("attribution_version", "biz_inbox");

window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v11.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));