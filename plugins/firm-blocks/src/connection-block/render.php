<?php 
$phones_title = $attributes['phonesTitle'] ?? 'Телефони';
$work_title   = $attributes['workTitle'] ?? 'Графік роботи офісу';
$chat_title   = $attributes['chatTitle'] ?? 'Чат 24/7';
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
    <div class="item-content__contacts item-content__wrapper flex">
        <?php 
                echo do_shortcode('[firm_phones title="' . esc_attr($phones_title) . '"]');
                echo do_shortcode('[firm_work_timer title="' . esc_attr($work_title) . '"]');
            ?>
    </div>
    <?php 
        echo do_shortcode('[firm_chats title="' . esc_attr($chat_title) . '"]');
    ?>
</div>