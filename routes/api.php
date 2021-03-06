<?php

use App\Http\Controllers\RecordController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::name('record.')->prefix('record')->group(function () {

    Route::name('stored')
         ->post('/stored', [RecordController::class, 'retrieve']);

    Route::name('update')
         ->post('/update/{record}', [RecordController::class, 'update']);

    Route::name('delete')
        ->delete('/delete/{record}', [RecordController::class, 'delete']);
});
