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