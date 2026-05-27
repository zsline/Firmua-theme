/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./src/details-slider-block/view.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', () => {
  console.log('Details Slider Block');
  const sliders = document.querySelectorAll('.wp-block-firm-blocks-details-slider-block .item-content__slider');
  sliders.forEach(slider => {
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
      // ====== Render List ======
      const listHtml = (it.list || []).map((list, listIndex, arr) => {
        const itemsHtml = (list.items || []).map(item => {
          const tooltip = item.hasTooltip ? `<span class="tooltip">${item.tooltip}</span>` : '';
          return `
          <li>
            ${item.text}
            ${tooltip}
          </li>
        `;
        }).join('');
        return `
        <div class="details__list">
          ${list.title ? `<h4 class="
              item-content__card--title
              ${listIndex === arr.length - 1 ? 'item-content__card--mintitle' : ''}
            ">
              ${list.title}
            </h4>` : ''}
          <ul>
            ${itemsHtml}
          </ul>
        </div>
      `;
      }).join('');
      // ============================
      const slide = document.createElement('div');
      slide.className = 'item-content__slide item-content__card swiper-slide slide';
      const titleHtml = it.title ? `<h3 class="item-content__slide--title center">${it.title}</h3>` : '';
      slide.innerHTML = `
         ${titleHtml}
        <div class="slide__body">
          ${listHtml}
        <div class="details__price">
          <span>${it.priceBefore}</span> ${it.price}
        </div>
        </div>
        <div class="post-modal slide__modal" hidden>
            <div class="post-card__wrapper">
                <div class="post-card__content">
                    ... Content Modal ('extraList', 'table', 'button') ...
                </div>
            </div>
        </div>
      `;
      wrapper.appendChild(slide);
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map