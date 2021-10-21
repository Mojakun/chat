<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UserController extends Controller
{
 
  /**
     * ユーザー情報を全件取得
     *
     * @return JSON
     */
    public function fetchAllData(Request $request)
    {
        $userData = Users::fetchAll();
        return response()->json($userData, 200, [], JSON_UNESCAPED_UNICODE);
    }

  /**
     * ユーザー情報を全件取得
     *
     * @return JSON
     */
    public function fetchUserById(Request $request)
    {
        $id = $request->id;
        $userData = Users::findOrFail($id);
        return response()->json($userData, 200, [], JSON_UNESCAPED_UNICODE);
    }
  
}
