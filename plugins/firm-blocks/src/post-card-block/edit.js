import { useBlockProps} from '@wordpress/block-editor';
export default function Edit() {
	return (
		<>
			<div {...useBlockProps()}>
				Post Card Block Template
			</div>
		</>
	);
}