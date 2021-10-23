<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat_boards;

class ChatController extends Controller
{
      /**
     * チャット情報を全件取得
     *
     * @return JSON
     */
    public function fetchAllData(Request $request)
    {
        $chatData = chat_boards::fetchAll();
        return response()->json($chatData, 200, [], JSON_UNESCAPED_UNICODE);
    }

  /**
     * ユーザー情報を全件取得
     *
     * @return JSON
     */
    public function fetchUserById(Request $request)
    {
        $id = $request->id;
        $chatData = chat_boards::findOrFail($id);
        return response()->json($chatData, 200, [], JSON_UNESCAPED_UNICODE);
    }
  
}
