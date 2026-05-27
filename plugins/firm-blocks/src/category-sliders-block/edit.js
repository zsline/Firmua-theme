import { useSelect } from '@wordpress/data';

import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	Spinner
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	const {
		postType,
		postsPerPage,
		title
	} = attributes;
	const taxonomies = useSelect((select) => {
		return select('core').getTaxonomies();
	}, []);

	const postTypes = useSelect((select) => {
		return select('core').getPostTypes({
			per_page: -1,
		});
	}, []);

	/**
	 * Build select options
	 */
	const postTypeOptions = postTypes
		? postTypes
				.filter((type) => {
					return (
						type.viewable &&
						!type.slug.startsWith('wp_')
					);
				})
				.map((type) => ({
					label: type.labels.singular_name,
					value: type.slug,
				}))
		: [];

	const blockProps = useBlockProps({
		className: 'item-slider-block item-content__slider swiper',
	});

	return (
		<div {...blockProps}>

			<InspectorControls>

				<PanelBody
					title="Slider Settings"
					initialOpen={true}
				>

					<TextControl
						label="Title"
						value={title}
						onChange={(value) =>
							setAttributes({
								title: value,
							})
						}
					/>

					{
						!postTypes ? (
							<Spinner />
						) : (
							<SelectControl
								label="Post Type"
								value={postType}
								options={postTypeOptions}
								onChange={(value) =>
									setAttributes({
										postType: value,
									})
								}
							/>
						)
					}
					<RangeControl
						label="Posts per page"
						value={postsPerPage}
						min={1}
						max={20}
						onChange={(value) => {
							setAttributes({
								postsPerPage: parseInt(value, 10),
							});
						}}
					/>
					<p>{postsPerPage}</p>
				</PanelBody>

			</InspectorControls>

			<div className="swiper-wrapper">

				<div
					style={{
						padding: '20px',
						opacity: 0.6,
					}}
				>
					Category Sliders
				</div>

			</div>

		</div>
	);
}