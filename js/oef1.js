console.log('Script loaded')

// let titel = document.getElementById('titel2');
let titel = document.querySelector('#titel2');
console.log(titel);

// let paragrafen = document.getElementsByTagName('p');
let paragrafen = document.querySelectorAll('p');
for (let i = 0; i < paragrafen.length; i++) {
    console.log(paragrafen[i]);
}

// let speciaal = document.getElementsByClassName('speciaal');
let speciaal = document.querySelectorAll('.speciaal');
console.log(speciaal[0]);