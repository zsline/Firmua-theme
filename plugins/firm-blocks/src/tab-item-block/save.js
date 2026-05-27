import {
	useBlockProps,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const { title } = attributes;
	const blockProps = useBlockProps.save({
		className: `page__item ${attributes.active ? 'active' : ''}`,
	});

	return (
		<div {...blockProps}>

			<RichText.Content
				tagName="div"
				className="page__item--tab"
				value={title}
			/>

			<div className="page__item--content item-content">
				<InnerBlocks.Content />
			</div>

		</div>
	);
}