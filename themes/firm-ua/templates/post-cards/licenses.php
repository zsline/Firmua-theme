<article class="post-card post-card--turnkey">
    <?php if(has_post_thumbnail()){ ?>
    <div class="post-card__image">
        <img src="<?= get_the_post_thumbnail_url(); ?>" alt="<?= get_the_title(); ?>">
    </div>
    <?php } ?>
    <h4 class="post-card__title">
        <?= get_the_title(); ?>
    </h4>
    <div class="post-card__btn main-btn">
        Детальніше
    </div>
    <div class="post-modal" hidden>
        <div class="post-card__wrapper">
            <div class="post-card__content">
                <h3 data-modal-title><?= get_the_title() ?></h3>
                <?php 
                if(get_field('firm_turnkey_price') || get_field('firm_turnkey_time')){ ?>
                <div class="post-card__header">
                    <?php 
                    if(get_field('firm_turnkey_price')) { ?>
                    <div class="post-card__header--price">Ціна - <strong><?=get_field('firm_turnkey_price') ?>
                            грн</strong></div>
                    <?php }
                    if(get_field('firm_turnkey_time')){ ?>
                    <div class="post-card__header--time">Строк -
                        <strong><?=get_field('firm_turnkey_time') ?></strong>
                    </div>
                    <?php }
                    ?>
                </div>
                <?php }
                ?>

                <div class="post-card__body">
                    <?php 
                    $catalog = get_field('firm_turnkey_catalog');
                    if($catalog){ ?>
                    <h4>ВКЛЮЧЕНІ ПРОЦЕДУРИ</h4>
                    <div class="post-card__catalog catalog">
                        <div class="post-card__catalog--header catalog__header catalog-row">
                            <div class="catalog__header--name">Послуга</div>
                            <div class="catalog__header--data">Ціна, ₴</div>
                        </div>
                        <?php 
                        foreach($catalog as $item){ ?>
                        <div class="catalog__item catalog-row">
                            <div class="catalog__item--name catalog-row__title">
                                <?=$item['firm_turnkey_catalog_title'] ?>
                            </div>
                            <div class="catalog__item--data"></div>
                        </div>
                        <?php 
                        foreach($item['firm_turnkey_catalog_list'] as $list){ ?>
                        <div class="catalog__item catalog-row">
                            <div class="catalog__item--name">
                                <?=$list['firm_turnkey_catalog_list_name'] ?>
                            </div>
                            <div class="catalog__item--data">
                                <?=$list['firm_turnkey_catalog_list_price'] ?>
                            </div>
                        </div>
                        <?php }
                        ?>
                        <?php }
                        ?>

                    </div>
                    <?php 
                    $details = get_field('firm_turnkey_catalog_details');

                    if($details){ ?>
                    <h4>ДЕТАЛІ ТА НЮАНСИ</h4>
                    <div class="page__wrapper">
                        <?php 
                        foreach($details as $tab){ ?>
                        <div class="page__item">
                            <div class="page__item--tab">
                                <?=$tab['firm_turnkey_catalog_details_tab']  ?>
                            </div>
                            <div class="page__item--content item-content">
                                <?=$tab['firm_turnkey_catalog_details_answer'] ?>
                            </div>
                        </div>
                        <?php }
                        ?>

                    </div>
                    <?php }
                    ?>
                    <?php }
                    ?>
                </div>
            </div>
        </div>
    </div>
</article>