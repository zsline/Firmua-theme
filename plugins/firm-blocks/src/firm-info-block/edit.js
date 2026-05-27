import {
	useBlockProps,
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl
} from '@wordpress/components';
export default function Edit({ attributes, setAttributes }) {
	const {
		brandLabel,
		dateLabel,
		specificLabel,
		activityLabel
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Підписи">
					<TextControl
						label="Бренд"
						value={brandLabel}
						onChange={(value) =>
							setAttributes({
								brandLabel: value
							})
						}
					/>
					<TextControl
						label="Дата"
						value={dateLabel}
						onChange={(value) =>
							setAttributes({
								dateLabel: value
							})
						}
					/>
					<TextControl
						label="Спеціалізація"
						value={specificLabel}
						onChange={(value) =>
							setAttributes({
								specificLabel: value
							})
						}
					/>
					<TextControl
						label="Територія"
						value={activityLabel}
						onChange={(value) =>
							setAttributes({
								activityLabel: value
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="item-video-block item-content__video">
					<div className="item-content__video--iframe">
					</div>
					<div className="item-content__video--content">

						<div className="item-content__video--brand">
							{brandLabel}
						</div>

						<div className="item-content__video--date">
							{dateLabel}
						</div>

						<div className="item-content__video--specific">
							{specificLabel}
						</div>

						<div className="item-content__video--activity">
							{activityLabel}
						</div>

					</div>
				</div>
			</div>
		</>
	);
}