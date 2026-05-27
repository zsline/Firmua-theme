import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';
export default function save({ attributes }) {
	const { items = [] } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="page__wrapper box-items col-2">
				{items.map((item, index) => (
					<a
						href={item.link || '#'}
						className="page__item box-item"
						key={index}
					>
						<div className="box-item__title">
							<RichText.Content
								tagName="div"
								value={item.title}
							/>
						</div>
						<div className="box-item__tabs">
							<p>
								{item.description}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}