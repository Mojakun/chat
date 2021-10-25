<?php

use Illuminate\Database\Seeder;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('messages')->insert([
            [
                'created_at'              => time(),
                'user_id'                 => 1,
                'message'                 => 'こんにちは',
                'category_id'             => 1,
            ],
            [
                'created_at'              => time(),
                'user_id'                 => 2,
                'message'                 => 'こんにちは',
                'category_id'             => 2,
            ],
            [
                'created_at'              => time(),
                'user_id'                 => 3,
                'message'                 => 'こんにちは',
                'category_id'             => 2,
            ],
            [
                'created_at'              => time(),
                'user_id'                 => 4,
                'message'                 => 'こんにちは',
                'category_id'             => 2,
            ],
            [
                'created_at'              => time(),
                'user_id'                 => 5,
                'message'                 => 'こんにちは',
                'category_id'             => 2,
            ],
            [
                'created_at'              => time(),
                'user_id'                 => 6,
                'message'                 => 'こんにちは',
                'category_id'             => 2,
            ],
            
        ]);
    }
}
