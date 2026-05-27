export function postCardModal() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.post-card__btn');
        if (!btn) return;
        const card = btn.closest('.post-card');
        const modal = document.querySelector('.post-modal-global');
        if (!modal || !card) return;
        addContent(modal, card);
        modalTabs(modal);
        modal.classList.add('is-open');
    });
    document.addEventListener('click', (e) => {
        const close = e.target.closest('.post-modal__close');
        if (!close) return;

        const modal = close.closest('.post-modal-global');

        modal.classList.remove('is-open');
        removeContent(modal);
    });
}
function addContent(modal, card) {
    const content = card.querySelector('.post-modal');
    const body = modal.querySelector('[data-modal-body]');
    body.innerHTML = content.innerHTML;
}
function removeContent(modal) {
    const body = modal.querySelector('[data-modal-body]');
    body.innerHTML = '';
}

function modalTabs(modal) {
    const tabs = modal.querySelectorAll('.page__item');
    if (!tabs.length) return;
    tabs.forEach((tab) => {
        const button = tab.querySelector('.page__item--tab');
        if (!button) return;
        button.addEventListener('click', () => {
            tabs.forEach((item) => {
                item.classList.remove('active');
            });
            tab.classList.add('active');
        });
    });
    tabs[0].classList.add('active');
}

