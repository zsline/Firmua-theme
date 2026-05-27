<?php
function firm_ua_styles()
{
	wp_enqueue_style(
		'firm-ua-style',
		get_template_directory_uri() . '/assets/css/style.css',
		[],
		wp_get_theme()->get('Version')
	);
	wp_enqueue_script(
		'firm-ua-script',
		get_template_directory_uri() . '/assets/js/app.js',
		[],
		true
	);
}
add_filter('script_loader_tag', 'add_module_to_app_script', 10, 3);

function add_module_to_app_script($tag, $handle, $src)
{
	if ($handle === 'firm-ua-script') {
		return '<script type="module" src="' . esc_url($src) . '"></script>';
	}

	return $tag;
}
add_action('wp_enqueue_scripts', 'firm_ua_styles');

add_shortcode('current_year', function () {
	return date('Y');
});


// ===== Post card rendering =====
function firm_render_post_card() {

    $type = get_post_type();

    $templates = [
        'templates/post-cards/' . $type . '.php',
        'templates/post-cards/post.php',
        'templates/post-cards/default.php',
    ];

    locate_template($templates, true, false);
}