document.addEventListener('DOMContentLoaded', () => {
	const sliders = document.querySelectorAll(
		'.wp-block-firm-blocks-social-slider-block .item-content__slider[data-items]'
	);
	sliders.forEach((slider) => {
		const items = (() => {
			try {

				const parsed = JSON.parse(
					slider.dataset.items || '[]'
				);

				return Array.isArray(parsed)
					? parsed
					: [];

			} catch (e) {

				return [];

			}
		})();
		const wrapper =
			slider.querySelector('.swiper-wrapper');
		if (!wrapper) {
			return;
		}
		items.forEach((it) => {
			const slide =
				document.createElement('div');
			slide.className =
				'item-content__slide social-item swiper-slide';
			slide.dataset.social =
				it.appellation || '';
			slide.innerHTML = `
				<div class="social-item__title">
					${it.icon ? `
						<img
							src="${it.icon}"
							alt="${it.name || ''}"
						>
					` : ''}
					${it.title ? `
						<h3 class="item-content__slide--title center">
							${it.title}
						</h3>
					` : ''}
				</div>
				<div class="social-item__link">
					${it.link ? `
						<a
							href="${it.link}"
							target="_blank"
							rel="noopener noreferrer"
						>
							${it.name || it.link}
						</a>
					` : ''}
				</div>
				<div class="social-item__content">
					${it.image ? `
						<picture>
							<img
								src="${it.image}"
								alt="${it.title || ''}"
							>
						</picture>
					` : ''}
					${it.description ? `
						<p class="item-content__slide--text">
							${it.description}
						</p>
					` : ''}
				</div>
			`;
			wrapper.appendChild(slide);


		});
		
    const container = slider.closest('.item-content') || slider.closest('.wp-block-firm-blocks-social-slider-block');
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
    })
	});
});