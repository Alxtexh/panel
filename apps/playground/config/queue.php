<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Queue Connection Name
    |--------------------------------------------------------------------------
    |
    | Laravel's queue supports a variety of backends via a single, unified
    | API, giving you convenient access to each backend using identical
    | syntax for each. The default queue connection is defined below.
    |
    */

    'default' => env('QUEUE_CONNECTION', 'database'),

    /*
    |--------------------------------------------------------------------------
    | Queue Connections
    |--------------------------------------------------------------------------
    |
    | Here you may configure the connection options for every queue backend
    | used by your application. An example configuration is provided for
    | each backend supported by Laravel. You're also free to add more.
    |
    | Drivers: "sync", "database", "beanstalkd", "sqs", "redis",
    |          "deferred", "background", "failover", "null"
    |
    */

    'connections' => [

        'sync' => [
            'driver' => 'sync',
        ],

        'database' => [
            'driver' => 'database',
            'connection' => env('DB_QUEUE_CONNECTION'),
            'table' => env('DB_QUEUE_TABLE', 'jobs'),
            'queue' => env('DB_QUEUE', 'default'),
            /*
             * LONGER THAN THE LONGEST JOB, and that is a correctness rule
             * rather than a tuning knob.
             *
             * `retry_after` is how long the queue waits before deciding a
             * reserved job was abandoned and handing it to ANOTHER worker. It
             * is not a retry in the `$tries` sense - a job with `$tries = 1`
             * is still re-delivered this way, because nothing failed as far as
             * the queue is concerned.
             *
             * At Laravel's stock 90 seconds this panel was wrong for four of
             * its five jobs. `ExportRecords` is allowed 900 and MEASURES 54
             * seconds on the reference tenant's 250,000 subscribers, so a
             * larger organisation crosses 90 comfortably - and gets a second
             * worker exporting the same rows, two files and two "your export
             * is ready" notifications. `RunBulkAction` re-run applies the
             * mutation TWICE. `RestoreBackup` is allowed an hour, so a second
             * restore would start over the top of one already in progress.
             *
             * THE TRADE IS DELIBERATE: a worker that genuinely dies now leaves
             * its job unreclaimed for an hour rather than ninety seconds. That
             * is the correct side to err on - a delayed export is an
             * inconvenience, a doubly-applied bulk mutation is data nobody can
             * put back.
             *
             * Raise the longest `$timeout` and this has to move with it.
             */
            'retry_after' => (int) env('DB_QUEUE_RETRY_AFTER', 3700),
            'after_commit' => false,
        ],

        'beanstalkd' => [
            'driver' => 'beanstalkd',
            'host' => env('BEANSTALKD_QUEUE_HOST', 'localhost'),
            'queue' => env('BEANSTALKD_QUEUE', 'default'),
            // The same rule as the database connection above, for the same
            // reason: reclaiming a job before it could have finished hands a
            // running export, bulk mutation or restore to a second worker.
            'retry_after' => (int) env('BEANSTALKD_QUEUE_RETRY_AFTER', 3700),
            'block_for' => 0,
            'after_commit' => false,
        ],

        'sqs' => [
            'driver' => 'sqs',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account-id'),
            'queue' => env('SQS_QUEUE', 'default'),
            'suffix' => env('SQS_SUFFIX'),
            'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
            'after_commit' => false,
        ],

        'redis' => [
            'driver' => 'redis',
            'connection' => env('REDIS_QUEUE_CONNECTION', 'default'),
            'queue' => env('REDIS_QUEUE', 'default'),
            // The same rule as the database connection above, for the same
            // reason: reclaiming a job before it could have finished hands a
            // running export, bulk mutation or restore to a second worker.
            'retry_after' => (int) env('REDIS_QUEUE_RETRY_AFTER', 3700),
            'block_for' => null,
            'after_commit' => false,
        ],

        'deferred' => [
            'driver' => 'deferred',
        ],

        'background' => [
            'driver' => 'background',
        ],

        'failover' => [
            'driver' => 'failover',
            'connections' => [
                'database',
                'deferred',
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Job Batching
    |--------------------------------------------------------------------------
    |
    | The following options configure the database and table that store job
    | batching information. These options can be updated to any database
    | connection and table which has been defined by your application.
    |
    */

    'batching' => [
        'database' => env('DB_CONNECTION', 'sqlite'),
        'table' => 'job_batches',
    ],

    /*
    |--------------------------------------------------------------------------
    | Failed Queue Jobs
    |--------------------------------------------------------------------------
    |
    | These options configure the behavior of failed queue job logging so you
    | can control how and where failed jobs are stored. Laravel ships with
    | support for storing failed jobs in a simple file or in a database.
    |
    | Supported drivers: "database-uuids", "dynamodb", "file", "null"
    |
    */

    'failed' => [
        'driver' => env('QUEUE_FAILED_DRIVER', 'database-uuids'),
        'database' => env('DB_CONNECTION', 'sqlite'),
        'table' => 'failed_jobs',
    ],

];
