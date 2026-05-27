document.addEventListener('DOMContentLoaded', () => {
    const contentSliders =
        document.querySelectorAll('.category__section');
    contentSliders.forEach((section) => {
        const slider =
            section.querySelector('.category__slider');
        const nextBtn =
            section.querySelector('.item-content__next');
        const prevBtn =
            section.querySelector('.item-content__prev');
        const pagination =
            section.querySelector('.item-content__pagination');
        const slidesLength = slider.children[0].children.length;
        let perSlides = 1;
        if (slidesLength < 2) {
            perSlides = 1;
        } else if (slidesLength >= 2 && slidesLength < 3) {
            perSlides = 2;
        } else if (slidesLength >= 3 && slidesLength < 6) {
            perSlides = 3;
        } else {
            perSlides = 6;
        }
        if (!slider) {
            return;
        }
        new Swiper(slider, {

            slidesPerView: 1,

            spaceBetween: 30,

            watchOverflow: true,

            breakpoints: {
                480: {
                    slidesPerView: 2,
                },

                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
                1340: {
                    slidesPerView: perSlides,
                },

            },

            pagination: {
                el: pagination,
                clickable: true,
            },

            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

        });

    });

});