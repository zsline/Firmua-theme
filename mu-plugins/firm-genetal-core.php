<?php
function firm_allow_svg_uploads( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';

	return $mimes;
}
add_filter( 'upload_mimes', 'firm_allow_svg_uploads' );

// Корректное отображение SVG в медиатеке
function firm_fix_svg_display() {
	echo '
	<style>
		.attachment-266x266,
		.thumbnail img {
			width: 100% !important;
			height: auto !important;
		}
	</style>
	';
}
add_action( 'admin_head', 'firm_fix_svg_display' );