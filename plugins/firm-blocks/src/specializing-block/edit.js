import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextControl,
	TextareaControl
} from '@wordpress/components';
export default function Edit({ attributes, setAttributes }) {
	const {
		items = [],
		title,
		description,
		imageId,
		imageUrl
	} = attributes;
	const addItem = () => {
		setAttributes({
			items: [
				...items,
				{
					title: '',
					count: '',
					description: ''
				}
			]
		});
	};
	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({
			items: newItems
		});
	};
	const removeItem = (index) => {
		setAttributes({
			items: items.filter((_, i) => i !== index)
		});

	};
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Элементы">
					<Button
						variant="primary"
						onClick={addItem}
					>
						Добавить элемент
					</Button>
				</PanelBody>
			</InspectorControls>
			<div className="item-content__specialty center">
				<h2>
					<TextControl
						value={title}
						placeholder="Block title"
						onChange={(v) =>
							setAttributes({
								title: v
							})
						}
					/>
				</h2>
				<div className="item-content__specialty--wrapper">
					<p>
						<TextareaControl
							value={description}
							placeholder="Block description"
							onChange={(v) =>
								setAttributes({
									description: v
								})
							}
						/>
					</p>
					<div className="item-content__specialty--inner">
						{items.map((item, index) => (
							<div
								key={index}
								className="item-content__specialty--item specialty-item"
							>
								<TextControl
									label="Title"
									value={item.title}
									onChange={(value) =>
										updateItem(
											index,
											'title',
											value
										)
									}
								/>
								<TextControl
									label="Count"
									value={item.count}
									onChange={(value) =>
										updateItem(
											index,
											'count',
											value
										)
									}
								/>
								<TextControl
									label="Description"
									value={item.description}
									onChange={(value) =>
										updateItem(
											index,
											'description',
											value
										)
									}
								/>
								<Button
									isDestructive
									variant="secondary"
									onClick={() =>
										removeItem(index)
									}
								>
									Удалить
								</Button>
							</div>
						))}
					</div>
					<div>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {

									setAttributes({
										imageId: media.id || '',
										imageUrl: media.url || ''
									});
								}}
								allowedTypes={['image']}
								value={imageId}
								render={({ open }) => (
									<Button
										onClick={open}
										style={{
											width: '100%',
											padding: 0
										}}
									>
										{imageUrl ? (
											<img
												src={imageUrl}
												alt=""
												style={{
													display: 'block',
													width: '100%',
													height: 120,
													objectFit: 'contain',
													marginTop: 48
												}}
											/>

										) : (
											<div
												style={{
													width: '100%',
													height: 90,
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													background: '#f5f5f5',
													color: '#777'
												}}
											>
												Select image
											</div>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
				</div>
			</div>
		</div>
	);
}