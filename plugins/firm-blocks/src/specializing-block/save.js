import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		title,
		description,
		items = [],
		imageUrl
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="item-content__specialty center">
				{title && (
					<h2>{title}</h2>
				)}
				<div className="item-content__specialty--wrapper">
					{description && (
						<p>{description}</p>
					)}
					<div className="item-content__specialty--inner">
						{items.map((item, index) => (
							<div
								key={index}
								className="item-content__specialty--item specialty-item"
							>
								<h3>{item.title}</h3>

								<div className="specialty-item__wrapper">
									<div className="specialty-item__number">
										{item.count}
									</div>
									<p>{item.description}</p>
								</div>
							</div>
						))}
					</div>

					{imageUrl && (
						<div className="item-content__specialty--image">
							<img
								src={imageUrl}
								alt=""
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}