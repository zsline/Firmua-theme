import {
	useBlockProps,
	InnerBlocks,
	RichText
} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<section className="faq">
				<RichText.Content
					tagName="h3"
					className="faq__title"
					value={title}
				/>

				<div className="faq__container">
					<InnerBlocks.Content />
				</div>
			</section>
		</div>
	);
}