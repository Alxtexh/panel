<?php

declare(strict_types=1);

return [
    'group' => 'Operaciones',

    'backups' => [
        'title' => 'Copias de seguridad',
        'empty' => 'Aun no hay instantaneas.',
        'settings' => 'Ajustes',
        'snapshots' => 'Instantaneas',
        'database' => 'Base de datos',
    ],

    'logs' => [
        'title' => 'Registros',
        'subtitle' => 'La parte final de cada archivo. Solo lectura.',
        'empty' => 'Aun no hay archivos de registro.',
        'nothing' => 'Nada que mostrar.',
        'file' => 'Archivo de registro',
        'filter' => 'Filtrar lineas',
        'filter_placeholder' => 'Filtrar lineas…',
        'truncated' => 'Se muestra el final del archivo: las entradas anteriores estan en disco.',
    ],

    'monitoring' => [
        'title' => 'Monitoreo',
        'no_samples' => 'Aun no hay muestras. El historial aparece cuando el programador ejecuta panel:monitor-sample, cada cinco minutos si cron esta activo.',
        'last_24h' => 'Ultimas 24 horas',
        'unavailable' => 'no disponible',
    ],
];
