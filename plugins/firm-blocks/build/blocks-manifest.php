<?php
// This file is generated. Do not modify it manually.
return array(
	'address-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/address-block',
		'title' => 'Address Block',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'ЦЕНТРАЛЬНИЙ ОФІС'
			),
			'mapAnchor' => array(
				'type' => 'string',
				'default' => 'НА МАПУ'
			),
			'imageId' => array(
				'type' => 'number'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'category-sliders-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/category-sliders-block',
		'title' => 'Category Sliders',
		'category' => 'firm-blocks',
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 6
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'connection-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/connection-block',
		'title' => 'Connection Block',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'phonesTitle' => array(
				'type' => 'string',
				'default' => 'Телефони'
			),
			'workTitle' => array(
				'type' => 'string',
				'default' => 'Графік роботи офісу'
			),
			'chatTitle' => array(
				'type' => 'string',
				'default' => 'Чат 24/7'
			)
		)
	),
	'details-slider-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/details-slider-block',
		'title' => 'Details Slider',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'faq-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/faq-block',
		'version' => '0.1.0',
		'title' => 'FAQ Block',
		'category' => 'firm-blocks',
		'icon' => 'smiley',
		'description' => 'Example block FAQ',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'firm-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'faq-item-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/faq-item-block',
		'version' => '0.1.0',
		'title' => 'FAQ Item',
		'category' => 'firm-blocks',
		'icon' => 'smiley',
		'description' => 'FAQ item block',
		'parent' => array(
			'firm-blocks/faq-block'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'firm-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'firm-app-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/firm-app-block',
		'title' => 'App Info Block',
		'category' => 'firm-blocks',
		'icon' => 'index-card',
		'description' => 'Firm Ua Info Block',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'МОБІЛЬНИЙ ДОДАТОК'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'firm-info-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/firm-info-block',
		'title' => 'Firm Ua Info Block',
		'category' => 'firm-blocks',
		'icon' => 'index-card',
		'description' => 'Firm Ua Info Block',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'brandLabel' => array(
				'type' => 'string',
				'default' => 'Бренд'
			),
			'dateLabel' => array(
				'type' => 'string',
				'default' => 'Дата створення'
			),
			'specificLabel' => array(
				'type' => 'string',
				'default' => 'Спеціалізація'
			),
			'activityLabel' => array(
				'type' => 'string',
				'default' => 'Територія діяльності'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'header-home-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/header-home-block',
		'version' => '0.1.0',
		'title' => 'Header for Home Page',
		'category' => 'firm-blocks',
		'icon' => 'smiley',
		'description' => 'Example block header for Home Page',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'firm-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'hero-home' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/hero-home',
		'title' => 'Hero Home',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'hex-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/hex-block',
		'version' => '1.0.0',
		'title' => 'Hex Block Editor',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'description' => 'Hex directions block',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'ДОПОМАГАЄМО'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'ПЛАНУВАТИ ВІДКРИТТЯ',
						'list' => array(
							'Готуємо',
							'Консультуємо',
							'Радимо'
						)
					),
					array(
						'title' => 'СТВОРЮВАТИ БІЗНЕС',
						'list' => array(
							'Реєструємо',
							'Оформляємо',
							'Запускаємо'
						)
					),
					array(
						'title' => 'ФОРМУЛЮВАТИ МРІЇ',
						'list' => array(
							'Надихаємо',
							'Орієнтуємо',
							'Навчаємо'
						)
					),
					array(
						'title' => 'ВЕСТИ ДІЯЛЬНІСТЬ',
						'list' => array(
							'Впроваджуємо',
							'Супроводжуємо',
							'Забезпечуємо'
						)
					),
					array(
						'title' => 'ФІНІШУВАТИ СТРУКТУРИ',
						'list' => array(
							'Оптимізуємо',
							'Припиняємо',
							'Ліквідуємо'
						)
					),
					array(
						'title' => 'РОЗВИВАТИ НАПРЯМКИ',
						'list' => array(
							'Удосконалюємо',
							'Модернізуємо',
							'Налагоджуємо'
						)
					)
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'hex-block-view' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/hex-block-view',
		'version' => '1.0.0',
		'title' => 'Hex Block View',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'description' => 'Hex directions block',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'ДОПОМАГАЄМО'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'ПЛАНУВАТИ ВІДКРИТТЯ',
						'list' => array(
							'Готуємо',
							'Консультуємо',
							'Радимо'
						)
					),
					array(
						'title' => 'СТВОРЮВАТИ БІЗНЕС',
						'list' => array(
							'Реєструємо',
							'Оформляємо',
							'Запускаємо'
						)
					),
					array(
						'title' => 'ФОРМУЛЮВАТИ МРІЇ',
						'list' => array(
							'Надихаємо',
							'Орієнтуємо',
							'Навчаємо'
						)
					),
					array(
						'title' => 'ВЕСТИ ДІЯЛЬНІСТЬ',
						'list' => array(
							'Впроваджуємо',
							'Супроводжуємо',
							'Забезпечуємо'
						)
					),
					array(
						'title' => 'ФІНІШУВАТИ СТРУКТУРИ',
						'list' => array(
							'Оптимізуємо',
							'Припиняємо',
							'Ліквідуємо'
						)
					),
					array(
						'title' => 'РОЗВИВАТИ НАПРЯМКИ',
						'list' => array(
							'Удосконалюємо',
							'Модернізуємо',
							'Налагоджуємо'
						)
					)
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'images-wrapper-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/images-wrapper-block',
		'title' => 'Images Wrapper',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'item-slider-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/item-slider-block',
		'title' => 'Items Slider',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'pages-links-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/pages-links-block',
		'version' => '1.0.0',
		'title' => 'Pages Links Block',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'description' => 'Block for added pages links',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'post-card-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/post-card-block',
		'title' => 'Post Card Block',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'description' => 'Card Block for post type Post',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'post-slider-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/post-slider-block',
		'title' => 'Post Slider',
		'category' => 'firm-blocks',
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'categoryId' => array(
				'type' => 'number',
				'default' => 0
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 6
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'posts-flex-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/posts-flex-block',
		'title' => 'Post Flex Wrapper',
		'category' => 'firm-blocks',
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'categoryId' => array(
				'type' => 'number',
				'default' => 0
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 6
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'safety-slider-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/safety-slider-block',
		'title' => 'Safety Slider',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'services-variants-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/services-variants-block',
		'title' => 'Services Variants',
		'category' => 'firm-blocks',
		'description' => 'Слайдер с вариантами услуг',
		'supports' => array(
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'social-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/social-block',
		'title' => 'Social',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'social-slider-block' => array(
		'apiVersion' => 3,
		'name' => 'firm-blocks/social-slider-block',
		'title' => 'Social Slider',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'specializing-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/specializing-block',
		'version' => '1.0.0',
		'title' => 'Specializing Block',
		'category' => 'firm-blocks',
		'icon' => 'screenoptions',
		'description' => 'Block for Specializing',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'tab-item-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/tab-item-block',
		'title' => 'Tab Item',
		'category' => 'firm-blocks',
		'parent' => array(
			'firm-blocks/tabs-wrapper-block'
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'active' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'tabs-wrapper-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/tabs-wrapper-block',
		'title' => 'Tabs Wrapper',
		'category' => 'firm-blocks',
		'icon' => 'index-card',
		'textdomain' => 'firm-blocks',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'openedTab' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'firm-blocks/openedTab' => 'openedTab'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'wrapper-full-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'firm-blocks/wrapper-full-block',
		'version' => '0.1.0',
		'title' => 'Full Wrapper for Page',
		'category' => 'firm-blocks',
		'icon' => 'smiley',
		'description' => 'Example block full wrapper for Page',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'firm-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
