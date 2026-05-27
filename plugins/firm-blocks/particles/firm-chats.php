<?php
function firm_chats($atts = []) {
    if (!function_exists('get_field')) {
        return '';
    }
    $atts = shortcode_atts([
        'title' => 'Чат 24/7',
    ], $atts);
    $title = $atts['title'];
    $chats = get_field('firm_general_social', 'option');

    if (empty($chats)) {
        return '';
    }
    ob_start();
    ?>
<div class="item-content__chats">
    <?php if (!empty($title)) : ?>
    <h2 class="center"><?= esc_html($title); ?></h2>
    <?php endif; ?>
    <div class="item-content__wrapper flex">
        <?php foreach ($chats as $chat) : ?>
        <div class="item-content__chat flex">
            <a href="<?= esc_url($chat['firm_general_social_link']); ?>" target="_blank" rel="noopener">
                <img src="<?php echo esc_url($chat['firm_general_social_icon']); ?>"
                    alt="<?= esc_html($chat['firm_general_social_icon']); ?>" />
                <?= esc_html($chat['firm_general_social_name']); ?>
            </a>
            <div class="item-content__chat--qr">
                <img src="<?php echo esc_url($chat['firm_general_social_qr']); ?>"
                    alt="<?= esc_html($chat['firm_general_social_name']); ?>" />
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>
<?php

    return ob_get_clean();
}
add_shortcode('firm_chats', 'firm_chats');