<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
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
    protected $table = 'categories';


     /**
     * デフォルトで取得してくるカラム
     *
     * @var array
     */
    private $defaultFetchColumns = [
        "id",
        "name",
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
            ->where("categories.deleted_at", 0)
            ->select($this->defaultFetchColumns)
            ->get();
    }
}
