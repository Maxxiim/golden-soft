// ==========================================================
// header modal-window nav 
const headerModal = document.querySelector('.header-modal');
const btnCatalog = document.querySelector('.header-nav__list-item-catalog');
const btnCatalogUnfold = document.querySelector(".header-nav__list-item-unfold")
const listItems = document.querySelectorAll('.header-modal__list-item');

btnCatalog.addEventListener('mouseenter', () => {
    headerModal.style.display = 'block';
    btnCatalogUnfold.classList.add('header-nav__list-item-unfold__active');
});

btnCatalog.addEventListener('mouseenter', () => {
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            listItems.forEach(innerItem => {
                innerItem.querySelector('p').classList.remove('header-modal__list-item-name__active');
                innerItem.querySelector('img').style.display = 'none'; // Скрываем изображение
            });

            const nameElement = item.querySelector('p');
            nameElement.classList.add('header-modal__list-item-name__active');

            const imageElement = item.querySelector('img');
            imageElement.style.display = 'block';
        });

    });
});

headerModal.addEventListener('mouseleave', () => {
    headerModal.style.display = 'none';
    btnCatalogUnfold.classList.remove('header-nav__list-item-unfold__active');
});

// ==========================================================
// sidebar show bLock-filters   category.html
const showBlocksSidebar = document.querySelectorAll('.catalog-sidebar__filters-item-block');
showBlocksSidebar.forEach(block => {

    block.addEventListener('click', () => {

        const blockSliderPrice = block.closest('.catalog-sidebar__filters-item').querySelector('.sidebar__filters-price-slider');
        const checkboxList = block.closest('.catalog-sidebar__filters-item').querySelector('.sidebar__checkbox-list');
        const unfoldSpan = block.querySelector('.catalog-sidebar__filters-item-unfold');

        if (blockSliderPrice) {
            if (blockSliderPrice.classList.contains('sidebar__filters-price-slider__active')) {
                blockSliderPrice.classList.remove('sidebar__filters-price-slider__active');
                unfoldSpan.classList.remove('catalog-sidebar__filters-item-unfold__active');
            } else {
                blockSliderPrice.classList.add('sidebar__filters-price-slider__active');
                unfoldSpan.classList.add('catalog-sidebar__filters-item-unfold__active');
            };
        };
        if (checkboxList) {
            if (checkboxList.classList.contains('sidebar__active')) {
                checkboxList.classList.remove('sidebar__active');
                unfoldSpan.classList.remove('catalog-sidebar__filters-item-unfold__active');
            } else {
                checkboxList.classList.add('sidebar__active');
                unfoldSpan.classList.add('catalog-sidebar__filters-item-unfold__active');
            };
        };
    });
});

// ==========================================================
// sidebar slider price
const rangeInput = document.querySelectorAll('.sidebar__filters-price-slider-range input');
const progress = document.querySelector('.sidebar__filters-price-slider-controller-progress');
const priceInput = document.querySelectorAll('.sidebar__filters-price-slider-field input');

let priceGap = 15000;

priceInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minRange = parseInt(priceInput[0].value);
        let maxRange = parseInt(priceInput[1].value);

        if ((maxRange - minRange >= priceGap) && maxRange <= 100000) {
            if (e.target.className === 'sidebar__filters-price-slider-field-min') {
                rangeInput[0].value = minRange;
                progress.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxRange;
                progress.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
            }
        }
    })
});

rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
        let minRange = parseInt(rangeInput[0].value);
        let maxRange = parseInt(rangeInput[1].value);

        if (maxRange - minRange < priceGap) {
            if (e.target.id === 'minInput') {
                rangeInput[0].value = maxRange - priceGap;
            } else {
                rangeInput[1].value = minRange + priceGap;
            }
        } else {
            priceInput[0].value = minRange;
            priceInput[1].value = maxRange;
            progress.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
        }
    })
});

// ==========================================================
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

// ==========================================================
// catalog field Dropdown modal 
const fieldDropdown = document.getElementById('fieldDropdown');
const modalItems = document.querySelectorAll('.catalog-product__dropdown-modal-list-item');

function unfoldModalDropdown() {
    const unfoldArrow = document.querySelector('.catalog-product__block-dropdown-unfold');
    const modalDropdown = document.getElementById('modalDropdown');

    if (fieldDropdown) {
        modalDropdown.classList.toggle('catalog-product__dropdown-modal__active');
        unfoldArrow.classList.toggle('catalog-product__block-dropdown-unfold__active')
    } else return;
};

fieldDropdown.addEventListener('click', unfoldModalDropdown);