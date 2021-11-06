<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageCategoryController extends Controller
{
       /**
     * メッセージ情報を全件取得
     *
     * @return JSON
     */
    public function fetchAll(Request $request)
    {
        $category_id =  (int) $request->category_id;

        $fetchDatas = Message::fetchMessagesByCategoryId($category_id);
        
        return response()->json($fetchDatas, 200, [], JSON_UNESCAPED_UNICODE);
    }

}
