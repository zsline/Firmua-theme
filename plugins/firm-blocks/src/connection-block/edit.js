import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

export default function Edit({ attributes, setAttributes }) {

	const {
		phonesTitle,
		workTitle,
		chatTitle
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Заголовки">

					<TextControl
						label="Телефони"
						value={phonesTitle}
						onChange={(value) =>
							setAttributes({ phonesTitle: value })
						}
					/>

					<TextControl
						label="Графік роботи"
						value={workTitle}
						onChange={(value) =>
							setAttributes({ workTitle: value })
						}
					/>

					<TextControl
						label="Чат"
						value={chatTitle}
						onChange={(value) =>
							setAttributes({ chatTitle: value })
						}
					/>

				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<ServerSideRender
					block="firm-blocks/connection-block"
					attributes={attributes}
				/>
			</div>
		</>
	);
}