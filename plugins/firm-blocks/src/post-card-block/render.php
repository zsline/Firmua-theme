<?php $wrapper_attributes = get_block_wrapper_attributes(); ?>
<div <?php echo $wrapper_attributes; ?>>
    <div class="post-card">
        <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
        <h3 class="post-card__title"><?php the_title(); ?></h3>
    </div>
</div>