const paginate = (products) => {
    // console.log("products", products);

    let productCount = 6;
    let currentPage = 1;

    const catalogProductList = document.querySelector('.catalog-product__list');
    const pagination = document.querySelector(".pagination");
    const btnPrevPagination = document.querySelector('.pagination__btn-prev')
    const btnNextPagination = document.querySelector('.pagination__btn-next')

    const renderProducts = (products, container, numberOfProducts, page) => {
        catalogProductList.innerHTML = "";
        const firstProductIndex = numberOfProducts * page - numberOfProducts;
        const lastProductIndex = firstProductIndex + numberOfProducts;
        const productsOnPage = products.slice(firstProductIndex, lastProductIndex);
        console.log(productsOnPage)
        productsOnPage.forEach((name, image, status, prices,) => {
            const li = document.createElement('li');
            console.log(li)
            li.classList.add('product-carousel__list-item', 'catalog-product__list-item')
            li.innerHTML = `
                <a href="#">

                  <div class="product-carousel__item-header catalog-carousel__item-header">
                    <img class="product-carousel__item-header-img" src="./assets/images/popular/${image}"
                      alt="замок golden soft дверной для отеля">
                    <div class="product-carousel__item-header-block">
                      <div class="product-carousel__item-header-presence">
                        <div class="product-carousel__item-header-presence-box">
                          <svg class="product-carousel__item-header-presence-absent" width="10" height="10"
                            viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>

                        </div>
                        <span class="product-carousel__item-header-presence-text">Нет в наличии</span>
                      </div>
                      <div class="product-carousel__item-header-gift">
                        <svg class="product-carousel__item-header-gift-img" width="12" height="12" viewBox="0 0 12 12"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_21745_3811)">
                            <path
                              d="M11 4.5H1.00001C0.862008 4.5 0.75 4.61201 0.75 4.75001V11.75C0.75 11.888 0.862008 12 1.00001 12H11C11.138 12 11.25 11.888 11.25 11.75V4.75001C11.25 4.61201 11.138 4.5 11 4.5ZM10.75 11.5H1.24999V4.99999H10.75V11.5H10.75Z"
                              fill="" />
                            <path
                              d="M11.5 2.5H0.500008C0.362008 2.5 0.25 2.61201 0.25 2.75001V4.75C0.25 4.888 0.362008 5.00001 0.500008 5.00001H11.5C11.638 5.00001 11.75 4.888 11.75 4.75V2.75001C11.75 2.61198 11.638 2.5 11.5 2.5ZM11.25 4.5H0.750016V2.99999H11.25V4.5Z"
                              fill="" />
                            <path
                              d="M6.00001 2.5C5.86201 2.5 5.75 2.61201 5.75 2.75001V11.75C5.75 11.888 5.86201 12 6.00001 12C6.13801 12 6.25002 11.888 6.25002 11.75V2.75001C6.25002 2.61198 6.13801 2.5 6.00001 2.5Z"
                              fill="" />
                            <path
                              d="M6.2555 2.691C5.99851 1.48549 4.4655 0.192 3.444 0.0190078C3.381 0.00649219 3.3165 0 3.25001 0C2.6985 0 2.25 0.4485 2.25 1.00001C2.25 1.23052 2.33051 1.45552 2.4765 1.63402C2.47849 1.63552 2.47999 1.63802 2.48149 1.64002C3.22399 2.58851 5.69551 2.95202 5.9765 2.99051C5.98801 2.99201 5.99949 2.99302 6.01051 2.99302C6.08 2.99302 6.146 2.96452 6.194 2.91302C6.2495 2.85349 6.27252 2.7705 6.2555 2.691ZM2.86849 1.32251C2.86399 1.31602 2.859 1.31051 2.85399 1.305C2.78599 1.21751 2.74999 1.11199 2.74999 1.00001C2.74999 0.724008 2.9745 0.500016 3.24999 0.500016C3.28299 0.500016 3.31549 0.503508 3.35398 0.510516C4.10349 0.637523 5.23498 1.54451 5.64148 2.42951C4.77101 2.26901 3.3015 1.8945 2.86849 1.32251Z"
                              fill="" />
                            <path
                              d="M8.74973 0C8.68324 0 8.61874 0.00649219 8.56273 0.0175078C7.53474 0.192 6.00174 1.48549 5.74475 2.691C5.72776 2.7705 5.75075 2.85349 5.80625 2.913C5.85376 2.964 5.92025 2.99299 5.98925 2.99299C6.00024 2.99299 6.01175 2.99198 6.02274 2.991C6.30373 2.95249 8.77523 2.589 9.51773 1.64051C9.51973 1.63852 9.52122 1.63601 9.52324 1.63402C9.66923 1.45549 9.74974 1.23049 9.74974 1.00001C9.74974 0.4485 9.30124 0 8.74973 0ZM9.14573 1.30549C9.14074 1.311 9.13573 1.31648 9.13123 1.323C8.69873 1.89401 7.22923 2.2695 6.35822 2.43C6.76521 1.54399 7.89722 0.6375 8.65273 0.509508C8.68423 0.503508 8.71673 0.500016 8.74973 0.500016C9.02524 0.500016 9.24973 0.724008 9.24973 1.00001C9.24975 1.11199 9.21375 1.21699 9.14573 1.30549Z"
                              fill="" />
                          </g>
                          <defs>
                            <clipPath id="clip0_21745_3811">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p class="product-carousel__item-header-gift-text">Подарок</p>
                      </div>
                    </div>

                    <p class="product-carousel__item-header-sale">SALE</p>

                  </div>

                  <div class="product-carousel__list-item-descr catalog-carousel__list-item-descr">

                    <div class="reviews">
                      <div class="reviews__stars">
                        <span class="reviews__stars-star reviews__stars-star__active"></span>
                        <span class="reviews__stars-star reviews__stars-star__active"></span>
                        <span class="reviews__stars-star reviews__stars-star__active"></span>
                        <span class="reviews__stars-star"></span>
                        <span class="reviews__stars-star"></span>
                      </div>
                      <span class="reviews__count">(12) отзывов</span>
                    </div>

                    <p class="product-carousel__list-item-descr-title">
                      Вариативный замок Golden Soft для отеля
                    </p>
                    <p class="product-carousel__list-item-descr-price">
                      <span class="product-carousel__list-item-descr-price-new">7 000₽</span>
                      <span class="product-carousel__list-item-descr-price-old">8 000₽</span>
                    </p>
                  </div>
                </a>
            `,
                container.append(li)
        })
    };




    renderProducts(products, catalogProductList, productCount, currentPage);
};


export default paginate