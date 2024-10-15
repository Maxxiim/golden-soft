const cards = document.querySelectorAll('.product-list__item');
const btnLeft = document.querySelector('.controls__arrow-left');
const btnRight = document.querySelector('.controls__arrow-right');
const dots = document.querySelectorAll(".controls__dots-item");
let currentIndex = 1;

function showCurrentProduct() {
    dots.forEach((el) => el.classList.remove('controls__dots-item-active'));
    cards.forEach((el) => { el.classList.remove("product-list__item-active") });
    cards[currentIndex].classList.add("product-list__item-active");
    dots[currentIndex].classList.add('controls__dots-item-active')
}

function showNextProduct() {
    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    };
    showCurrentProduct();
};

function showPrevProduct() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    };
    showCurrentProduct();
};
btnLeft.addEventListener('click', showPrevProduct);
btnRight.addEventListener('click', showNextProduct);