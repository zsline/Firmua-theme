import {
	useBlockProps,
	RichText,
	InspectorControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextareaControl,
	SelectControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
export default function Edit({ attributes, setAttributes }) {
	const { items = [] } = attributes;
	const pages = useSelect((select) => {
		return select('core').getEntityRecords(
			'postType',
			'page',
			{
				per_page: -1
			}
		);
	}, []);
	const addItem = () => {
		setAttributes({
			items: [
				...items,
				{
					title: '',
					description: '',
					pageId: '',
					link: ''
				}
			]
		});

	};

	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		if (field === 'pageId') {
			const page = pages?.find(
				(page) => page.id === Number(value)
			);
			newItems[index].link = page?.link || '';
		}
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
			<div className="page__wrapper box-items col-2">
				{items.map((item, index) => (
					<div
						className="page__item box-item"
						key={index}
					>
						<SelectControl
							label="Страница"
							value={item.pageId}
							options={[
								{
									label: 'Выберите страницу',
									value: ''
								},
								...(pages || []).map((page) => ({
									label: page.title.rendered,
									value: page.id
								}))
							]}
							onChange={(value) =>
								updateItem(
									index,
									'pageId',
									value
								)
							}
						/>
						<div className="box-item__title">
							<RichText
								tagName="div"
								value={item.title}
								placeholder="Заголовок"
								onChange={(value) =>
									updateItem(
										index,
										'title',
										value
									)
								}
							/>

						</div>
						<div className="box-item__tabs">
							<p>
								<TextareaControl
									label="Описание"
									value={item.description}
									onChange={(value) =>
										updateItem(
											index,
											'description',
											value
										)
									}
								/>

							</p>
						</div>
						<Button
							variant="secondary"
							isDestructive
							onClick={() => removeItem(index)}
						>
							Удалить
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}