import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';

import Edit from './edit';
import save from './save';

registerBlockType('firm-blocks/pages-links-block', {
	edit: Edit,
	save,
});