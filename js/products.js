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

    {
        id: "unique_id_013",
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
        id: "unique_id_014",
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
        id: "unique_id_015",
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
        id: "unique_id_016",
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
        id: "unique_id_017",
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
        id: "unique_id_018",
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
        id: "unique_id_019",
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
        id: "unique_id_020",
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
        id: "unique_id_021",
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
        id: "unique_id_022",
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
        id: "unique_id_023",
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
        id: "unique_id_024",
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

    ,

    {
        id: "unique_id_025",
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
        id: "unique_id_026",
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
        id: "unique_id_027",
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

    ,

    {
        id: "unique_id_028",
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
        id: "unique_id_029",
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
        id: "unique_id_030",
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

    ,

    {
        id: "unique_id_031",
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
        id: "unique_id_032",
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
        id: "unique_id_033",
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

    ,

    {
        id: "unique_id_034",
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
        id: "unique_id_035",
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
        id: "unique_id_036",
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

    ,

    {
        id: "unique_id_037",
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
        id: "unique_id_038",
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
        id: "unique_id_038",
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

    ,

    {
        id: "unique_id_039",
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
        id: "unique_id_040",
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
        id: "unique_id_024",
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

    ,

    {
        id: "unique_id_022",
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
        id: "unique_id_023",
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
        id: "unique_id_024",
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