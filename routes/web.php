<?php

use Illuminate\Support\Facades\Redis;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

header("Access-Control-Allow-Origin: http://volley.localhost");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

Auth::routes();

Route::group(['middleware' => 'auth'], function() {

    Route::get('/', function() { return view('home'); });
    Route::get('/edit', function() { return view('edit'); });
    Route::get('/dashboard', function() { return view('dashboard'); });

});

Route::get('/scoreboard', function() { return view('scoreboard'); });

Route::resource('team', 'TeamController', ['only' => ['update', 'index']]);

Route::post('team/{team_id}/add', 'TeamController@add');
Route::post('team/{team_id}/remove', 'TeamController@remove');
Route::post('team/{team_id}/win', 'TeamController@win');
