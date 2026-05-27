import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import './style.scss';

registerBlockType('firm-blocks/firm-info-block', {
	edit: Edit,
	save: () => null
});
