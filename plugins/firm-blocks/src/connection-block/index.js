import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType('firm-blocks/connection-block', {
  edit: Edit,
  save: () => null
});
