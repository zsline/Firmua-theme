<article class="post-card post-card--post">
    <div class="post-card__image">
        <img src="<?= get_the_post_thumbnail_url(); ?>" alt="<?= get_the_title(); ?>">
    </div>
    <h3 class="post-card__title">
        <a href="<?= get_permalink(); ?>">
            <?= get_the_title(); ?>
        </a>
    </h3>
    <div class="post-card__excerpt">
        <?= get_field('post-description'); ?>
    </div>
    <div class="post-card__btns flex">
        <a href="<?= get_permalink(); ?>" class="main-btn">
            ЧИТАТИ
        </a>
        <?php 
        $classDisabled = 'main-btn__disabled';
        $viewLink = get_field('post-view-link');
        if(!empty($viewLink)){ ?>
        <a href="<?=$viewLink ?>" class="main-btn" target="_blank" rel="noopener noreferrer">
            ДИВИТИСЬ
        </a>
        <?php } else { ?>
        <div class="main-btn <?=$classDisabled ?>">
            ДИВИТИСЬ
        </div>
        <?php } ?>

    </div>
</article>