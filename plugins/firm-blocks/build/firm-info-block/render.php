<?php
$brand_label = $attributes['brandLabel'] ?? 'Бренд';
$date_label = $attributes['dateLabel'] ?? 'Дата створення';
$specific_label = $attributes['specificLabel'] ?? 'Спеціалізація';
$activity_label = $attributes['activityLabel'] ?? 'Територія діяльності';
$brand = get_field('firm_general_brand', 'option');
$date = get_field('firm_general_date', 'option');
$specific = get_field('firm_general_specialty', 'option');
$activity = get_field('firm_general_activity', 'option');
$video = get_field('firm_general_video', 'option');
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?= $wrapper_attributes; ?>>
    <div class="item-video-block item-content__video">
        <div class="item-content__video--iframe">
            <?=$video; ?>
        </div>
        <div class="item-content__video--content">
            <div class="item-content__video--brand">
                <?= esc_html($brand_label); ?> -
                <strong>
                    <?= esc_html($brand); ?>
                </strong>
            </div>
            <div class="item-content__video--date">
                <?= esc_html($date_label); ?> -
                <strong>
                    <?= esc_html($date); ?>
                </strong>
            </div>
            <div class="item-content__video--specific">
                <?= esc_html($specific_label); ?> -
                <strong>
                    <?= esc_html($specific); ?>
                </strong>
            </div>
            <div class="item-content__video--activity">
                <?= esc_html($activity_label); ?> -
                <strong>
                    <?= esc_html($activity); ?>
                </strong>
            </div>
        </div>
    </div>
</div>