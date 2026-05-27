import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';

import { Button, IconButton } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';


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

	const addListItem = (itemIndex) => {
		const newItems = [...items];
		newItems[itemIndex].list.push('Новий пункт');

		setAttributes({ items: newItems });
	};

	const removeListItem = (itemIndex, listIndex) => {
		const newItems = [...items];

		newItems[itemIndex].list.splice(listIndex, 1);

		setAttributes({ items: newItems });
	};

	const addHexItem = () => {
		const newItems = [
			...items,
			{
				title: 'НОВИЙ БЛОК',
				list: ['Новий пункт'],
			},
		];

		setAttributes({ items: newItems });
	};

	const removeHexItem = (index) => {
		const newItems = [...items];

		newItems.splice(index, 1);

		setAttributes({ items: newItems });
	};

	return (
		<div {...useBlockProps()}>
			<div className="item-directions-block">
				<RichText
					tagName="h3"
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
						{items.map((item, itemIndex) => (
							<div
								className="item-directions-block__hex-wrapper"
								key={itemIndex}
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
													<div className="hex-list-item">
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
															placeholder="Пункт списка"
														/>

														<IconButton
															icon={trash}
															label="Удалить пункт"
															onClick={() =>
																removeListItem(
																	itemIndex,
																	listIndex
																)
															}
														/>
													</div>
												</li>
											))}
										</ul>

										<Button
											variant="secondary"
											icon={plus}
											onClick={() => addListItem(itemIndex)}
										>
											Добавить пункт
										</Button>
										<Button
											variant="secondary"
											isDestructive
											icon={trash}
											onClick={() => removeHexItem(itemIndex)}
											style={{ marginLeft: 8 }}
										>
											Удалить блок
										</Button>
									</div>
										<div className="hex-actions">
											<IconButton
												icon={trash}
												label="Удалить блок"
												isDestructive
												onClick={() => removeHexItem(itemIndex)}
											/>
										</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{(items || []).length < 6 ? (
					<Button
						className="add-hex-button"
						variant="primary"
						onClick={addHexItem}
					>
						Добавить блок
					</Button>
				) : (
					<div style={{ marginTop: 12, color: '#666' }}>
						Достигнуто максимальное количество блоков (6)
					</div>
				)}
			</div>
		</div>
	);
}