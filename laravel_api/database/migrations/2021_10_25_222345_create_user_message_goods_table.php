<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserMessageGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_message_goods', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('created_at')->length(10)->comment('レコード制作タイムスタンプ');
            $table->integer('updated_at')->length(10)->nullable()->default(0)->comment('レコード更新日タイムスタンプ');
            $table->integer('deleted_at')->length(10)->nullable()->default(0)->comment('レコード削除日タイムスタンプ');
            $table->integer('user_id')->length(10)->comment('ユーザID');
            $table->integer('message_id')->length(10)->comment('メッセージID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_message_goods');
    }
}
