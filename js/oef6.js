let slider = document.getElementById('slider');
let waarde = document.getElementById('waarde');

waarde.textContent = slider.value;

slider.addEventListener('input', function () {
    waarde.textContent = slider.value;
})