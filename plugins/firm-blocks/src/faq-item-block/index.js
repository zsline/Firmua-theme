import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('firm-blocks/faq-item-block', {
	edit: Edit,
	save
});