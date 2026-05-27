<?php

$post_type = $attributes['postType'] ?? 'post';
$posts_per_page = $attributes['postsPerPage'] ?? -1;

$taxonomies = get_object_taxonomies($post_type, 'objects');

if (!$taxonomies) {
    return;
}
$taxonomy = null;
foreach ($taxonomies as $tax) {
    if ($tax->hierarchical) {
        $taxonomy = $tax->name;
        break;
    }
}
if (!$taxonomy) {
    return;
}
$terms = get_terms([
    'taxonomy'   => $taxonomy,
    'hide_empty' => true,
]);
if (empty($terms) || is_wp_error($terms)) {
    return;
}
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?= $wrapper_attributes ?> class="item-content__wrapper center">
    <?php foreach ($terms as $index => $term) : ?>
    <?php
        $query = new WP_Query([
            'post_type'      => $post_type,
            'posts_per_page' => $posts_per_page,
            'post_status'    => 'publish',

            'tax_query' => [
                [
                    'taxonomy' => $taxonomy,
                    'field'    => 'term_id',
                    'terms'    => $term->term_id,
                ]
            ]
        ]);
        if (!$query->have_posts()) {
            continue;
        }
        ?>
    <div class="category__section  <?= ($query->found_posts >= 6) ? 'category__section--full' : ''; ?>">
        <h3 class="category__title">
            <?= esc_html($term->name) ?>
        </h3>
        <div class="category__slider swiper">
            <div class="swiper-wrapper">
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                <div class="swiper-slide">
                    <?php firm_render_post_card(); ?>
                </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
        </div>
        <div class="item-content__navigation">
            <div class="item-content__arrows">
                <div class="item-content__prev item-content__btn"></div>
                <div class="item-content__next item-content__btn"></div>
            </div>
            <div class="item-content__pagination"></div>
        </div>
    </div>
    <?php endforeach; ?>
</div>