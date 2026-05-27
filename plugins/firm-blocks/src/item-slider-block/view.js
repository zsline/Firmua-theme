document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.wp-block-firm-blocks-item-slider-block .item-content__slider[data-items]');
  sliders.forEach( slider => {
  if (!slider) return;
    const items = (() => {
      try {
        return JSON.parse(slider.dataset.items || '[]');
      } catch (e) {
        return [];
      }
    })();
    const wrapper = slider.querySelector('.swiper-wrapper');
    if (!wrapper) return;
  items.forEach(it => {
      const slide = document.createElement('div');
      slide.className = 'item-content__slide swiper-slide';
      const titleHtml = it.title ? `<h3 class="item-content__slide--title center">${it.title}</h3>` : '';
      slide.innerHTML = `
        <div class="item-content__slide--img">
          <img src="${it.imageUrl || ''}" alt="${(it.title||'')}" />
        </div>
        ${titleHtml}
        <p class="item-content__slide--text">${it.description || ''}</p>
      `;
      wrapper.appendChild(slide);
    });

    const container = slider.closest('.item-content') || slider.closest('.wp-block-firm-blocks-item-slider-block');
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