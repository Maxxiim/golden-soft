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
showCurrentProduct();

// product slider

let position = 0;
let slidesToShow = 4;
let slidesToScroll = 4;

const productContainer = document.querySelector('.product-carousel');
const productList = document.querySelector('.product-carousel__list');
const productItem = document.querySelectorAll('.product-carousel__list-item');
const itemCount = productItem.length;
const itemWidth = productContainer.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;

const prevBtn = document.querySelector(".popular__arrow-left");
const nextBtn = document.querySelector(".popular__arrow-right");

productItem.forEach((el) => {
    el.style.minWindth = `${itemWidth}px`;
});

nextBtn.addEventListener('click', () => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow + itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft = itemWidth;
    setPosition();
    checkBtns();
});

prevBtn.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft = itemWidth;
    setPosition();
    checkBtns();
});


const setPosition = () => {
    productList.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    prevBtn.disabled = position === 0;
    nextBtn.disabled = position <= (itemCount - slidesToShow) * itemWidth;

    if (position === 0) {
        prevBtn.classList.add("popular__arrow__grey");
        prevBtn.classList.remove("popular__arrow-left");
    } else {
        prevBtn.classList.remove("popular__arrow__grey");
        prevBtn.classList.add("popular__arrow-left");
    }

    if (position <= -((itemCount - slidesToShow) * itemWidth)) {
        nextBtn.classList.remove("popular__arrow-right");
        nextBtn.classList.add("popular__arrow__grey");
    } else {
        nextBtn.classList.remove("popular__arrow__grey");
        nextBtn.classList.add("popular__arrow-right");
    }
};