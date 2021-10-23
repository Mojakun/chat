<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chat_boards extends Model
{
       /**
     * 自動タイムスタンプを無効
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * モデルと関連しているテーブル
     *
     * @var string
     */
    protected $table = 'chat_boards';


     /**
     * デフォルトで取得してくるカラム
     *
     * @var array
     */
    private $defaultFetchColumns = [
        'chat_boards.id',
        'chat_boards.created_at',
        'chat_boards.updated_at',
        'user_id',
        'title',
        'content',
        'users.name',
        'users.theme_color',
    ];

    /**
     * ユーザー全件取得
     *
     * @param object $query
     * @return object
     */
    public function scopeFetchAll(object $query):object
    {
        return $query
            ->select($this->defaultFetchColumns)
            ->where("chat_boards.deleted_at", 0)
            ->leftJoin("users", "users.id","chat_boards.user_id")
            ->orderBy('chat_boards.id', 'asc')
            ->get();
    }
    /**
     * ユーザー全件取得
     *
     * @param object $query
     * @return object
     */
    public function scopeFetchChatById(object $query,$id):object
    {
        return $query
            ->where([
                "id" => $id,
                "deleted_at" => 0
            ])
            ->select($this->defaultFetchColumns)
            ->get();
    }

}
