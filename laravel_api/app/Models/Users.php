<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Users extends Model
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
    protected $table = 'users';


     /**
     * デフォルトで取得してくるカラム
     *
     * @var array
     */
    private $defaultFetchColumns = [
        "id",
        "created_at",
        "name",
        "kana",
        "mail",
        "theme_color",
        "is_mail_magazine",
        "password"
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
            ->where("users.deleted_at", 0)
            ->select($this->defaultFetchColumns)
            ->get();
    }
    /**
     * ユーザー全件取得
     *
     * @param object $query
     * @return object
     */
    public function scopeFetchUserById(object $query,$id):object
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
