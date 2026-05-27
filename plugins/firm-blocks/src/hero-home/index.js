import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType('firm-blocks/hero-home', {
  edit: Edit,
  save: () => null
});
