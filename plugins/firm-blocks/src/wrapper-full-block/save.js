import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className='container'>
				<div className='full-content'>
				<InnerBlocks.Content/>
				</div>
			</div>
		</div>
	);
}
