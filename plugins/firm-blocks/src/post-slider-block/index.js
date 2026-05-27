import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('firm-blocks/post-slider-block', {
  edit: Edit,
  save: () => null
});
