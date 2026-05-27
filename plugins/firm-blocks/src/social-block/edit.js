import {
	useBlockProps,
	RichText,
	InspectorControls
} from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
	SelectControl
} from '@wordpress/components';

import apiFetch from '@wordpress/api-fetch';

import {
	useEffect,
	useState
} from '@wordpress/element';

export default function Edit({
	attributes,
	setAttributes
}) {

	const {
		title = '',
		items = []
	} = attributes;

	const [socialNetworks, setSocialNetworks] =
		useState([]);

	useEffect(() => {

		apiFetch({
			path: '/firm/v1/social-networks'
		}).then((data) => {

			setSocialNetworks(data || []);

		});

	}, []);

	const addItem = () => {

		setAttributes({
			items: [
				...items,
				{
					id: ''
				}
			]
		});

	};

	const updateItem = (
		index,
		value
	) => {

		const next = [...items];

		next[index] = {
			id: Number(value)
		};

		setAttributes({
			items: next
		});

	};

	const removeItem = (index) => {

		setAttributes({
			items: items.filter(
				(_, i) => i !== index
			)
		});

	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Slider settings">

					<Button
						variant="primary"
						onClick={addItem}
					>
						Add item
					</Button>

				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>

				<RichText
					tagName="h2"
					value={title}
					placeholder="Block title"
					onChange={(v) =>
						setAttributes({
							title: v
						})
					}
				/>

				{items.map((item, index) => {

					const current =
						socialNetworks.find(
							(s) =>
								s._id === item.id
						);

					return (
						<div
							key={index}
							style={{
								border: '1px solid #ddd',
								padding: 12,
								marginBottom: 12
							}}
						>

							<SelectControl
								label="Social network"
								value={item.id || ''}
								options={[
									{
										label: 'Select item',
										value: ''
									},
									...socialNetworks.map(
										(network) => ({
											label:
												network.appellation,
											value:
												network._id
										})
									)
								]}
								onChange={(value) =>
									updateItem(
										index,
										value
									)
								}
							/>

							{current?.title && (
								<h3>
									{current.title}
								</h3>
							)}

							{current?.description && (
								<p>
									{
										current.description
									}
								</p>
							)}

							<Button
								isDestructive
								onClick={() =>
									removeItem(index)
								}
							>
								Delete
							</Button>

						</div>
					);

				})}

			</div>
		</>
	);

}