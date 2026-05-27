<?php
$items = $attributes['items'] ?? [];
$title = $attributes['title'] ?? 'Заголовок';
if (empty($items)) {
    return;
}
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?= $wrapper_attributes ? $wrapper_attributes : '' ?>>
    <div class="item-content__support item-content__wrapper center">
        <?php if ($title) : ?>
        <h2 class="item-content__title">
            <?= esc_html($title) ?>
        </h2>
        <?php endif; ?>
        <div class="item-content__support--inner">
            <?php foreach ($items as $it) :
        $image = $it['imageUrl'] ?? '';
        if (empty($image) && !empty($it['imageId'])) {
            $image = wp_get_attachment_url((int) $it['imageId']);
        }
        if (empty($image)) {
            continue;
        }
        $alt = $it['imageAlt'] ?? $it['alt'] ?? '';
    ?>
            <div class="item-content__support--item">
                <img src="<?= esc_url($image) ?>" alt="<?= esc_attr($alt) ?>">
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>