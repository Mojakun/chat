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
                'title'                    => 'そうだね',
                'content'                    => 'わかった',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 2,
                'title'                    => 'そうだね',
                'content'                    => 'わかった',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 3,
                'title'                    => 'そうだね',
                'content'                    => 'わかった',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 4,
                'title'                    => 'そうだね',
                'content'                    => 'わかった',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 5,
                'title'                    => 'そうだね',
                'content'                    => 'わかった',
            ],
            [
                'created_at'              => time(),
                'user_id'                    => 6,
                'title'                    => 'そうだね',
                'content'                    => 'わかった',
            ],
        ]);
    }
}
