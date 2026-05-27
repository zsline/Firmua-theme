<?php
/**
 * Plugin Name:       Firm Blocks
 * Description:       Додаткові блоки Gutenberg для теми Firm Ua.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Web Mercenary
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       firm-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
define('FIRM_BLOCKS_URL', plugin_dir_url(__FILE__));

add_filter('block_categories_all', function($categories){
	return array_merge(
		[
			[
			'slug' => 'firm-blocks',
			'title' => __('Firm UA Blocks', 'firm-blocks')
			]
		],
		$categories
	);
});
function create_block_firm_blocks_block_init() {
	foreach ( glob( __DIR__ . '/build/*/block.json' ) as $block ) {
		register_block_type( dirname( $block ) );
	}
}
add_action( 'init', 'create_block_firm_blocks_block_init' );

function firm_blocks_init() {
	load_plugin_textdomain(
		'firm-blocks',
		false,
		dirname(plugin_basename(__FILE__)) . '/languages'
	);
}
add_action('init', 'firm_blocks_init');

wp_set_script_translations(
	'firm-blocks-editor',
	'firm-blocks',
	plugin_dir_path(__FILE__) . 'languages'
);

add_action('wp_enqueue_scripts', 'firm_ua_blocks_enqueue_scripts');
function firm_ua_blocks_enqueue_scripts() {
	wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css');
	wp_enqueue_script(
	'swiper',
	'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js',
	[],
	null,
	true
);
}
include_once __DIR__ . '/particles/work-timer.php';
include_once __DIR__ . '/particles/firm-phones.php';
include_once __DIR__ . '/particles/firm-chats.php';


add_action('rest_api_init', function () {

	register_rest_route(
		'firm/v1',
		'/social-networks',
		[
			'methods' => 'GET',

			'callback' => function () {

				$items = array_values(
					get_field(
						'firm_general_social_network',
						'option'
					) ?: []
				);

				return array_map(
					function ($it, $index) {

						return [
							'_id' => $index,

							'icon' =>
								$it['firm_general_social_network_icon'] ?? '',

							'link' =>
								$it['firm_general_social_network_link'] ?? '',

							'title' =>
								$it['firm_general_social_network_title'] ?? '',

							'appellation' =>
								$it['firm_general_social_network_appellation'] ?? '',

							'image' =>
								$it['firm_general_social_network_img'] ?? '',

							'name' =>
								$it['firm_general_social_network_name'] ?? '',

							'description' =>
								$it['firm_general_social_network_desc'] ?? '',
						];

					},
					$items,
					array_keys($items)
				);

			},

			'permission_callback' => '__return_true'
		]
	);
});
if (!function_exists('__t')) {
    function __t($string) {
        return function_exists('pll__') ? pll__($string) : $string;
    }
}