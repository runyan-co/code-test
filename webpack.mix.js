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
    .sass('resources/scss/bootstrap-vue.scss', 'css/bootstrap-vue.css')
    .js('resources/js/app.js', 'js/bundle.js')
    .vue()
    .extract()
    .version();

if (!mix.inProduction()) {
    mix.browserSync({
        proxy: 'http://process-maker-code-test.test'
    });
}
