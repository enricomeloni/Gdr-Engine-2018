<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});







Route::prefix('/character')->group(function() {
    Route::get('/{character}', 'Api\CharacterController@get');
    Route::get('/{character}/characteristics', 'Api\CharacterController@characteristics');
});