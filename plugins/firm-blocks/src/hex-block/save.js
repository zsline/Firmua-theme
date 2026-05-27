import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { heading, imageUrl, imageAlt, items } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="item-directions-block">
				<RichText.Content
					tagName="h2"
					className="center"
					value={heading}
				/>

				<div className="item-directions-block__wrapper">
					<div className="item-directions-block__img">
						{imageUrl && (
							<img src={imageUrl} alt={imageAlt} />
						)}
					</div>

					<div className="item-directions-block__hex-inner">
						{items.map((item, index) => (
							<div
								className="item-directions-block__hex-wrapper"
								key={index}
							>
								<div className="item-directions-block__hex">
									<div className="item-directions-block__hex--container">
										<RichText.Content
											tagName="h3"
											value={item.title}
										/>

										<ul>
											{item.list.map((listItem, listIndex) => (
												<li key={listIndex}>
													<RichText.Content
														tagName="span"
														value={listItem}
													/>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}