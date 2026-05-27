<?php
$image = $attributes['imageUrl'] ?? '';
$title = $attributes['title'] ?? 'ЦЕНТРАЛЬНИЙ ОФІС';
$map_anchor = $attributes['mapAnchor'] ?? '';
$address = get_field('firm_general_address', 'option');
$map_link = get_field('firm_general_map', 'option');
$wrapper_attributes = get_block_wrapper_attributes();

?>
<div <?php echo $wrapper_attributes; ?>>
    <div class="item-content__office item-content__wrapper flex">
        <?php
    if($image){ ?>
        <div class="item-content__office--map">
            <img src="<?php echo esc_url($image); ?>" alt="google map" />
        </div>
        <?php }
    ?>
        <?php 
    if($address){ ?>
        <div class="item-content__office--address">
            <div class="item-content__office--title">
                <?php echo esc_html($title); ?>
            </div>
            <p>
                <strong><?php echo wp_kses_post($address); ?></strong>
            </p>
            <?php if ($map_link) : ?>
            <a class="item-content__office--link" href="<?php echo esc_url($map_link); ?>" target="_blank"
                rel="noopener noreferrer">
                <?php echo esc_html($map_anchor); ?>
            </a>
            <?php endif; ?>
        </div>
        <?php }
    ?>
    </div>
</div>