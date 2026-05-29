import {
	useBlockProps,
	InnerBlocks,
	RichText
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;

	return (
		<div {...useBlockProps()}>
			<section className="faq">
				<RichText
					tagName="h3"
					className="faq__title"
					value={title}
					onChange={(title) => setAttributes({ title })}
					placeholder="FAQ title..."
				/>

				<div className="faq__container">
					<InnerBlocks
						allowedBlocks={['firm-blocks/faq-item-block']}
						template={[
							['firm-blocks/faq-item-block']
						]}
					/>
				</div>
			</section>
		</div>
	);
}