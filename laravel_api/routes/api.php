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
Route::prefix("message")->group(function () {
    Route::get("/fetchMessages", "MessageController@fetchAllData"); 
});
/*
|--------------------------------------------------------------------------
| 掲示板関係
|--------------------------------------------------------------------------
*/
Route::prefix("category")->group(function () {
    Route::get("/fetchCategories", "CategoryController@fetchAllData"); 
});
