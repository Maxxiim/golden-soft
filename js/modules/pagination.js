const paginate = (products) => {
  let productCount = 12;
  let currentPage = 1;

  const catalogProductList = document.querySelector('.catalog-product__list');
  const btnPrevPagination = document.querySelector('.pagination__btn-arrow-left');
  const btnNextPagination = document.querySelector('.pagination__btn-arrow-right');

  const renderProducts = (products, container, numberOfProducts, page) => {
    container.innerHTML = "";
    const start = (page - 1) * numberOfProducts;
    const end = start + numberOfProducts;
    const productsOnPage = products.slice(start, end);

    productsOnPage.forEach((product) => {
      const li = document.createElement('li');
      li.classList.add('.catalog-carousel__list-item');
      li.innerHTML = `
      <a href="./product.html">
                  <div class="catalog-carousel__item-header">
                    <img class="catalog-carousel__item-header-img" src="${product.image}" alt="${product.name}">
                    <div class="catalog-carousel__item-header-block">
                      <div class="catalog-carousel__item-header-presence">
                        <div class="catalog-carousel__item-header-presence-box">
                        ${product.status.svg}
                        </div>
                        <span class="catalog-carousel__item-header-presence-text">${product.status.check}</span>
                      </div>
                      <div class="catalog-carousel__item-header-gift">
                        <svg class="catalog-carousel__item-header-gift-img" width="12" height="12" viewBox="0 0 12 12"
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
                        <p class="catalog-carousel__item-header-gift-text">Подарок</p>
                      </div>
                    </div>

                    <p class="catalog-carousel__item-header-sale">SALE</p>

                  </div>

                  <div class="catalog-carousel__list-item-descr">

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

                    <p class="catalog-carousel__list-item-descr-title">
                    ${product.name}
                    </p>
                    <p class="catalog-carousel__list-item-descr-price">
                      <span class="catalog-carousel__list-item-descr-price-new">${product.price.new}</span>
                      <span class="catalog-carousel__list-item-descr-price-old">${product.price.old}</span>
                    </p>
                  </div>
                </a>`

      container.append(li);
    });

    updateArrows();
  };


  const renderBtn = (page) => {
    const li = document.createElement("li");
    li.classList.add('pagination__list-item');
    li.textContent = page;

    if (currentPage === page) {
      li.classList.add("pagination__list-item__active");
    }

    li.addEventListener("click", () => {
      currentPage = page;
      renderProducts(products, catalogProductList, productCount, currentPage);
      renderPaginations(products, productCount, currentPage);
    });

    return li;
  };

  const renderDot = () => {
    const li = document.createElement("li");
    li.classList.add('pagination__list-item-dot');
    li.textContent = "...";
    return li;
  };

  const renderPaginations = (products, productCount, currentPage) => {
    const pageCount = Math.ceil(products.length / productCount);
    const ul = document.querySelector('.pagination__list');
    ul.innerHTML = '';

    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) {
        ul.append(renderBtn(i));
      }
    } else {
      ul.append(renderBtn(1));
      if (currentPage < 5) {
        for (let i = 2; i <= 5; i++) {
          ul.append(renderBtn(i));
        }
        ul.append(renderDot());
        ul.append(renderBtn(pageCount));
      } else if (currentPage > pageCount - 4) {
        ul.append(renderDot());
        for (let i = pageCount - 4; i <= pageCount; i++) {
          ul.append(renderBtn(i));
        }
      } else {
        ul.append(renderDot());
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          ul.append(renderBtn(i));
        }
        ul.append(renderDot());
        ul.append(renderBtn(pageCount));
      }
    }

    updateArrows();
  };

  const updateArrows = () => {
    const pageCount = Math.ceil(products.length / productCount);

    if (currentPage === 1) {
      btnPrevPagination.classList.remove("pagination__btn-arrow__active");
    } else {
      btnPrevPagination.classList.add("pagination__btn-arrow__active");
    }

    if (currentPage === pageCount) {
      btnNextPagination.classList.remove("pagination__btn-arrow__active");
    } else {
      btnNextPagination.classList.add("pagination__btn-arrow__active");
    }
  };

  const handlePaginationArrows = () => {
    updateArrows();

    btnNextPagination.addEventListener("click", () => {
      if (currentPage < Math.ceil(products.length / productCount)) {
        currentPage++;
        renderProducts(products, catalogProductList, productCount, currentPage);
        renderPaginations(products, productCount, currentPage);
        updateArrows();
      }
    });

    btnPrevPagination.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderProducts(products, catalogProductList, productCount, currentPage);
        renderPaginations(products, productCount, currentPage);
        updateArrows();
      }
    });
  };

  renderProducts(products, catalogProductList, productCount, currentPage);
  renderPaginations(products, productCount, currentPage);
  handlePaginationArrows();
};

export default paginate;
