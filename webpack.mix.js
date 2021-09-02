const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setResourceRoot('resources')
    .setPublicPath('public')
    .sass('resources/scss/app.scss', 'css/app.css')
    .js('resources/js/index.js', 'js/bundle.js')
    .vue({ version: 2 })
    .extract()
    .version();

if (!mix.inProduction()) {
    mix.browserSync('http://process-maker-code-test.test');
}
