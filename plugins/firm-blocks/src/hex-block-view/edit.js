import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';

import { Button} from '@wordpress/components';


export default function Edit({ attributes, setAttributes }) {
	const {
		heading,
		imageUrl,
		imageAlt,
		items,
	} = attributes;

	const updateItemTitle = (value, index) => {
		const newItems = [...items];
		newItems[index].title = value;

		setAttributes({ items: newItems });
	};

	const updateListItem = (value, itemIndex, listIndex) => {
		const newItems = [...items];
		newItems[itemIndex].list[listIndex] = value;

		setAttributes({ items: newItems });
	};
	return (
		<div {...useBlockProps()}>
			<div className="item-directions-block">
				<RichText
					tagName="h2"
					className="center"
					value={heading}
					onChange={(value) => setAttributes({ heading: value })}
					placeholder="Заголовок"
				/>
				<div className="item-directions-block__wrapper">
					<div className="item-directions-block__img">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										imageUrl: media.url,
										imageAlt: media.alt,
									})
								}
								allowedTypes={['image']}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{imageUrl ? (
											<img src={imageUrl} alt={imageAlt} />
										) : (
											'Выбрать изображение'
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
					<div className="item-directions-block__hex-inner">
						{items.map((item, index) => (
							<div
								className="item-directions-block__hex-wrapper"
								key={index}
							>
								<div className="item-directions-block__hex">
									<div className="item-directions-block__hex--container">
										<RichText
											tagName="h3"
											value={item.title}
											onChange={(value) =>
												updateItemTitle(value, itemIndex)
											}
											placeholder="Заголовок"
										/>

										<ul>
											{item.list.map((listItem, listIndex) => (
												<li key={listIndex}>
													<RichText
														tagName="span"
														value={listItem}
															onChange={(value) =>
																updateListItem(
																	value,
																	itemIndex,
																	listIndex
																)
															}
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