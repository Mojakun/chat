<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
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
    protected $table = 'messages';


     /**
     * デフォルトで取得してくるカラム
     *
     * @var array
     */
    private $defaultFetchColumns = [
        'messages.id',
        'messages.created_at',
        'messages.updated_at',
        'user_id',
        'message',
        'users.name',
        'users.theme_color',
        'users.image_path'
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
            ->where("messages.deleted_at", 0)
            ->leftJoin("users", "users.id","messages.user_id")
            ->orderBy('messages.id', 'asc')
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
