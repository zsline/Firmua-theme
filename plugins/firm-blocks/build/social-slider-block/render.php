<?php

$items = $attributes['items'] ?? [];

$title = $attributes['title'] ?? '';

$social_networks = array_values(
	get_field(
		'firm_general_social_network',
		'option'
	) ?: []
);

$items_for_js = array_map(function ($it)
use ($social_networks) {

	$id = $it['id'] ?? -1;

	$full = $social_networks[$id] ?? [];

	return [

		'icon' =>
			$full['firm_general_social_network_icon'] ?? '',

		'link' =>
			$full['firm_general_social_network_link'] ?? '',

		'title' =>
			$full['firm_general_social_network_title'] ?? '',

		'appellation' =>
			$full['firm_general_social_network_appellation'] ?? '',

		'image' =>
			$full['firm_general_social_network_img'] ?? '',

		'name' =>
			$full['firm_general_social_network_name'] ?? '',

		'description' =>
			$full['firm_general_social_network_desc'] ?? '',
	];

}, $items);

$json = wp_json_encode($items_for_js);

$wrapper_attributes =
	get_block_wrapper_attributes();

?>

<div <?= $wrapper_attributes ?>>

    <?php if ($title) : ?>

    <h2 class="center">
        <?= wp_kses_post($title) ?>
    </h2>

    <?php endif; ?>

    <div class="item-content__slider swiper" data-items='<?= esc_attr($json) ?>'>
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