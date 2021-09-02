## Code Test for ProcessMaker
To set up for local development, first clone the repo then run:
```
cp .env.example .env
```
Open .env and fill in the database details. Note, this project was built using postgresql (version 13.0) as the database provider, however it should work with most if not all laravel is compatible with.

Additionally, be sure the APP_URL variable is reflective of the local development url as well. 

Next, install the composer dependencies using:
```
composer install --optimize-autoloader
```
Then run:
```
php artisan key:generate
```
Now run the database migrations and seeding:
```
php artisan migrate:fresh
php artisan db:seed
```
Next, install the necessary npm packages:
```
npm install
```
You can compile the assets once using:
```
npx run mix
```
or you can run the following command if you want to utilize hot reloading while developing locally:
```
npx run watch
```
