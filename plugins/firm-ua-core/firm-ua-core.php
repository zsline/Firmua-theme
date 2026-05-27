<?php

/**
 * Plugin Name: Firm Ua Core
 * Description: Custom plugin for Firm Ua site settings
 * Plugin URI:  http://dereka.pro
 * Author URI:   http://dereka.pro
 * Author:      Web Mercenary
 * Text Domain: firm-ua-core
 * Domain Path: Путь до файла перевода.
 * Requires at least: 5.7
 * Requires PHP: 7.0
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:  https://example.com/link_to_update
 * Version:     1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'register/register-post-types.php';
require_once plugin_dir_path( __FILE__ ) . 'shortcodes/tax-shortcodes.php';