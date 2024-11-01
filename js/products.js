const products = [
    {
        id: "unique_id_001",
        name: "Вариативный замок Golden Soft для отеля",
        image: "./assets/images/popular/forhotel2.png",
        status: {
            check: 'Нет в наличии',
            svg: `<svg class="product-carousel__item-header-presence-absent" width="10" height="10"
                   viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 7000,
            old: 8000,
        },

        link: "#",
    },

    {
        id: "unique_id_002",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_003",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice2.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_004",
        name: "Вариативный замок Golden Soft для отеля",
        image: "./assets/images/popular/forhotel2.png",
        status: {
            check: 'Нет в наличии',
            svg: `<svg class="product-carousel__item-header-presence-absent" width="10" height="10"
                            viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 7000,
            old: 8000,
        },

        link: "#",
    },

    {
        id: "unique_id_005",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_006",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice2.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_007",
        name: "Вариативный замок Golden Soft для отеля",
        image: "./assets/images/popular/forhotel2.png",
        status: {
            check: 'Нет в наличии',
            svg: `<svg class="product-carousel__item-header-presence-absent" width="10" height="10"
                   viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 7000,
            old: 8000,
        },

        link: "#",
    },

    {
        id: "unique_id_008",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_009",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice2.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_010",
        name: "Вариативный замок Golden Soft для отеля",
        image: "./assets/images/popular/forhotel2.png",
        status: {
            check: 'Нет в наличии',
            svg: `<svg class="product-carousel__item-header-presence-absent" width="10" height="10"
                   viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 7000,
            old: 8000,
        },

        link: "#",
    },

    {
        id: "unique_id_011",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },

    {
        id: "unique_id_012",
        name: "Дверной Замок Golden Soft для офиса",
        image: "./assets/images/popular/foroffice2.png",
        status: {
            check: 'Есть в наличии',
            svg: `<svg class="product-carousel__item-header-presence-box-img" width="10" height="8"
                viewBox="0 0 10 8" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L4 7L9 1" stroke="" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`
        },
        gift: "Подарок",
        sale: "true",

        reviews: {
            count: 12,
            stars: 3,
            total_stars: 5
        },

        price: {
            new: 33000,
            old: 39000,
        },

        link: "#",
    },
];

export default products