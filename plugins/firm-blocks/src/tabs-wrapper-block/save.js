import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<div className="page__wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}