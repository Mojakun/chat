<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
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
        'users.image_path',
        'categories.id as category_id'  ,
        'categories.name as category_name'
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
            ->leftJoin("categories", "categories.id","messages.category_id")
            ->orderBy('messages.id', 'asc')
            ->get();
    }
    /**
     * ユーザー全件取得
     *
     * @param object $query
     * @return object
     */
    public function scopeFetchMessageById(object $query,$id):object
    {
        return $query
            ->where([
                "id" => $id,
                "deleted_at" => 0
            ])
            ->select($this->defaultFetchColumns)
            ->get();
    }
    /**
     * ユーザー全件取得
     *
     * @param object $query
     * @return object
     */
    public function scopeFetchMessagesByCategoryId(object $query,$category_id):object
    {
        return $query
            ->select($this->defaultFetchColumns)
            ->where([
                "category_id" => $category_id,
                "messages.deleted_at" => 0
            ])
            ->leftJoin("users", "users.id","messages.user_id")
            ->leftJoin("categories", "categories.id","messages.category_id")
            ->orderBy('messages.id', 'asc')
            ->get();
    }
}
