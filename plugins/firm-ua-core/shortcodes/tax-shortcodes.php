<?php

// вывод категорий услуг по уровням
function services_categories_shortcode($atts) {
    $atts = shortcode_atts([
        'parent' => '',
    ], $atts);
    $args = [
        'taxonomy'   => 'services-category',
        'hide_empty' => false,
    ];
    // только категории определённого уровня
    if ($atts['parent'] !== '') {
        $args['parent'] = (int)$atts['parent'];
    }
    $terms = get_terms($args);
    if (empty($terms) || is_wp_error($terms)) {
        return '';
    }
    $output = '<ul class="services-categories">';
    foreach ($terms as $term) {
        $output .= '<li>';
        $output .= '<a href="' . get_term_link($term) . '">';
        $output .= $term->name;
        $output .= '</a>';
        $output .= '</li>';
    }
    $output .= '</ul>';
    return $output;
}
add_shortcode('services_categories', 'services_categories_shortcode');
// [services_categories parent="0"]
// end вывод категорий услуг по уровням