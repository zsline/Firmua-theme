/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/hero-home/view.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sentenceCase: () => (/* binding */ sentenceCase)
/* harmony export */ });
const modal = document.querySelector('.home-modal');
const modalBoxes = document.querySelectorAll('.box-item');
const modalInner = document.querySelector('.home-modal__inner');
const modalClose = document.querySelector('.home-modal__close');
const modalContent = document.querySelector('.home-modal__content');
if (modal) {
  modalBoxes.forEach(el => {
    el.addEventListener('click', e => {
      modal.classList.add('open');
      if (e.target.tagName == 'LI') {
        createCatList(el, e);
      } else {
        createList(el);
      }
    });
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  });
}
function createCatList(el, e) {
  modalInner.innerHTML = '';
  modalContent.querySelectorAll('.box-item__list').forEach(el => {
    el.remove();
  });
  const currentLi = e.target.closest('li');
  const title = currentLi.dataset.title;
  const div = document.createElement('div');
  div.className = 'home-modal__inner--title';
  div.textContent = sentenceCase(title);
  modalInner.appendChild(div);
  const list = currentLi.querySelector('.box-item__list');
  if (list) {
    modalContent.appendChild(list.cloneNode(true));
  }
}
function createList(el) {
  modalInner.innerHTML = '';
  modalContent.querySelectorAll('.box-item__list').forEach(el => {
    el.remove();
  });
  const listTitles = el.querySelectorAll('li');
  listTitles.forEach(title => {
    const servicesList = title.querySelector('.box-item__list');
    let html = '';
    if (title.querySelector('.box-item__list')) {
      html = `
            <div class="home-modal__inner--item">
                <div class="home-modal__inner--title">
                ${title.innerText}
                </div>
                ${servicesList.innerHTML}
            </div>
            `;
    }
    modalInner.insertAdjacentHTML('beforeend', html);
  });
}
document.body.addEventListener('click', e => {
  const element = e.target.closest('[data-contact]');
  const contactsModal = document.querySelector('.modal-contacts');
  if (element) {
    if (contactsModal) {
      contactsModal.classList.add('open');
    }
  }
  if (e.target.classList.contains('modal-contacts__close')) {
    contactsModal.classList.remove('open');
    console.log('close');
  }
});
function sentenceCase(str) {
  return str.toLowerCase().split(' ').map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ');
}
/******/ })()
;
//# sourceMappingURL=view.js.map