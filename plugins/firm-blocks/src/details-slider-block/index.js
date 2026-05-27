import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './editor.scss';
import './style.scss';

registerBlockType('firm-blocks/details-slider-block', {
  edit: Edit,
  save: () => null
});
