<?php

$items = $attributes['items'] ?? [];
$title = $attributes['title'] ?? 'Заголовок';
if (!$items) return;
$items_for_js = array_map(function($it){
    $imageUrl = $it['imageUrl'] ?? '';
    if (empty($imageUrl) && !empty($it['imageId'])) {
        $imageUrl = wp_get_attachment_url( (int) $it['imageId'] );
    }
    return [
        'id' => $it['id'] ?? '',
        'title' => $it['title'] ?? '',
        'description' => $it['description'] ?? '',
        'imageUrl' => $imageUrl,
    ];
}, $items);

$json = wp_json_encode( $items_for_js );
if ( $json === false ) {
    $json = '[]';
}
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?= $wrapper_attributes ?> class="item-content__wrapper center">
    <?php if($title){ ?>
    <h2 class="item-content__title"><?= esc_html($title) ?></h2>
    <?php } ?>
    <div class="item-slider-block item-content__slider swiper" data-items="<?= esc_attr( $json ) ?>"
        data-title="<?= esc_attr( $title ) ?>">
        <div class="swiper-wrapper"></div>
    </div>
    <div class="item-content__navigation">
        <div class="item-content__arrows">
            <div class="item-content__prev item-content__btn"></div>
            <div class="item-content__next item-content__btn"></div>
        </div>
        <div class="item-content__pagination"></div>
    </div>
</div>