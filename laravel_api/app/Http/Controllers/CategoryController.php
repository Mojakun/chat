<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;

class CategoryController extends Controller
{
     /**
     * カテゴリ情報を全件取得
     *
     * @return JSON
     */
    public function fetchAllData(Request $request)
    {
        $userData = Categories::fetchAll();
        return response()->json($userData, 200, [], JSON_UNESCAPED_UNICODE);
    }
}
