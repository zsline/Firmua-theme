<?php

$items = $attributes['items'] ?? [];
if (!$items) return;

$items_for_js = array_map(function($it){
  return [
    'title' => $it['title'] ?? '',
    'list' => array_map(function($list){
      return [
        'title' => $list['title'] ?? '',
        'items' => array_map(function($item){
          return [
            'text' => $item['text'] ?? '',
            'hasTooltip' => $item['hasTooltip'] ?? false,
            'tooltip' => $item['tooltip'] ?? '',
          ];
        }, $list['items'] ?? [])
      ];
    }, $it['list'] ?? []),
    'priceBefore' => $it['priceBefore'] ?? '',
    'price' => $it['price'] ?? '',
    'extraList' => $it['extraList'] ?? [],
    'table' => array_map(function($row){
      return [
        'col1' => $row['col1'] ?? '',
        'col2' => $row['col2'] ?? '',
      ];
    }, $it['table'] ?? []),
    'button' => [
      'detail' => $it['button']['detail'] ?? '',
      'order' => $it['button']['order'] ?? '',
    ],
  ];
}, $items);

$json = wp_json_encode( $items_for_js );
if ( $json === false ) {
    $json = '[]';
}
$wrapper_attributes = get_block_wrapper_attributes();
?>
<div <?= $wrapper_attributes ?> class="item-content__wrapper center">
    <div class="details-slider-block item-content__slider swiper" data-items="<?= esc_attr( $json ) ?>">
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