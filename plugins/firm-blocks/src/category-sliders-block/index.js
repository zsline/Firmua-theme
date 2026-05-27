import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('firm-blocks/category-sliders-block', {
  edit: Edit,
  save: () => null
});
