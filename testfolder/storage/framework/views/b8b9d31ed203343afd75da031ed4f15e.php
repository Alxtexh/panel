
<!DOCTYPE html>
<html
    lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>"
    class="<?php echo e(request()->cookie('appearance') === 'dark' ? 'dark' : ''); ?>"
>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        
        <title inertia><?php echo e(config('app.name', 'Panel')); ?></title>

        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.ts']); ?>
        <?php $__inertiaSsrResponse = app(\Inertia\Ssr\SsrState::class)->setPage($page)->dispatch();  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>

    <body class="font-sans antialiased">
        <?php $__inertiaSsrResponse = app(\Inertia\Ssr\SsrState::class)->setPage($page)->dispatch();  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><script data-page="app" type="application/json"><?php echo json_encode($page); ?></script><div id="app"></div><?php } ?>
    </body>
</html>
<?php /**PATH /home/alxtexh/Documents/Panel/testfolder/resources/views/app.blade.php ENDPATH**/ ?>