export function sliders() {
    const contentSliders = document.querySelectorAll('.item-content__slider');
    

    contentSliders.forEach(slider => {
        const container = slider.closest('.item-content') || slider.closest('.wp-block-firm-blocks-wrapper-full-block');
        const nextBtn = container.querySelector('.item-content__next');
        const prevBtn = container.querySelector('.item-content__prev');
        const pagination = container.querySelector('.item-content__pagination');
            let spaceBetween = null;
            if(container.classList.contains('social-content')){
                spaceBetween = 30;
            } else{
                spaceBetween = 52;
            }
        new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: spaceBetween,
            watchOverflow: true,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    },
              pagination: {
                el: pagination,
                clickable: true
            },
              navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
        }

        )
    })

    
}

