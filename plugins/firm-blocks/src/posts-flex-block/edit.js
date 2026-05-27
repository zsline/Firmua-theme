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
	ToggleControl,
	Spinner
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	const {
		postType,
		postsPerPage,
		title,
		categoryId
	} = attributes;

	/**
	 * Get all taxonomies
	 */
	const taxonomies = useSelect((select) => {
		return select('core').getTaxonomies();
	}, []);

	/**
	 * Get current taxonomy for selected post type
	 */
	const currentTaxonomy = taxonomies
		? taxonomies.find((taxonomy) => {

				// taxonomy must belong to current post type
				if (!taxonomy.types.includes(postType)) {
					return false;
				}

				// only categories-like taxonomies
				if (!taxonomy.hierarchical) {
					return false;
				}

				// exclude tags
				if (
					taxonomy.slug === 'post_tag' ||
					taxonomy.slug.includes('tag')
				) {
					return false;
				}

				return true;
		  })
		: null;

	/**
	 * Load terms
	 */
	const terms = useSelect((select) => {

		if (!currentTaxonomy) {
			return [];
		}

		return select('core').getEntityRecords(
			'taxonomy',
			currentTaxonomy.slug,
			{
				per_page: -1,
			}
		);

	}, [currentTaxonomy]);

	/**
	 * Build terms options
	 */
	const termOptions = terms
		? [
				{
					label: 'All',
					value: 0,
				},
				...terms.map((term) => ({
					label: term.name,
					value: term.id,
				}))
		  ]
		: [];

	/**
	 * Load post types
	 */
	const postTypes = useSelect((select) => {
		return select('core').getPostTypes({
			per_page: -1,
		});
	}, []);

	/**
	 * Build post type options
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
										categoryId: 0,
									})
								}
							/>
						)
					}

					{
						currentTaxonomy && (
							<SelectControl
								label={currentTaxonomy.labels.singular_name}
								value={categoryId}
								options={termOptions}
								onChange={(value) =>
									setAttributes({
										categoryId: Number(value),
									})
								}
							/>
						)
					}
					<ToggleControl
						label="Все посты"
						checked={postsPerPage === -1}
						onChange={(checked) =>
							setAttributes({
								postsPerPage: checked ? -1 : 6,
							})
						}
					/>
					{
						postsPerPage !== -1 && (
							<RangeControl
								label="Колличество постов"
								value={postsPerPage}
								min={1}
								max={20}
								onChange={(value) => {
									setAttributes({
										postsPerPage: parseInt(value, 10),
									});
								}}
							/>
						)
					}
				</PanelBody>

			</InspectorControls>

			<div className="swiper-wrapper">

				<div
					style={{
						padding: '20px',
						opacity: 0.6,
					}}
				>
					Блок вывода постов в flex блок 
				</div>

			</div>

		</div>
	);
}