<?php

$items = $attributes['items'] ?? [];
if (!$items) return;
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
    <div class="hero hero-home">
        <div class="hero-home__wrapper box-items">
            <?php foreach ($items as $item): ?>
            <div class="hero-home__item box-item item-posts">
                <div class="box-item__title">
                    <?= esc_html($item['title'] ?? ''); ?>
                </div>
                <div class="box-item__tabs">
                    <ul>
                        <?php foreach (($item['tabs'] ?? []) as $tab):
              $post_type = $tab['postType'] ?? 'post';
              $taxonomy = $tab['taxonomy'] ?? '';
              $term_id = $tab['termId'] ?? 0;
      
              $term = ($taxonomy && $term_id) ? get_term($term_id, $taxonomy) : null;
              $query_args = [
                'post_type' => $post_type,
                'posts_per_page' => -1,
              ];
              if ($term_id && $term && !is_wp_error($term)) {
                $query_args['tax_query'] = [[
                  'taxonomy' => $taxonomy,
                  'field' => 'term_id',
                  'terms' => $term_id,
                ]];
              }
              $query = new WP_Query($query_args);
              if ($term && !is_wp_error($term)) {
                $tab_title = $term->name;
              } elseif ($post_type === 'post') {
                $tab_title = 'блог';
              } else {
                $tab_title = 'All';
              }
            ?>
                        <li data-title="<?= esc_attr($tab_title); ?>">
                            <?= esc_html($tab_title); ?>
                            <div class="box-item__list">
                                <ul>
                                    <?php while ($query->have_posts()): $query->the_post(); ?>
                                    <li>
                                        <a href="<?= esc_url(get_permalink()); ?>">
                                            <?= esc_html(get_the_title()); ?>
                                        </a>
                                    </li>
                                    <?php endwhile; wp_reset_postdata(); ?>
                                </ul>
                            </div>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="home-modal">
        <div class="home-modal__wrapper">
            <div class="home-modal__close">
                закрити
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.883911 0.883884L14.8839 14.8839" stroke="#F8F8F8" stroke-width="2.5" />
                    <path d="M14.8839 0.883884L0.883911 14.8839" stroke="#F8F8F8" stroke-width="2.5" />
                </svg>
            </div>
            <div class="home-modal__content">
                <div class="home-modal__content--title">
                    Що саме вас цікавить?
                </div>
                <div class="home-modal__content--wrapper">
                    <div class="home-modal__inner"></div>
                </div>
            </div>
        </div>
    </div>
</div>