const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.ponto');
const Numerosindicadores = document.querySelector('.Numeros');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {

    document.querySelector('.item.ativo').classList.remove('ativo');
    document.querySelector('.ponto.ativo').classList.remove('ativo');

    if (direction > 0) {
        active = active + 1;

        if (active === total) {
            active = 0;
        }
    }


    else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1;
        }
    }

    items[active].classList.add('ativo');
    dots[active].classList.add('ativo');

    Numerosindicadores.textContent = String(active + 1).padStart(2, '0')

}

clearInterval(timer);
timer = setInterval(() => {
    update(1);
}, 3000);


prevButton.addEventListener('click', () => {
    update(-1);
})

nextButton.addEventListener('click', () => {
    update(1);
})
