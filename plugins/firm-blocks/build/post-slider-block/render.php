<?php
$title = $attributes['title'] ?? 'Заголовок';
$post_type      = $attributes['postType'] ?? 'post';
$posts_per_page = isset($attributes['postsPerPage'])
    ? (int) $attributes['postsPerPage']
    : 6;
$category_id    = $attributes['categoryId'] ?? 0;



$related_posts = '';

if($post_type == 'post'){
    $related_posts = get_field('services-post-attached');
} elseif($post_type == 'services') {
    $related_posts = get_field('services-post-related');
} else {
    $related_posts = '';
}


/**
 * Base query
 */
$args = [
    'post_type'      => $post_type,
    'posts_per_page' => $posts_per_page,
    'post_status'    => 'publish',
];

/**
 * Filter by selected taxonomy term
 */
if ($category_id) {
    $taxonomy = '';
    $taxonomies = get_object_taxonomies($post_type, 'objects');
    if (!empty($taxonomies)) {
        foreach ($taxonomies as $tax) {

            // only hierarchical taxonomies
            if (!$tax->hierarchical) {
                continue;
            }
            if (
                $tax->name === 'post_tag' ||
                str_contains($tax->name, 'tag')
            ) {
                continue;
            }
            $taxonomy = $tax->name;
            break;
        }
    }
    if ($taxonomy) {

        $args['tax_query'] = [
            [
                'taxonomy' => $taxonomy,
                'field'    => 'term_id',
                'terms'    => $category_id,
            ]
        ];
    }
}
if (!empty($related_posts)) {
    $post_ids = array_map(function ($post) {
        return is_object($post)
            ? $post->ID
            : $post;
    }, $related_posts);
    $args = [
        'post_type'      => 'any',
        'post__in'       => $post_ids,
        'orderby'        => 'post__in',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
    ];
}
$query = new WP_Query($args);
if (!$query->have_posts()) {
    return;
}
$wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?= $wrapper_attributes ?>>
    <?php if($title){ ?>
    <h2 class="center"><?= $title ?></h2>
    <?php } ?>
    <div class="item-slider-block item-content__slider swiper">
        <div class="swiper-wrapper">
            <?php while ($query->have_posts()) : $query->the_post(); ?>
            <div class="swiper-slide">
                <?php
                    if(function_exists('firm_render_post_card')){
                        firm_render_post_card();
                    } else { ?>
                <article class="post-card">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail('medium'); ?>

                        <h3><?php the_title(); ?></h3>

                        <div>
                            <?php the_excerpt(); ?>
                        </div>
                    </a>
                </article>
                <?php }
                    ?>
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