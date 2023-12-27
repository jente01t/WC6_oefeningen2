console.log('script loaded')

function wijzig1 () {
    let pizza = document.getElementById('two');
    pizza.textContent = 'Lasagne';
    pizza.style.border = "1px solid red";
}

function wijzig2 () {
    let hot = document.getElementsByClassName("hot");
    hot[0].className = 'cold';
}

wijzig1();
wijzig2();