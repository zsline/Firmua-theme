import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import './style.scss';
import './editor.scss';

registerBlockType('firm-blocks/firm-app-block', {
	edit: Edit,
	save: () => null
});
