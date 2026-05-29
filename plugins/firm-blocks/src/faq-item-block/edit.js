import {
	useBlockProps,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/image',
	'core/video',
	'core/embed'
];

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;

	return (
		<div {...useBlockProps()}>
			<div className="faq__item">
				<button type="button" className="faq__head">
					<span className="faq__icon"></span>

					<RichText
						tagName="span"
						className="faq__question"
						value={title}
						onChange={(title) => setAttributes({ title })}
						placeholder="Question..."
					/>
				</button>

				<div className="faq__body">
					<div className="faq__content">
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
							template={[
								[
									'core/paragraph',
									{
										placeholder: 'Answer...'
									}
								]
							]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}