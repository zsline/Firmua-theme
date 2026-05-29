document.addEventListener('DOMContentLoaded', () => {
    const contentSliders =
        document.querySelectorAll('.wp-block-firm-blocks-services-variants-block');
    contentSliders.forEach((section) => {
        const slider =
            section.querySelector('.services-variants-block');
        const nextBtn =
            section.querySelector('.item-content__next');
        const prevBtn =
            section.querySelector('.item-content__prev');
        const pagination =
            section.querySelector('.item-content__pagination');
        new Swiper(slider, {
            slidesPerView: 1,
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
                    slidesPerView: 3,
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