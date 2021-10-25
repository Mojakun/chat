<?php

use Illuminate\Database\Seeder;

class UserMessageGoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_message_goods')->insert([
            [
                'created_at'              => time(),
                'user_id'                 => 1,
                'message_id'                 => 1,
            ],
            [
                'created_at'              => time(),
                'user_id'                 => 1,
                'message_id'                 => 2,
            ],
        ]);
    }
}
