import {
	useBlockProps,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="faq__item">
				<div className="faq__head">
					<span className="faq__icon"></span>

					<RichText.Content
						tagName="div"
						className="faq__question"
						value={title}
						placeholder="Question..."
					/>
				</div>

				<div className="faq__body">
					<div className="faq__content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}