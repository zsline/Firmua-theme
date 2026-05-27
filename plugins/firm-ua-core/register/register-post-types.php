<?php
/**
 * Register custom post types and taxonomies
 */
add_action( 'init', function() {

    // Services
    if ( ! post_type_exists( 'services' ) ) {
        $labels = array(
            'name'               => 'Услуги',
            'singular_name'      => 'Услуга',
            'add_new'            => 'Добавить запись в Услуги',
            'add_new_item'       => 'Добавить новую запись в Услуги',
            'edit_item'          => 'Редактировать запись',
            'new_item'           => 'Новая запись',
            'all_items'          => 'Все Услуги',
            'view_item'          => 'Просмотр услуги на сайте',
            'search_items'       => 'Искать услугу',
            'not_found'          => 'Услуги не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Услуге.',
            'menu_name'          => 'Услуги',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'menu_position'      => null,
            'menu_icon'          => 'dashicons-awards',
            'capability_type'    => 'post',
            'hierarchical'       => true,
            'supports'           => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'page-attributes' ),
            'taxonomies'         => array( 'services-category' ),
            'has_archive'        => true,
            'rewrite'            => true,
            'query_var'          => true,
        );
        register_post_type( 'services', $args );
    }

    if ( ! taxonomy_exists( 'services-category' ) ) {
        register_taxonomy( 'services-category', array( 'services' ), array(
            'labels'            => array(
                'name'              => 'Сфера',
                'singular_name'     => 'Сфера',
                'search_items'      => 'Искать Сферу',
                'all_items'         => 'Все Сферы',
                'view_item'         => 'Смотреть Сферу',
                'parent_item'       => 'Родитель Сферы',
                'parent_item_colon' => 'Родитель Сферы:',
                'edit_item'         => 'Редактировать Сферу',
                'update_item'       => 'Обновить Сферу',
                'add_new_item'      => 'Добавить новую Сферу',
                'new_item_name'     => 'Новая Сфера',
                'menu_name'         => 'Сфера',
                'back_to_items'     => '← Назад к Сферам',
            ),
            'public'             => true,
            'hierarchical'       => true,
            'rewrite'            => true,
            'show_admin_column'  => true,
            'show_in_rest'       => true,
        ) );
    }
    // Бизнес под ключ
    if ( ! post_type_exists( 'turnkey' ) ) {
        $labels = array(
            'name'               => 'Бизнес под ключ',
            'singular_name'      => 'Бизнес под ключ',
            'add_new'            => 'Добавить запись в Бизнес под ключ',
            'add_new_item'       => 'Добавить новую запись в Бизнес под ключ',
            'edit_item'          => 'Редактировать запись в Бизнес под ключ',
            'new_item'           => 'Новая запись в Бизнес под ключ',
            'all_items'          => 'Все записи в Бизнес под ключ',
            'view_item'          => 'Просмотр записи в Бизнес под ключ на сайте',
            'search_items'       => 'Искать запись в Бизнес под ключ',
            'not_found'          => 'Записи в Бизнес под ключ не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Бизнес под ключ.',
            'menu_name'          => 'Бизнес под ключ',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-cart',
            'supports'           => array( 'title', 'thumbnail' ),
        );
        register_post_type( 'turnkey', $args );
    }
    if ( ! taxonomy_exists( 'turnkey-category' ) ) {
        register_taxonomy( 'turnkey-category', array( 'turnkey' ), array(
            'labels'            => array(
                'name'              => 'Категории',
                'singular_name'     => 'Категория',
                'search_items'      => 'Искать Категорию',
                'all_items'         => 'Все Категории',
                'view_item'         => 'Смотреть Категорию',
                'parent_item'       => 'Родитель Категории',
                'parent_item_colon' => 'Родитель Категории:',
                'edit_item'         => 'Редактировать Категорию',
                'update_item'       => 'Обновить Категорию',
                'add_new_item'      => 'Добавить новую Категорию',
                'new_item_name'     => 'Новая Категория',
                'menu_name'         => 'Категория',
                'back_to_items'     => '← Назад к Категориям',
            ),
            'public'             => true,
            'hierarchical'       => true,
            'rewrite'            => true,
            'show_admin_column'  => true,
            'show_in_rest'       => true,
        ) );
    }


    // Готовый бизнес
    if ( ! post_type_exists( 'business' ) ) {
        $labels = array(
            'name'               => 'Готовый бизнес',
            'singular_name'      => 'Готовый бизнес',
            'add_new'            => 'Добавить запись в Готовый бизнес',
            'add_new_item'       => 'Добавить новую запись в Готовый бизнес',
            'edit_item'          => 'Редактировать запись в Готовый бизнес',
            'new_item'           => 'Новая запись в Готовый бизнес',
            'all_items'          => 'Все записи в Готовый бизнес',
            'view_item'          => 'Просмотр записи в Готовый бизнес на сайте',
            'search_items'       => 'Искать запись в Готовый бизнес',
            'not_found'          => 'Записи в Готовый бизнес не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Готовый бизнес.',
            'menu_name'          => 'Готовый бизнес',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-cart',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'business', $args );
    }
 
    // Company for sale
    if ( ! post_type_exists( 'company_for_sale' ) ) {
        $labels = array(
            'name'               => 'Компании на продажу',
            'singular_name'      => 'Компания на продажу',
            'add_new'            => 'Добавить запись в Компании на продажу',
            'add_new_item'       => 'Добавить новую запись в Компании на продажу',
            'edit_item'          => 'Редактировать запись в Компании на продажу',
            'new_item'           => 'Новая запись в Компании на продажу',
            'all_items'          => 'Все записи в Компании на продажу',
            'view_item'          => 'Просмотр записи в Компании на продажу на сайте',
            'search_items'       => 'Искать запись в Компании на продажу',
            'not_found'          => 'Записи в Компании на продажу не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Компании на продажу.',
            'menu_name'          => 'Компании на продажу',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-cart',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'company_for_sale', $args );
    }
    // Licenses
    if ( ! post_type_exists( 'licenses' ) ) {
        $labels = array(
            'name'               => 'Лицензии',
            'singular_name'      => 'Лицензия',
            'add_new'            => 'Добавить запись в Лицензии',
            'add_new_item'       => 'Добавить новую запись в Лицензии',
            'edit_item'          => 'Редактировать запись в Лицензии',
            'new_item'           => 'Новая запись в Лицензии',
            'all_items'          => 'Все записи в Лицензии',
            'view_item'          => 'Просмотр записи в Лицензии',
            'search_items'       => 'Искать запись в Лицензиях',
            'not_found'          => 'Записи в Лицензиях не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Лицензии.',
            'menu_name'          => 'Лицензии',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-cart',
            'supports'           => array( 'title', 'thumbnail' ),
        );
        register_post_type( 'licenses', $args );
    }

    // Promotion
    if ( ! post_type_exists( 'promotion' ) ) {
        $labels = array(
            'name'               => 'Акция',
            'singular_name'      => 'Акции',
            'add_new'            => 'Добавить запись в Акции',
            'add_new_item'       => 'Добавить новую запись в Акции',
            'edit_item'          => 'Редактировать запись в Акции',
            'new_item'           => 'Новая запись в Акции',
            'all_items'          => 'Все записи в Акции',
            'view_item'          => 'Просмотр записи в Акции на сайте',
            'search_items'       => 'Искать запись в Акции',
            'not_found'          => 'Записи в Акции не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Акции.',
            'menu_name'          => 'Акции',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-megaphone',
            'supports'           => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail' ),
        );
        register_post_type( 'promotion', $args );
    }

    // Training + taxonomy
    if ( ! post_type_exists( 'training' ) ) {
        $labels = array(
            'name'               => 'Тренинг',
            'singular_name'      => 'Тренинги',
            'add_new'            => 'Добавить запись в Тренинги',
            'add_new_item'       => 'Добавить новую запись в Тренинги',
            'edit_item'          => 'Редактировать запись в Тренинги',
            'new_item'           => 'Новая запись в Тренинги',
            'all_items'          => 'Все записи в Тренинги',
            'view_item'          => 'Просмотр записи в Тренинги на сайте',
            'search_items'       => 'Искать запись в Тренинги',
            'not_found'          => 'Записи в Тренинги не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Тренинги.',
            'menu_name'          => 'Тренинги',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-welcome-learn-more',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'training', $args );
    }

    if ( ! taxonomy_exists( 'training-type' ) ) {
        register_taxonomy( 'training-type', array( 'training' ), array(
            'labels'            => array(
                'name'              => 'Тип',
                'singular_name'     => 'Тип',
                'search_items'      => 'Искать Тип',
                'all_items'         => 'Все Типы',
                'view_item'         => 'Смотреть типы',
                'parent_item'       => 'Родитель Типа',
                'parent_item_colon' => 'Родитель Типа:',
                'edit_item'         => 'Редактировать Тип',
                'update_item'       => 'Обновить Тип',
                'add_new_item'      => 'Добавить новый тип',
                'new_item_name'     => 'Новый тип',
                'menu_name'         => 'Тип',
                'back_to_items'     => '← Назад к Типам',
            ),
            'public'             => true,
            'hierarchical'       => true,
            'rewrite'            => true,
            'show_in_rest'       => true,
        ) );
    }
   // Team
    if ( ! post_type_exists( 'team' ) ) {
        $labels = array(
            'name'               => 'Коллектив',
            'singular_name'      => 'Коллектив',
            'add_new'            => 'Добавить запись в Коллектив',
            'add_new_item'       => 'Добавить новую запись в Коллектив',
            'edit_item'          => 'Редактировать запись',
            'new_item'           => 'Новая запись',
            'all_items'          => 'Весь Коллектив',
            'view_item'          => 'Просмотр Коллектива на сайте',
            'search_items'       => 'Искать в Коллективе',
            'not_found'          => 'Не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Коллективе.',
            'menu_name'          => 'Коллектив',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'menu_icon'          => 'dashicons-buddicons-groups',
            'capability_type'    => 'post',
            'hierarchical'       => false,
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
            'taxonomies'         => array( 'team-role' ),
            'has_archive'        => false,
            'rewrite'            => true,
            'query_var'          => true,
        );
        register_post_type( 'team', $args );
    }

    if ( ! taxonomy_exists( 'team-role' ) ) {
        register_taxonomy( 'team-role', array( 'team' ), array(
            'labels'            => array(
                'name'              => 'Роль',
                'singular_name'     => 'Роль',
                'search_items'      => 'Искать Роль',
                'all_items'         => 'Все Роли',
                'view_item'         => 'Смотреть Роли',
                'parent_item'       => 'Родитель Роли',
                'parent_item_colon' => 'Родитель Роли:',
                'edit_item'         => 'Редактировать Роль',
                'update_item'       => 'Обновить Роль',
                'add_new_item'      => 'Добавить новую Роль',
                'new_item_name'     => 'Новая Роль',
                'menu_name'         => 'Роли',
                'back_to_items'     => '← Назад к Ролям',
            ),
            'public'             => true,
            'hierarchical'       => true,
            'rewrite'            => true,
            'show_admin_column'  => true,
            'show_in_rest'       => true,
        ) );
    }

    // City
    if ( ! post_type_exists( 'city' ) ) {
        $labels = array(
            'name'               => 'Города',
            'singular_name'      => 'Город',
            'add_new'            => 'Добавить запись в Город',
            'add_new_item'       => 'Добавить новую запись в Город',
            'edit_item'          => 'Редактировать запись в Город',
            'new_item'           => 'Новая запись в Город',
            'all_items'          => 'Все записи в Город',
            'view_item'          => 'Просмотр записи в Город на сайте',
            'search_items'       => 'Искать запись в Город',
            'not_found'          => 'Записи в Город не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Город.',
            'menu_name'          => 'Город',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => null,
            'menu_icon'          => 'dashicons-admin-multisite',
            'taxonomies'         => array( 'country' ),
            'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail' ),
        );
        register_post_type( 'city', $args );
    }

    if ( ! taxonomy_exists( 'city-region' ) ) {
        register_taxonomy( 'city-region', array( 'city' ), array(
            'labels'            => array(
                'name'              => 'Область',
                'singular_name'     => 'Область',
                'search_items'      => 'Искать Область',
                'all_items'         => 'Все Области',
                'view_item'         => 'Смотреть Область',
                'parent_item'       => 'Родитель Области',
                'parent_item_colon' => 'Родитель Области:',
                'edit_item'         => 'Редактировать Область',
                'update_item'       => 'Обновить Область',
                'add_new_item'      => 'Добавить новую Область',
                'new_item_name'     => 'Новая Область',
                'menu_name'         => 'Область',
                'back_to_items'     => '← Назад к Областям',
            ),
            'description'        => '',
            'public'             => true,
            'hierarchical'       => true,
            'rewrite'            => true,
            'show_admin_column'  => false,
            'show_in_rest'       => true,
        ) );
    }

    // Project
    if ( ! post_type_exists( 'project' ) ) {
        $labels = array(
            'name'               => 'Проекты',
            'singular_name'      => 'Проект',
            'add_new'            => 'Добавить запись в Проекты',
            'add_new_item'       => 'Добавить новую запись в Проекты',
            'edit_item'          => 'Редактировать запись',
            'new_item'           => 'Новая запись',
            'all_items'          => 'Все Проекты',
            'view_item'          => 'Просмотр проекта на сайте',
            'search_items'       => 'Искать проект',
            'not_found'          => 'Проекта не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Проекте.',
            'menu_name'          => 'Проекты',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'menu_icon'          => 'dashicons-portfolio',
            'capability_type'    => 'post',
            'hierarchical'       => false,
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
            'taxonomies'         => array( 'category' ),
            'has_archive'        => false,
            'rewrite'            => true,
            'query_var'          => true,
        );
        register_post_type( 'project', $args );
    }

    // Jobs
    if ( ! post_type_exists( 'jobs' ) ) {
        $labels = array(
            'name'               => 'Вакансии',
            'singular_name'      => 'Вакансия',
            'add_new'            => 'Добавить запись в Вакансии',
            'add_new_item'       => 'Добавить новую запись в Вакансии',
            'edit_item'          => 'Редактировать запись в Вакансии',
            'new_item'           => 'Новая запись в Вакансии',
            'all_items'          => 'Все записи в Вакансии',
            'view_item'          => 'Просмотр записи в Вакансии на сайте',
            'search_items'       => 'Искать запись в Вакансии',
            'not_found'          => 'Записи в Вакансии не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Вакансии.',
            'menu_name'          => 'Вакансии',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-id-alt',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'jobs', $args );
    }

    // Reviews
    if ( ! post_type_exists( 'reviews' ) ) {
        $labels = array(
            'name'               => 'Отзывы',
            'singular_name'      => 'Отзыв',
            'add_new'            => 'Добавить запись в Отзывы',
            'add_new_item'       => 'Добавить новую запись в Отзывы',
            'edit_item'          => 'Редактировать запись в Отзывы',
            'new_item'           => 'Новая запись в Отзывы',
            'all_items'          => 'Все записи в Отзывы',
            'view_item'          => 'Просмотр записи в Отзывы на сайте',
            'search_items'       => 'Искать запись в Отзывы',
            'not_found'          => 'Записи в Отзывы не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Отзывы.',
            'menu_name'          => 'Отзывы',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-format-status',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'reviews', $args );
    }

    // Dialogues
    if ( ! post_type_exists( 'dialogues' ) ) {
        $labels = array(
            'name'               => 'Диалоги',
            'singular_name'      => 'Диалог',
            'add_new'            => 'Добавить запись в Диалоги',
            'add_new_item'       => 'Добавить новую запись в Диалоги',
            'edit_item'          => 'Редактировать запись в Диалоги',
            'new_item'           => 'Новая запись в Диалоги',
            'all_items'          => 'Все записи в Диалоги',
            'view_item'          => 'Просмотр записи в Диалоги на сайте',
            'search_items'       => 'Искать запись в Диалоги',
            'not_found'          => 'Записи в Диалоги не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Диалоги.',
            'menu_name'          => 'Диалоги',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-coffee',
            'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
        );
        register_post_type( 'dialogues', $args );
    }

    // News
    if ( ! post_type_exists( 'news' ) ) {
        $labels = array(
            'name'               => 'Новости',
            'singular_name'      => 'Новость',
            'add_new'            => 'Добавить запись в Новости',
            'add_new_item'       => 'Добавить новую запись в Новости',
            'edit_item'          => 'Редактировать запись в Новости',
            'new_item'           => 'Новая запись в Новости',
            'all_items'          => 'Все записи в Новости',
            'view_item'          => 'Просмотр записи в Новости на сайте',
            'search_items'       => 'Искать запись в Новости',
            'not_found'          => 'Записи в Новости не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Новости.',
            'menu_name'          => 'Новости',
        );
        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => null,
            'menu_icon'          => 'dashicons-media-document',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'news', $args );
    }

    // Cashback
    if ( ! post_type_exists( 'cashback' ) ) {
        $labels = array(
            'name'               => 'Кешбек',
            'singular_name'      => 'Кешбек',
            'add_new'            => 'Добавить запись в Кешбек',
            'add_new_item'       => 'Добавить новую запись в Кешбек',
            'edit_item'          => 'Редактировать запись в Кешбеке',
            'new_item'           => 'Новая запись в Кешбеке',
            'all_items'          => 'Все записи в Кешбеке',
            'view_item'          => 'Просмотр записи в Кешбеке на сайте',
            'search_items'       => 'Искать запись в Кешбеке',
            'not_found'          => 'Записи в Кешбеке не найдено.',
            'not_found_in_trash' => 'В корзине нет записи о Кешбеке.',
            'menu_name'          => 'Кешбек',
        );
        $args = array(
            'labels'             => $labels,
            'description'        => '',
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_icon'          => 'dashicons-tag',
            'supports'           => array( 'title', 'editor', 'excerpt', 'comments', 'author', 'thumbnail' ),
        );
        register_post_type( 'cashback', $args );
    }
} );