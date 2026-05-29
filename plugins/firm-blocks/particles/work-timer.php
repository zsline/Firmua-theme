<?php

function work_timer($atts = []) {
    $atts = shortcode_atts([
        'title' => 'ГРАФІК РОБОТИ ОФІСУ',
    ], $atts);
    $title = $atts['title'];
    $daysMap = [
        1 => [
            'slug'  => 'monday',
            'count' => 1,
        ],
        2 => [
            'slug'  => 'tuesday',
            'count' => 1,
        ],
        3 => [
            'slug'  => 'wednesday',
            'count' => 1,
        ],
        4 => [
            'slug'  => 'thursday',
            'count' => 1,
        ],
        5 => [
            'slug'  => 'friday',
            'count' => 1,
        ],
        6 => [
            'slug'  => 'saturday',
            'count' => 1,
        ],
        7 => [
            'slug'  => 'sunday',
            'count' => 1,
        ],
    ];

    $currentTimestamp = current_time('timestamp');
    $currentDayNumber = (int) date('N', $currentTimestamp);

    $countdownType = 'open';
    $targetTimestamp = null;

    // -----------------------------
    // TIMER
    // -----------------------------

    for ($i = 0; $i < 7; $i++) {

        $dayNumber = (($currentDayNumber - 1 + $i) % 7) + 1;
        $daySlug = $daysMap[$dayNumber]['slug'];

        $field = get_field("firm_general_work_{$daySlug}", 'option');

        if (
            empty($field) ||
            empty($field['start']) ||
            empty($field['end'])
        ) {
            continue;
        }

        $start = sprintf('%02d', (int) $field['start']);
        $end   = sprintf('%02d', (int) $field['end']);

        $date = date('Y-m-d', strtotime("+{$i} day", $currentTimestamp));

        $startTimestamp = strtotime($date . ' ' . $start . ':00');
        $endTimestamp   = strtotime($date . ' ' . $end . ':00');

        // Сегодня
        if ($i === 0) {

            // До открытия
            if ($currentTimestamp < $startTimestamp) {

                $countdownType = 'open';
                $targetTimestamp = $startTimestamp;

                break;
            }

            // До закрытия
            if (
                $currentTimestamp >= $startTimestamp &&
                $currentTimestamp < $endTimestamp
            ) {

                $countdownType = 'close';
                $targetTimestamp = $endTimestamp;

                break;
            }

        } else {

            // Следующий рабочий день
            $countdownType = 'open';
            $targetTimestamp = $startTimestamp;

            break;
        }
    }

    if (!$targetTimestamp) {
        return '';
    }

    $diff = $targetTimestamp - $currentTimestamp;

    $hours = floor($diff / 3600);
    $minutes = floor(($diff % 3600) / 60);
    $seconds = $diff % 60;

    $timeString = sprintf(
        '%02d:%02d:%02d',
        $hours,
        $minutes,
        $seconds
    );

    // -----------------------------
    // SCHEDULE CHART
    // -----------------------------

    $scheduleGroups = [];
    $currentGroup = null;

    foreach ($daysMap as $day) {

        $slug = $day['slug'];

        $field = get_field("firm_general_work_{$slug}", 'option');

        $start = !empty($field['start'])
            ? sprintf('%02d', (int) $field['start'])
            : '';

        $end = !empty($field['end'])
            ? sprintf('%02d', (int) $field['end'])
            : '';

        $key = $start . '-' . $end;

        // Выходной
        if (!$start || !$end) {

            if (
                $currentGroup &&
                $currentGroup['type'] === 'off'
            ) {

                $currentGroup['days'][] = true;

            } else {

                if ($currentGroup) {
                    $scheduleGroups[] = $currentGroup;
                }

                $currentGroup = [
                    'type' => 'off',
                    'days' => [true],
                ];
            }

            continue;
        }

        // Рабочий день
        if (
            $currentGroup &&
            $currentGroup['type'] === 'work' &&
            $currentGroup['key'] === $key
        ) {

            $currentGroup['days'][] = true;

        } else {

            if ($currentGroup) {
                $scheduleGroups[] = $currentGroup;
            }

            $currentGroup = [
                'type'  => 'work',
                'key'   => $key,
                'start' => $start,
                'end'   => $end,
                'days'  => [true],
            ];
        }
    }

    if ($currentGroup) {
        $scheduleGroups[] = $currentGroup;
    }

    ob_start();

    ?>
<div class="item-content__item item-content__contacts--item">
    <?php if (!empty($title)) : ?>
    <h2 class="center"><?= esc_html($title); ?></h2>
    <?php endif; ?>
    <div class="item-content__works flex">
        <div class="item-content__wrapper--chart schedule-chart">
            <?php foreach ($scheduleGroups as $group) : ?>
            <div class="schedule-chart__item">
                <div class="
                schedule-chart__days
                <?= $group['type'] === 'off'
                    ? 'schedule-chart__days--off'
                    : ''; ?>
            ">
                    <?php foreach ($group['days'] as $day) : ?>
                    <div class="schedule-chart__day"></div>
                    <?php endforeach; ?>
                </div>
                <div class="schedule-chart__times">
                    <?php if ($group['type'] === 'off') : ?>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.6064 13.6008L12.0024 15.9228L15.276 13.6644L22.614 20.904C22.4204 20.9672 22.2156 20.9992 21.9996 21H2.0004C1.7364 21 1.4844 20.9484 1.2528 20.856L8.6064 13.6008ZM24 7.6512V18.9996C24 19.296 23.9352 19.5768 23.82 19.83L16.6272 12.7332L24 7.6512ZM0 7.7148L7.2504 12.6732L0.1272 19.7028C0.0437553 19.4777 0.00069479 19.2397 0 18.9996L0 7.7148ZM21.9996 3C23.1036 3 24 3.8952 24 5.0004V5.7036L11.9976 13.9776L0 5.772V5.0004C0 3.8964 0.8952 3 2.0004 3H21.9996Z"
                            fill="#0B8500" />
                    </svg>
                    <?php else : ?>
                    <?= esc_html($group['start']); ?>-<?= esc_html($group['end']); ?>
                    <?php endif; ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="item-content__wrapper--timer">
            <h3>
                <?= $countdownType === 'open'
                ? 'До відкриття'
                : 'До зачинення'; ?>
            </h3>
            <div class="item-content__wrapper--countdown" data-time="<?= esc_attr($timeString); ?>">
                <?= esc_html($timeString); ?>
            </div>
            <div class="flex center">
                <span>годин</span>
                <span>хвилин</span>
                <span>секунд</span>
            </div>
        </div>
    </div>
</div>
<?php

    return ob_get_clean();
}

add_shortcode('firm_work_timer', 'work_timer');

add_action('wp_enqueue_scripts', function () {

	wp_enqueue_script(
		'firm-ua-timer',
		FIRM_BLOCKS_URL . 'assets/js/particles/timer.js',
		[],
		null,
		true
	);

});