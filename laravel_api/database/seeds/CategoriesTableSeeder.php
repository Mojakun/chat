<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'created_at'              => time(),
                'name'                 => 'laravel',
            ],
            [
                'created_at'              => time(),
                'name'                 => 'Nuxt.js',
            ],
            [
                'created_at'              => time(),
                'name'                 => 'Next.js',
            ],
        ]);
    }
}
