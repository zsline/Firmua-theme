import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType('firm-blocks/safety-slider-block', {
  edit: Edit,
  save: () => null
});
