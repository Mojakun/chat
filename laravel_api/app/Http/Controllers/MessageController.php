<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Messages;

class MessageController extends Controller
{
     /**
     * メッセージ情報を全件取得
     *
     * @return JSON
     */
    public function fetchAllData(Request $request)
    {
        $userData = Messages::fetchAll();
        return response()->json($userData, 200, [], JSON_UNESCAPED_UNICODE);
    }
}
