import { useBlockProps, InspectorControls,	MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
export default function Edit({ attributes, setAttributes }) {

	const {
		title,
		mapAnchor,
		imageId,
		imageUrl
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Заголовки">
					<TextControl
						label="ЦЕНТРАЛЬНИЙ ОФІС"
						value={title}
						onChange={(value) =>
							setAttributes({ title: value })
						}
					/>
					<TextControl
						label="НА МАПУ"
						value={mapAnchor}
						onChange={(value) =>
							setAttributes({ mapAnchor: value })
						}
					/>
					
				</PanelBody>
				<PanelBody title="Зображення">

					<MediaUploadCheck>

						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									imageId: media.id,
									imageUrl: media.url
								});
							}}
							allowedTypes={['image']}
							value={imageId}
							render={({ open }) => (
								<Button
									variant="primary"
									onClick={open}
								>
									{imageUrl
										? 'Змінити зображення'
										: 'Завантажити зображення'}
								</Button>
							)}
						/>

					</MediaUploadCheck>

					{imageUrl && (
						<div style={{ marginTop: '15px' }}>
							<img
								src={imageUrl}
								alt=""
								style={{
									width: '100%',
									height: 'auto'
								}}
							/>
						</div>
					)}

				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<ServerSideRender
					block="firm-blocks/address-block"
					attributes={attributes}
				/>
			</div>
		</>
	);
}