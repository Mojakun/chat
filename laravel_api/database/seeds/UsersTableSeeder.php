<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'created_at'              => time(),
                'name'                    => '武市',
                'kana'                    => 'タケチ',
                'mail'                    => 'aaa@gmail.com',
                'theme_color'             => 1,
                'is_mail_magazine'        => 1,
                'password'                => password_hash('aaa', PASSWORD_DEFAULT),
            ],
            [
                'created_at'              => time(),
                'name'                    => '森',
                'kana'                    => 'モリ',
                'mail'                    => 'bbb@gmail.com',
                'theme_color'             => 2,
                'is_mail_magazine'        => 0,
                'password'                => password_hash('bbb', PASSWORD_DEFAULT),
            ],
            [
                'created_at'              => time(),
                'name'                    => '松田',
                'kana'                    => 'マツダ',
                'mail'                    => 'ccc@gmail.com',
                'theme_color'             => 2,
                'is_mail_magazine'        => 0,
                'password'                => password_hash('ccc', PASSWORD_DEFAULT),
            ],
            [
                'created_at'              => time(),
                'name'                    => '高木',
                'kana'                    => 'タカギ',
                'mail'                    => 'ddd@gmail.com',
                'theme_color'             => 3,
                'is_mail_magazine'        => 1,
                'password'                => password_hash('ddd', PASSWORD_DEFAULT),
            ],
            [
                'created_at'              => time(),
                'name'                    => '山内',
                'kana'                    => 'ヤマウチ',
                'mail'                    => 'eee@gmail.com',
                'theme_color'             => 3,
                'is_mail_magazine'        => 0,
                'password'                => password_hash('eee', PASSWORD_DEFAULT),
            ],
            [
                'created_at'              => time(),
                'name'                    => '櫻井',
                'kana'                    => 'サクライ',
                'mail'                    => 'fff@gmail.com',
                'theme_color'             => 4,
                'is_mail_magazine'        => 1,
                'password'                => password_hash('fff', PASSWORD_DEFAULT),
            ],
        ]);
    }
}
