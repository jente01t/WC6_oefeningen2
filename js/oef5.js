console.log('script loaded');

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let letters = document.getElementById('letters');

for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    let div = document.createElement('div');
    div.classList.add('letter');
    div.id = letter
    div.innerHTML = letter

    letters.appendChild(div);
}