<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Records</title>
        <link href="{{ mix('/css/app.css') }}" as="style" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <b-container>
                <b-row class="justify-content-md-center">
                    <b-col class="my-5" cols="10">
                        <h3>Record Collection</h3>
                        <p>Coding test by Alex Runyan for ProcessMaker.</p>
                        <record-table></record-table>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/bundle.js') }}"></script>
    </body>
</html>
