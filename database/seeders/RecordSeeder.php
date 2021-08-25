<?php

namespace Database\Seeders;

use App\Models\Record;
use Illuminate\Database\Seeder;

class RecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws \Exception
     */
    public function run(): void
    {
        Record::factory()->count(random_int(10, 50))
                         ->create();
    }
}
