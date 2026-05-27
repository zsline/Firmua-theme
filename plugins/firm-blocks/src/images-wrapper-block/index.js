import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType('firm-blocks/images-wrapper-block', {
  edit: Edit,
  save: () => null
});
