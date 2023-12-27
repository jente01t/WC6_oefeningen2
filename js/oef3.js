console.log('script loaded');

let btn = document.getElementById('btn1');
let div = document.getElementById('container');

btn.addEventListener('click', function () {
    console.log('Yes! Het werkt');
    let p = document.createElement('p');
    let txt = document.createTextNode('Yes! Het werkt');
    p.appendChild(txt);
    div.appendChild(p);
});