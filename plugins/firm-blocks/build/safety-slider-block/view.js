/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/safety-slider-block/view.js ***!
  \*****************************************/
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.wp-block-firm-blocks-safety-slider-block .item-content__slider[data-items]');
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
    if (it.imageUrl) {
      const imgWrap = document.createElement('div');
      imgWrap.className = 'item-content__slide--img';
      const img = document.createElement('img');
      img.src = it.imageUrl;
      img.alt = it.title || '';
      imgWrap.appendChild(img);
      slide.appendChild(imgWrap);
    }
    const top = it.topcolor || it.color || '#1f94ff';
    const bottom = it.bottomcolor || '#ffdb5c';
    const line = document.createElement('div');
    line.className = 'item-content__slide--line';
    line.style.background = `linear-gradient(0deg, ${bottom} 50%, ${top} 50%)`;
    slide.appendChild(line);
    if (it.title) {
      const h3 = document.createElement('h3');
      h3.className = 'item-content__slide--title center';
      h3.textContent = it.title;
      slide.appendChild(h3);
    }
    const p = document.createElement('p');
    p.className = 'item-content__slide--text';
    p.textContent = it.description || '';
    slide.appendChild(p);
    wrapper.appendChild(slide);
    const container = slider.closest('.item-content') || slider.closest('.wp-block-firm-blocks-safety-slider-block');
    const nextBtn = container.querySelector('.item-content__next');
    const prevBtn = container.querySelector('.item-content__prev');
    const pagination = container.querySelector('.item-content__pagination');
    let spaceBetween = null;
    if (container.classList.contains('social-content')) {
      spaceBetween = 30;
    } else {
      spaceBetween = 52;
    }
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: spaceBetween,
      watchOverflow: true,
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      pagination: {
        el: pagination,
        clickable: true
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map