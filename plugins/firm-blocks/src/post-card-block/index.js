import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType('firm-blocks/post-card-block', {
  edit: Edit,
  save: () => null
});
