document.addEventListener('DOMContentLoaded', () => {
  const faqBlocks = document.querySelectorAll('.faq');

  faqBlocks.forEach((faq) => {
    const items = faq.querySelectorAll('.faq__item');

    items.forEach((item) => {
      const button = item.querySelector('.faq__head');
      const body = item.querySelector('.faq__body');

      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // закрываем все
        items.forEach((el) => {
          el.classList.remove('active');
          el.querySelector('.faq__body').style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  });
});