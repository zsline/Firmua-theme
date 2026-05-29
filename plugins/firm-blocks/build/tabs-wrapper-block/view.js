/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/tabs-wrapper-block/view.js ***!
  \****************************************/
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.page__wrapper');
  const tabs = document.querySelectorAll('.wp-block-firm-blocks-tabs-wrapper-block .page__item');
  const isMobile = () => window.innerWidth < 746;
  const setHeight = content => {
    if (!wrapper || !content) return;
    if (isMobile()) {
      wrapper.style.height = 'auto';
    } else {
      wrapper.style.height = content.offsetHeight + 'px';
    }
  };
  const closeAll = () => {
    tabs.forEach(t => t.classList.remove('active'));
  };
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      if (!e.target.closest('.page__item--tab')) return;
      const content = tab.querySelector('.page__item--content');
      if (isMobile()) {
        const isActive = tab.classList.contains('active');
        closeAll();
        if (!isActive) {
          tab.classList.add('active');
        }
        setHeight(content);
        return;
      }
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      setHeight(content);
    });
  });
  const active = document.querySelector('.page__item.active');
  if (active) {
    setHeight(active.querySelector('.page__item--content'));
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map