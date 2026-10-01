<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');

$dir = __DIR__ . '/payloads';

$files = [];
if (is_dir($dir)) {
    foreach (scandir($dir) as $name) {
        if ($name === '.' || $name === '..') continue;

        $path = $dir . '/' . $name;
        if (!is_file($path)) continue;

        /* Only show .elf files */
        if (strtolower(pathinfo($name, PATHINFO_EXTENSION)) !== 'elf') continue;

        $files[] = [
            'name' => $name,
            'size' => filesize($path),
            'type' => 'elf',
        ];
    }
}

usort($files, fn($a, $b) => strcasecmp($a['name'], $b['name']));

echo json_encode($files, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);