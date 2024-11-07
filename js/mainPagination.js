import products from "./products";

import paginate from "./modules/pagination";

window.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.catalog-product__list');

    paginate(products)
})
