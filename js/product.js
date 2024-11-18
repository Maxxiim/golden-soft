const productMainImage = document.querySelector('.product-slider__main');
const productThumbnailsImages = document.querySelectorAll('.product-slider__thumbnails-list-item img');
productThumbnailsImages.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const newSrc = thumbnail.src.replace('thumbnails', 'main');
        console.log(newSrc)

        productMainImage.src = newSrc;

        productThumbnailsImages.forEach((item) => item.parent.classList.remove('product-slider__main-img__active'));

        thumbnail.parentNode.classList.add('product-slider__main-img__active')
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
        }
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
        }

        if (e.target.innerText === 'Описание') {
            blockDescr.classList.add('product-details__content-descr__active');
            blockCharacteristic.classList.remove('product-details__content-characteristics__active');
            blockReviews.classList.remove('product-details__content-reviews__active');
        }

        if (e.target.innerText === 'Отзывы') {
            blockReviews.classList.add('product-details__content-reviews__active');
            blockDescr.classList.remove('product-details__content-descr__active');
            blockCharacteristic.classList.remove('product-details__content-characteristics__active');
        }

    })
})