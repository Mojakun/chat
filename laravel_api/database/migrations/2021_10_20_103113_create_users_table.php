<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('created_at')->length(10)->comment('レコード制作タイムスタンプ');
            $table->integer('updated_at')->length(10)->nullable()->default(0)->comment('レコード更新日タイムスタンプ');
            $table->integer('deleted_at')->length(10)->nullable()->default(0)->comment('レコード削除日タイムスタンプ');
            $table->text('name')->comment('名前');
            $table->text('kana')->comment('カナ');
            $table->text('mail')->comment('メールアドレス');
            $table->integer('theme_color')->length(2)->comment('テーマカラー');
            $table->integer('is_mail_magazine')->length(2)->comment('テーマカラー');
            $table->text('password')->comment("ログイン用パスワード");
            $table->text('image_path')->nullable()->comment("ユーザイメージ");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
