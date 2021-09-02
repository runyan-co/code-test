<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Record Collection | Code Test</title>
        <link href="{{ mix('/css/app.css') }}" as="style" rel="stylesheet">
    </head>
    <body class="bg-light">
        <div id="app"></div>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/bundle.js') }}"></script>
    </body>
</html>
