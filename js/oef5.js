console.log('scipt loaded');

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let letters = document.getElementById('letters');
let output = document.getElementById('output');

let chosen = output.innerHTML;

for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    let div = document.createElement('div');
    div.classList.add('letter');
    div.id = letter
    letters.appendChild(div);
    div.innerHTML = letter;

    div.addEventListener('click', function () {
        output.innerHTML = chosen += ' ' + letter
        div.classList.add('done');
    })
}