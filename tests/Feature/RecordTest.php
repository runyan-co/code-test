<?php

namespace Tests\Feature;

use App\Models\Record;
use App\Exceptions\InvalidRecordStatusValue;
use Tests\TestCase;

class RecordTest extends TestCase
{
    public function testRecordStatusValueIsValidWhenSet()
    {
        $this->expectException(InvalidRecordStatusValue::class);

        Record::factory()->create([
            'status' => $this->faker->words(1)
        ]);
    }
}
