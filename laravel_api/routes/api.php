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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/*
|--------------------------------------------------------------------------
| ユーザー関係
|--------------------------------------------------------------------------
*/
Route::prefix("user")->group(function () {
    Route::get("/fetchUsers", "UserController@fetchAllData"); 
    Route::post("/fetchUserById", "UserController@fetchUserById"); 
});
/*
|--------------------------------------------------------------------------
| 掲示板関係
|--------------------------------------------------------------------------
*/
Route::prefix("chat")->group(function () {
    Route::get("/fetchChats", "ChatController@fetchAllData"); 
    Route::post("/fetchUserById", "ChatController@fetchChatById"); 
});
