console.log('script loaded');

function bgColor (kleur) {
    let body = document.querySelector('body');
    body.style.backgroundColor = kleur;
}

let btns = document.getElementsByClassName('color-btn');

for (let i = 0; i < btns.length; i++) {
    let kleur = btns[i].getAttribute('value');
    btns[i].style.backgroundColor = kleur;

    btns[i].addEventListener('click', function () {
        bgColor(kleur);
    });
}