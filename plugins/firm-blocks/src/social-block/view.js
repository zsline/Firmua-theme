document.addEventListener('DOMContentLoaded', () => {
	const sliders = document.querySelectorAll(
		'.wp-block-firm-blocks-social-block .item-content__social[data-items]'
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
			slider.querySelector('.social-wrapper');
		if (!wrapper) {
			return;
		}
		items.forEach((it) => {
			const slide =
				document.createElement('div');
			slide.className =
				'item-content__slide social-item';
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
			`;
			wrapper.appendChild(slide);
		});
	});
});