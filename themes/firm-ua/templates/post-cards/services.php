<article class="post-card post-card--services">
    <div class="post-card__image">
        <?php 
        if( has_post_thumbnail()){ ?>
        <img src="<?= get_the_post_thumbnail_url(); ?>" alt="<?= get_the_title(); ?>">
        <?php } ?>
    </div>
    <h3 class="post-card__title">
        <a href="<?= get_permalink(); ?>">
            <?= get_the_title(); ?>
        </a>
    </h3>
    <div class="post-card__excerpt">
        <?= get_the_excerpt(); ?>
    </div>
    <a href="<?= get_permalink(); ?>" class="main-btn" style="margin-top: auto;">Дивитись</a>
</article>