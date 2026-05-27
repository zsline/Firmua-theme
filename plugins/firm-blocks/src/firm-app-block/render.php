<?php
$title = $attributes['title'] ?? '';
$image = get_field('firm_general_app_img', 'option');
$description = get_field('firm_general_app_description', 'option');
$users = get_field('firm_general_app_users', 'option');
$clients = get_field('firm_general_app_clients', 'option');
$google_play_icon = get_field('firm_general_app_google_icon', 'option');
$google_play_link = get_field('firm_general_app_google_link', 'option');
$store_icon = get_field('firm_general_app_store_icon', 'option');
$store_link = get_field('firm_general_app_store_link', 'option');
$qr = get_field('firm_general_app_qr', 'option');
$text = get_field('firm_general_app_text', 'option');

$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?php echo $wrapper_attributes; ?>>
    <h2 class="center"><?=$title ?></h2>
    <div class="item-content__app--wrapper flex center">
        <img src="<?=$image ?>" alt="МОБІЛЬНИЙ ДОДАТОК">
        <div class="item-content__app--links">
            <?=$description ?>
            <div class="item-content__app--inner flex">
                <div class="item-content__app--icons">
                    <p><?=$text ?></p>
                    <div class="flex">
                        <a href="<?= esc_url($google_play_link ?: '#') ?>"
                            <?= $google_play_link ? 'target="_blank" rel="noopener noreferrer"' : '' ?>>
                            <img src="<?= esc_url($google_play_icon) ?>" alt="GooglePlay">
                        </a>
                        <a href="<?= esc_url($store_link ?: '#') ?>"
                            <?= $store_link ? 'target="_blank" rel="noopener noreferrer"' : '' ?>>
                            <img src="<?= esc_url($store_icon) ?>" alt="AppStore">
                        </a>
                    </div>
                </div>
                <div class="item-content__app--qr">
                    <p>Cкануй</p>
                    <img src="<?=$qr ?>" alt="QR">
                </div>
            </div>
        </div>
    </div>
    <div class="item-content__app--wrapper item-content__wrapper  flex center">
        <div class="item-content__app--desc item-content__item">
            <?=$users ?>
        </div>
        <div class="item-content__app--desc  item-content__item">
            <?=$clients ?>
        </div>
    </div>
</div>