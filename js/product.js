// ================================================================
// header-modal index.html
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

// ================================================================
// product slider section
const mainImage = document.querySelector('.product-slider__main-img');
const thumbnails = document.querySelectorAll('.product-slider__thumbnails-list-item');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        thumbnails.forEach(t => t.classList.remove('product-slider__main-img__active'));

        this.classList.add('product-slider__main-img__active');

        const thumbnailImage = this.querySelector('img');
        mainImage.src = thumbnailImage.src;
    });
});

// ================================================================
const fieldPackageModal = document.querySelector('.product-info__options-package-content');
const packageModalUnfoldIcon = document.querySelector('.product-info__options-package-content-unfold');
const packageModal = document.querySelector('.package-modal');
const packageModalItems = document.querySelectorAll('.package-modal__list-item');

function showPackageModal() {
    if (fieldPackageModal) {
        packageModalUnfoldIcon.classList.toggle('product-info__options-package-unfold__active');
        packageModal.classList.toggle('package-modal__active')
    }
};

function closePackageModal(e) {
    if (!packageModal.contains(e.target) && !fieldPackageModal.contains(e.target)) {
        packageModalUnfoldIcon.classList.remove('product-info__options-package-unfold__active');
        packageModal.classList.remove('package-modal__active');
    }
}

packageModalItems.forEach((text) => {
    text.addEventListener('click', () => {
        document.querySelector('.product-info__options-package-content-text').innerText = text.innerText;
        packageModalUnfoldIcon.classList.remove('product-info__options-package-unfold__active');
        packageModal.classList.remove('package-modal__active');
    })
})

document.addEventListener('click', closePackageModal)
fieldPackageModal.addEventListener('click', showPackageModal);

// ================================================================
// Colors Selections

const colorSelection = document.querySelectorAll('.product-info__colors-list-box');
const colorWhite = document.getElementById('color-white');
const colorBlack = document.getElementById('color-black');
const colorYellow = document.getElementById('color-yellow');

colorSelection.forEach((color) => {
    color.addEventListener('click', (e) => {
        if (colorWhite.contains(e.target)) {
            colorSelection.forEach((color) => {
                color.classList.remove('product-info__colors-list-box__active');
                color.classList.remove('product-info__colors-list-box-black__active');
                color.classList.remove('product-info__colors-list-box-yellow__active');
            });
            color.classList.add('product-info__colors-list-box__active');
        } else if (colorBlack.contains(e.target)) {
            colorSelection.forEach((color) => {
                color.classList.remove('product-info__colors-list-box__active');
                color.classList.remove('product-info__colors-list-box-yellow__active');
            });
            color.classList.add('product-info__colors-list-box-black__active');
            color.classList.add('product-info__colors-list-box__active');
        } else if (colorYellow.contains(e.target)) {
            colorSelection.forEach((color) => {
                color.classList.remove('product-info__colors-list-box__active');
                color.classList.remove('product-info__colors-list-box-black__active');
            });
            color.classList.add('product-info__colors-list-box-yellow__active');
            color.classList.add('product-info__colors-list-box__active');
        };
    });
});

// ================================================================
// Services sections
const serviceItems = document.querySelectorAll('.product-info__services-list-item');
serviceItems.forEach((item) => {
    const title = item.querySelector('.product-info__services-list-item-title');
    const description = item.querySelector('.product-info__services-list-item-descr');
    const iconUnfold = item.querySelector('.product-info__services-list-item-unfold');
    title.addEventListener('click', () => {
        description.classList.toggle('product-info__services-list-item-descr__active');
        iconUnfold.classList.toggle('product-info__services-list-item-unfold__active');
    });
});

// ================================================================
// details section

const detailsItem = document.querySelectorAll('.product-details__list-item');
const blockCharacteristic = document.querySelector('.product-details__content-characteristics');
const blockDescr = document.querySelector('.product-details__content-descr')
const blockReviews = document.querySelector('.product-details__content-reviews');

detailsItem.forEach((item) => {
    item.addEventListener('click', (e) => {

        detailsItem.forEach((el) => el.classList.remove('product-details__list-item__active'));

        item.classList.add('product-details__list-item__active');


        if (e.target.innerText === 'Характеристики') {
            blockCharacteristic.classList.add('product-details__content-characteristics__active');
            blockDescr.classList.remove('product-details__content-descr__active');
            blockReviews.classList.remove('product-details__content-reviews__active');
        };

        if (e.target.innerText === 'Описание') {
            blockDescr.classList.add('product-details__content-descr__active');
            blockCharacteristic.classList.remove('product-details__content-characteristics__active');
            blockReviews.classList.remove('product-details__content-reviews__active');
        };

        if (e.target.innerText === 'Отзывы') {
            blockReviews.classList.add('product-details__content-reviews__active');
            blockDescr.classList.remove('product-details__content-descr__active');
            blockCharacteristic.classList.remove('product-details__content-characteristics__active');
        };

    });
});

// ====================================================================================
// product slider index.html
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