<?php
function firm_phones($atts = []) {
    if (!function_exists('get_field')) {
        return '';
    }
    $atts = shortcode_atts([
        'title' => 'Телефони',
    ], $atts);
    $title = $atts['title'];
    $phones = get_field('firm_general_phones', 'option');

    if (empty($phones)) {
        return '';
    }
    ob_start();
    ?>
<div class="item-content__item item-content__contacts--item">
    <?php if (!empty($title)) : ?>
    <h2 class="center"><?= esc_html($title); ?></h2>
    <?php endif; ?>
    <div class="item-content__contacts--inner">
        <ul style="list-style: none; padding: 0; margin: 0;">
            <?php foreach ($phones as $phone) : ?>
            <li class="center" data-phone="<?= esc_attr($phone['firm_general_operator']); ?>">
                <a href="tel:<?= preg_replace('/\D+/', '', $phone['firm_general_phone_number']); ?>">
                    <?= esc_html($phone['firm_general_phone_number']); ?>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
<?php

    return ob_get_clean();
}
add_shortcode('firm_phones', 'firm_phones');