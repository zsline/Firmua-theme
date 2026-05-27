import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';

import {
	PanelBody,
	TextControl,
	Button
} from '@wordpress/components';

import { useDispatch, useSelect } from '@wordpress/data';

export default function Edit({
	attributes,
	setAttributes,
	clientId
}) {
	const { title } = attributes;

	const { updateBlockAttributes } =
		useDispatch('core/block-editor');

	const rootClientId =
		useSelect((select) =>
			select('core/block-editor')
				.getBlockRootClientId(clientId),
		[clientId]);

	const openedTab =
		useSelect((select) =>
			select('core/block-editor')
				.getBlockAttributes(rootClientId)
				?.openedTab || '',
		[rootClientId]);

	const isOpen = openedTab === clientId;

	const toggle = () => {
		updateBlockAttributes(rootClientId, {
			openedTab: isOpen ? '' : clientId
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Tab settings">
					<TextControl
						label="Tab title"
						value={title}
						placeholder="Enter tab title"
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<Button onClick={toggle} className="toggle-btn">
					{title || 'Tab'}
				</Button>

				<div
					className={`tab-content ${isOpen ? 'is-open' : ''}`}
					style={{ display: isOpen ? 'block' : 'none' }}
				>
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}