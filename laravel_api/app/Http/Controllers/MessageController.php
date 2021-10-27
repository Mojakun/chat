<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Messages;
use App\Models\Users;

class MessageController extends Controller
{
     /**
     * メッセージ情報を全件取得
     *
     * @return JSON
     */
    public function fetchAllData(Request $request)
    {
        $fetchDatas = Messages::fetchAll();
        
        return response()->json($fetchDatas, 200, [], JSON_UNESCAPED_UNICODE);
    }
}
