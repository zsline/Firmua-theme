<?php
/**
 * Render callback для блока Services Variants
 */
$wrapper_attributes = get_block_wrapper_attributes();
if( have_rows('services-post-variants') ): ?>
<div <?= $wrapper_attributes ?> class="services__section">
    <div class="swiper services-variants-block">
        <div class="swiper-wrapper">
            <?php while( have_rows('services-post-variants') ): the_row(); ?>
            <div class="swiper-slide">
                <h4><?php the_sub_field('services-post-variants-title'); ?></h4>
                <p><?php the_title() ?></p>
                <p class="desc"><?php the_sub_field('services-post-variants-description'); ?></p>
                <div class="content"><?php the_sub_field('services-post-variants-content'); ?></div>
                <?php if( get_sub_field('services-post-variants-top') ): ?>
                <span class="badge">Топ</span>
                <?php endif; ?>
                <div class="services-variants-block__price">
                    <p class="price"><?php the_sub_field('services-post-variants-price'); ?> </p>/
                    <p class="time"> <?php the_sub_field('services-post-variants-time'); ?></p>
                </div>
                <a class="main-btn"
                    onclick="callbackFormShow(0, open_form_order_center, send_order, form_order, open_form_order_center)"
                    title="Натискай щоб проконсультуватися або замовити">ЗАМОВИТИ</a>
            </div>
            <?php endwhile; ?>
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
<?php endif; ?>