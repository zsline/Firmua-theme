import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
      <div className='container'>
        <div className='full-content'>
        <InnerBlocks/>
        </div>
      </div>
		</div>
	);
}
