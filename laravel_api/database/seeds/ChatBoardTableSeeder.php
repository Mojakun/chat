<?php

use Illuminate\Database\Seeder;

class ChatBoardTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chat_boards')->insert([
            [
                'created_at'              => time(),
                'user_id'                    => 1,
                'title'                    => 'こんにちは',
                'content'                    => '初めまして、フロントエンドエンジニアです。',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 2,
                'title'                    => 'おっす',
                'content'                    => 'おら森だよ！インフラ大好きだぜ',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 3,
                'title'                    => 'まっつんです。',
                'content'                    => 'バックエンドエンジニアです。主にlaravel触ってまっす',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 1,
                'title'                    => 'laravelいいな',
                'content'                    => 'laravel教えてくださいよー',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 4,
                'title'                    => '高木です。',
                'content'                    => '僕もlaravel触ってますよーーー',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 5,
                'title'                    => 'どうも',
                'content'                    => '何でもできるぜ',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 6,
                'title'                    => 'どうも',
                'content'                    => '夢いっぱいウェイウェイ大学生ですw',
            ],
        ]);
    }
}
