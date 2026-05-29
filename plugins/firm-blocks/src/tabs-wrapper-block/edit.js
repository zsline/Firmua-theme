import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { PanelBody, Button } from '@wordpress/components';

import { createBlock } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';

export default function Edit({ clientId, attributes, setAttributes }) {

	const blockProps = useBlockProps();

	const { insertBlocks } = useDispatch('core/block-editor');

	const addTabs = () => {
	if (attributes.tabs?.length) return;

	const titles = [
		'Переваги',
		'Варіанти',
		'Порядок дій',
		'Деталі',
		'Роз\'яснення',
		'Комплекс',
		'Акції'
	];

	const tabs = titles.map((title, index) => ({
		title,
		active: index === 0
	}));

	setAttributes({ tabs });

	const blocks = tabs.map((tab) =>
		createBlock('firm-blocks/tab-item-block', {
			title: tab.title,
			active: tab.active
		})
	);

	insertBlocks(blocks, undefined, clientId);
};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Tabs Manager">
					<Button variant="primary" onClick={addTabs}>
						Шаблон для Услуги
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={[
						'firm-blocks/tab-item-block'
					]}
					orientation="vertical"
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</>
	);
}