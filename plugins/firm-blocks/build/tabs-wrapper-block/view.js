/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/tabs-wrapper-block/view.js ***!
  \****************************************/
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.page__wrapper');
  const tabs = document.querySelectorAll('.wp-block-firm-blocks-tabs-wrapper-block .page__item');
  const updateWrapperHeight = content => {
    wrapper.style.height = content.offsetHeight + 'px';
  };
  tabs.forEach(tab => {
    if (window.innerWidth < 746) {
      tab.classList.remove('active');
    }
    tab.addEventListener('click', e => {
      if (!e.target.classList.contains('page__item--tab')) return;
      const content = tab.querySelector('.page__item--content');
      tabs.forEach(el => {
        el.classList.remove('active');
      });
      tab.classList.add('active');
      updateWrapperHeight(content);
    });
  });

  // стартовая высота
  const activeTab = document.querySelector('.page__item.active');
  if (activeTab) {
    const activeContent = activeTab.querySelector('.page__item--content');
    updateWrapperHeight(activeContent);
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map