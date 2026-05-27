import {
	useBlockProps,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';

import {
	PanelBody,
	TextControl
} from '@wordpress/components';

import preview from './preview.png';

export default function Edit({ attributes, setAttributes }) {

	const {
		title = ''
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Заголовок">
					<TextControl
						label="Заголовок"
						value={title}
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="item-app-block">
					<RichText
						tagName="h2"
						className='center'
						value={title}
						placeholder="Введите заголовок"
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>
					<img
						src={preview}
						alt="Block preview"
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</div>
		</>
	);
}